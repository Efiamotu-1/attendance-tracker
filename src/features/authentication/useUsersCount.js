import { useQuery } from "@tanstack/react-query";
import { getUsersCount } from "../../services/apiAuth";

export function useUsersCount() {
    const {isLoading, data: usersCount, error} = useQuery({
        queryKey: ['users-count'],
        queryFn: () => getUsersCount(),
        retry: false, // Don't retry if profiles table doesn't exist
    })

    // Return 0 if there's an error (e.g., profiles table doesn't exist)
    if (error) {
        return { isLoading: false, usersCount: { count: 0 } }
    }

    return {isLoading, usersCount}
} 
