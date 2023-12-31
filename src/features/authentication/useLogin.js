import { useMutation} from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate();

    const {mutate: login, isLoading} = useMutation({
        mutationFn: ({email, password}) => loginApi({email,password}),
        onError: (err) => {
            toast.error(err.message);
          },
        onSuccess: (user) => {
        navigate('/dashboard', { replace: true });
            localStorage.setItem("user",JSON.stringify(user))
        }  
    })

    return {login, isLoading}
}