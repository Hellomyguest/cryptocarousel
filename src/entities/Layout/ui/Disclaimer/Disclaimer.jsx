import { useState } from "react";
import { Notification } from "../../../../shared/ui";

export const Disclaimer = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <Notification
      isOpen={isOpen}
      setOpen={setOpen}
      message="Проект не поддерживается, криптовалютный функционал вырезан"
    />
  );
};
