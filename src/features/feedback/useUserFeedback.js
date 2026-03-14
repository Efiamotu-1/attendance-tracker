import { useQuery } from "@tanstack/react-query";
import { getUserFeedback } from "../../services/apiUserFeedback";

export function useUserFeedback(isAdmin = false) {
  const {
    isLoading,
    data: feedbackItems,
    error,
  } = useQuery({
    queryKey: ["userFeedback", isAdmin],
    queryFn: () => getUserFeedback(isAdmin),
  });

  return { isLoading, error, feedbackItems };
}
