import { useQuery } from "@tanstack/react-query";
import {
  getExamLeaderboard,
  getExamLeaderboardSessions,
} from "../../services/apiQuizAttempts";

export function useExamLeaderboard(limitCount = 10, sessionId = null) {
  const {
    isLoading,
    data: leaderboard,
    error,
  } = useQuery({
    queryKey: ["examLeaderboard", limitCount, sessionId],
    queryFn: () => getExamLeaderboard(limitCount, sessionId),
  });

  return { isLoading, error, leaderboard };
}

export function useExamLeaderboardSessions() {
  const {
    isLoading,
    data: sessions,
    error,
  } = useQuery({
    queryKey: ["examLeaderboardSessions"],
    queryFn: getExamLeaderboardSessions,
  });

  return { isLoading, error, sessions };
}
