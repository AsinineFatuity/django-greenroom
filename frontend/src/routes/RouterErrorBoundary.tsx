import React from "react";
import { useRouteError } from "react-router-dom";

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
}

const RouteErrorBoundary: React.FC<ErrorBoundaryProps> = ({ fallback }) => {
  const routeError = useRouteError();

  if (routeError) {
    console.error("Route error boundary caught:", routeError);
  }

  return <>{fallback}</>;
};

export default RouteErrorBoundary;
