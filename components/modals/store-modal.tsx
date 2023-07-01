"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/user-store-modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories."
      onClose={storeModal.onClose}
      isOpen={storeModal.isOpen}
    >
      Future Create Store Form
    </Modal>
  );
};
