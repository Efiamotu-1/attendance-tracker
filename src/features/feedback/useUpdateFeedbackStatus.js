import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFeedback } from "../../services/apiUserFeedback";
import toast from "react-hot-toast";

export function useUpdateFeedback() {
  const queryClient = useQueryClient();

  const { mutate: updateFeedbackItem, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, status, admin_comment }) =>
      updateFeedback(id, { status, admin_comment }),
    onSuccess: () => {
      toast.success("Feedback updated");
      queryClient.invalidateQueries({ queryKey: ["userFeedback"] });
    },
    onError: (err) => {
      toast.error("Failed to update: " + err.message);
    },
  });

  return { updateFeedbackItem, isUpdating };
}
