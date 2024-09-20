// system
import React, { useEffect } from "react";

// styles
import {
  NotificationContainer,
  NotificationMessage,
} from "./Notification.styles";

interface Props {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

function Notification(props: Props) {
  useEffect(() => {
    const timer = setTimeout(props.onClose, 3000);
    return () => clearTimeout(timer);
  }, [props.onClose]);

  return (
    <NotificationContainer type={props.type}>
      <NotificationMessage>{props.message}</NotificationMessage>
    </NotificationContainer>
  );
}

export default Notification;
