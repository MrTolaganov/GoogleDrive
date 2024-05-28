import FolderModal from "../modals/folder-modal";
import PlanModal from "../modals/plan-modal";

export default function ModalProvider() {
  return (
    <div className="fixed">
      <FolderModal />
      <PlanModal />
    </div>
  );
}
