import { HiPlus } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import CreateReportForm from "./CreateReportForm";

function AddReport({ courses }) {
  return (
    <Modal>
      <Modal.Open opens="report-form">
        <button 
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          style={{ 
            backgroundColor: '#059669', 
            color: '#ffffff',
            fontWeight: 600
          }}
        >
          <HiPlus className="w-5 h-5" style={{ color: '#ffffff' }} />
          <span style={{ color: '#ffffff' }}>Add Report</span>
        </button>
      </Modal.Open>
      <Modal.Window name="report-form">
        <CreateReportForm courses={courses} />
      </Modal.Window>
    </Modal>
  );
}


export default AddReport;
