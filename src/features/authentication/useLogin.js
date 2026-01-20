import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: (data) => {
      // Set the user in the query cache
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard", { replace: true });
    },
  });

  return { login, isLoading };
}
