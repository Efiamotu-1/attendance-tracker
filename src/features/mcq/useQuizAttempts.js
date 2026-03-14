import { useQuery } from "@tanstack/react-query";
import { getQuizAttempts } from "../../services/apiQuizAttempts";

export function useQuizAttempts() {
  const {
    isLoading,
    data: attempts,
    error,
  } = useQuery({
    queryKey: ["quizAttempts"],
    queryFn: getQuizAttempts,
  });

  return { isLoading, error, attempts };
}
