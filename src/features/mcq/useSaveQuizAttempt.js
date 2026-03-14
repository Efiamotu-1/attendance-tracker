import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveQuizAttempt as saveQuizAttemptApi } from "../../services/apiQuizAttempts";
import toast from "react-hot-toast";

export function useSaveQuizAttempt() {
  const queryClient = useQueryClient();

  const { mutate: saveAttempt, isLoading: isSaving } = useMutation({
    mutationFn: (attemptData) => saveQuizAttemptApi(attemptData),
    onSuccess: () => {
      toast.success("Quiz result saved!");
      queryClient.invalidateQueries({ queryKey: ["quizAttempts"] });
    },
    onError: (err) => {
      console.error("Failed to save quiz attempt:", err);
      // Don't show error toast — quiz results are still shown, just not persisted
    },
  });

  return { saveAttempt, isSaving };
}
