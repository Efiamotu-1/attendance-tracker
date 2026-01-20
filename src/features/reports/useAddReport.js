import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReport as addReportApi} from "../../services/apiReports";
import toast from "react-hot-toast";


export function useAddReport() {
    const queryClient = useQueryClient()
    const {mutate: addReport, isLoading: isAdding} = useMutation({
    mutationFn: ({courseId, classDate, held, attended}) => addReportApi({courseId, classDate, held, attended}),
    onSuccess: (data, variables) => {
        toast.success("Report Added Successfully")
        // Invalidate all related queries for immediate update
        queryClient.invalidateQueries({ queryKey: ["reports"] })
        queryClient.invalidateQueries({ queryKey: ["courses"] })
        queryClient.invalidateQueries({ queryKey: ["course", variables.courseId] })
        queryClient.invalidateQueries({ queryKey: ["courseAttendance", variables.courseId] })
        // Also invalidate any course query (for the course detail page)
        queryClient.invalidateQueries({ queryKey: ["course"] })
        queryClient.invalidateQueries({ queryKey: ["courseAttendance"] })
    },
    onError: (err) => {
        toast.error(err.message)
    }
})
return {addReport, isAdding}
}