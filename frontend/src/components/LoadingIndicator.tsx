import React from "react";
import { LoadingOverlay, Box } from "@mantine/core";

import { useAppSelector } from "../hooks";

export const LoadingIndicator = () => {
  const isLoading = useAppSelector((state) => state.loader.isLoading);

  if (!isLoading) return null;

  return (
    <Box
      pos="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      style={{ zIndex: 9999, pointerEvents: "none" }}
    >
      <LoadingOverlay
        visible={Boolean(true)}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "#D4AF37", type: "bars" }}
      />
    </Box>
  );
};
