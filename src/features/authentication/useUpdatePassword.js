import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdatePassword() {
  const navigate = useNavigate();

  const { mutate: changePassword, isLoading } = useMutation({
    mutationFn: updatePassword,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("Password updated. You can now sign in.");
      navigate("/login", { replace: true });
    },
  });

  return { changePassword, isLoading };
}
