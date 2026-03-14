import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/apiUserFeedback";

export function useIsAdmin() {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    staleTime: 5 * 60 * 1000, // cache for 5 minutes
  });

  return {
    isAdmin: profile?.role === "admin",
    isLoading,
    profile,
  };
}
