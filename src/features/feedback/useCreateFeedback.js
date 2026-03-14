import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserFeedback } from "../../services/apiUserFeedback";
import toast from "react-hot-toast";

export function useCreateFeedback() {
  const queryClient = useQueryClient();

  const { mutate: createFeedback, isLoading: isCreating } = useMutation({
    mutationFn: (feedbackData) => createUserFeedback(feedbackData),
    onSuccess: () => {
      toast.success("Feedback submitted successfully!");
      queryClient.invalidateQueries({ queryKey: ["userFeedback"] });
    },
    onError: (err) => {
      toast.error("Failed to submit feedback: " + err.message);
    },
  });

  return { createFeedback, isCreating };
}
