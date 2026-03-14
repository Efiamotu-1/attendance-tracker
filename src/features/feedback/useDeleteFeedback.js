import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserFeedback } from "../../services/apiUserFeedback";
import toast from "react-hot-toast";

export function useDeleteFeedback() {
  const queryClient = useQueryClient();

  const { mutate: deleteFeedback, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteUserFeedback(id),
    onSuccess: () => {
      toast.success("Feedback deleted");
      queryClient.invalidateQueries({ queryKey: ["userFeedback"] });
    },
    onError: (err) => {
      toast.error("Failed to delete: " + err.message);
    },
  });

  return { deleteFeedback, isDeleting };
}
