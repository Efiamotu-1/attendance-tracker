import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuestionReport } from "../../services/apiUserFeedback";
import toast from "react-hot-toast";

export function useCreateQuestionReport() {
  const queryClient = useQueryClient();

  const { mutate: submitQuestionReport, isLoading: isSubmitting } = useMutation({
    mutationFn: (reportData) => createQuestionReport(reportData),
    onSuccess: () => {
      toast.success("Thank you! Your report has been submitted.");
      queryClient.invalidateQueries({ queryKey: ["userFeedback"] });
    },
    onError: (err) => {
      toast.error("Failed to submit report: " + err.message);
    },
  });

  return { submitQuestionReport, isSubmitting };
}
