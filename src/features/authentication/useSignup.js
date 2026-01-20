import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) =>
      signupAPI({ name, email, password }),
    onSuccess: (data) => {
      // Set the user in the query cache
      queryClient.setQueryData(["user"], data.user);
      toast.success(
        "Account created successfully! Please check your email to verify your account."
      );
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
