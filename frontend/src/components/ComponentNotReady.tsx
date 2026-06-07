import React from "react";
import { Loader, Center } from "@mantine/core";

export default function ComponentNotReady() {
  return (
    <Center
      style={{ height: "calc(100dvh - var(--app-shell-header-height, 56px))" }}
    >
      <Loader size={40} color="#D4AF37" variant="dots" />
    </Center>
  );
}
