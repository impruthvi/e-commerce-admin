"use client";

import { useStoreModal } from "@/hooks/user-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  return <div className="p-4">Root Page</div>;
};

export default SetupPage;
