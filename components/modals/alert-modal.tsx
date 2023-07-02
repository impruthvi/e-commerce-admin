"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfiem: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  loading,
  onClose,
  onConfiem,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="Are You sure?"
        description="This action cannot be undone"
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="pt-6 space-x-2 items-center justify-end w-full">
          <Button disabled={loading} variant="outline" onClick={onClose}>
            Cancle
          </Button>
          <Button disabled={loading} variant="destructive" onClick={onConfiem}>
            Continue
          </Button>
        </div>
      </Modal>
    </>
  );
};
