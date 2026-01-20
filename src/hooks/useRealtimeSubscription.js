import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '../services/supabase';

/**
 * Hook to set up Supabase real-time subscriptions
 * Automatically invalidates React Query cache when database changes occur
 */
export function useRealtimeSubscription() {
  const queryClient = useQueryClient();

  useEffect(() => {
    // Subscribe to attendance table changes
    const attendanceChannel = supabase
      .channel('attendance-changes')
      .on(
        'postgres_changes',
        {
          event: '*', // Listen to INSERT, UPDATE, DELETE
          schema: 'public',
          table: 'attendance',
        },
        (payload) => {
          console.log('Attendance changed:', payload);
          
          // Invalidate all related queries
          queryClient.invalidateQueries({ queryKey: ['reports'] });
          queryClient.invalidateQueries({ queryKey: ['courses'] });
          queryClient.invalidateQueries({ queryKey: ['course'] });
          queryClient.invalidateQueries({ queryKey: ['courseAttendance'] });
        }
      )
      .subscribe();

    // Subscribe to courses table changes
    const coursesChannel = supabase
      .channel('courses-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'courses',
        },
        (payload) => {
          console.log('Courses changed:', payload);
          
          // Invalidate courses queries
          queryClient.invalidateQueries({ queryKey: ['courses'] });
          queryClient.invalidateQueries({ queryKey: ['course'] });
        }
      )
      .subscribe();

    // Cleanup subscriptions on unmount
    return () => {
      supabase.removeChannel(attendanceChannel);
      supabase.removeChannel(coursesChannel);
    };
  }, [queryClient]);
}
