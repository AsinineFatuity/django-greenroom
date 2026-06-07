import feedbackListener from "@/redux/middleware/listeners/feedbackToast";

export const listenerMiddleware = [feedbackListener.middleware];