import React, { useEffect } from "react";
import {
  IconX,
  IconCheck,
  IconInfoCircle,
  IconAlertTriangle,
} from "@tabler/icons-react";
import { useAppSelector } from "../hooks";
import { showNotification } from "@mantine/notifications";

const messageTypeColors = {
  success: "teal",
  error: "red",
  warning: "yellow",
  info: "blue",
  default: "gray",
};

const messageTypeIcon = {
  success: IconCheck,
  error: IconX,
  warning: IconAlertTriangle,
  info: IconInfoCircle,
  default: IconInfoCircle,
};

const messageTypeTitle = {
  success: "Success",
  error: "Error",
  warning: "Warning",
  info: "Info",
  default: "Info",
};
const messageTypeTimeOut = {
  success: 3000,
  info: 3000,
  default: 3000,
  warning: 5000,
  error: 5000,
};

export const FeedbackToast = () => {
  const feedbackToast = useAppSelector((state) => state.feedbackToast.feedbackToast);

  useEffect(() => {
    if (feedbackToast.message) {
      showNotification({
        title: messageTypeTitle[feedbackToast.type],
        message: feedbackToast.message,
        color: messageTypeColors[feedbackToast.type],
        icon: React.createElement(messageTypeIcon[feedbackToast.type]),
        autoClose: messageTypeTimeOut[feedbackToast.type],
        withCloseButton: true,
        withBorder: true,
        style: {
          borderRadius: "24px",
          padding: "16px",
          fontSize: "16px",
          fontWeight: "500",
          color: "black",
        },
      });
    }
  }, [feedbackToast]);

  return null;
};
