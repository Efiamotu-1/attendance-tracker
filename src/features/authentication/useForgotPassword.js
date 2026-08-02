import { useMutation } from "@tanstack/react-query";
import { requestPasswordReset } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useForgotPassword() {
  const { mutate: sendResetEmail, isLoading, isSuccess } = useMutation({
    mutationFn: requestPasswordReset,
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { sendResetEmail, isLoading, isSuccess };
}
