import React from "react";
import { setFeedbackToast } from "@/redux/reducer/slices/feedbackToast";
import { useAppDispatch } from "../hooks";
import { startLoading, stopLoading } from "@/redux/reducer/slices/loading";

const Home = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(
      setFeedbackToast({
        message: "Welcome to my hybrid Django-React project",
        type: "info",
      }),
    );
  }, [dispatch]);
  const load = () => {
    dispatch(startLoading());
    setTimeout(() => {
        dispatch(stopLoading());
    }, 3000);

  };
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 font-semibold font-stretch-expanded">My Tailwind Hybrid Django-React-Vite Project</h1>
      <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full border-2 border-blue-300 " onClick={load}>
        Test Loader
      </button>
    </div>
  );
};

export default Home;
