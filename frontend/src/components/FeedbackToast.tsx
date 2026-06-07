
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "../hooks";

export const FeedbackToast = () => {
  const feedbackToast = useAppSelector((state) => state.feedbackToast);
  useEffect(() => {
    if (feedbackToast.message) {
      toast(feedbackToast.message, {
        type: feedbackToast.type,
        autoClose: 4000,
        hideProgressBar: true,
        theme: "colored",
        position: "bottom-right",
      });
    }
  }, [feedbackToast]);

  return null;
};
