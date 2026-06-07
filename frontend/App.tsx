
import React from "react";
import { MantineProvider } from "@mantine/core";
import { MantineEmotionProvider } from "@mantine/emotion";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import router from "./src/routes/Router";
import {
  FeedbackToast,
  LoadingIndicator,
  AppMantineTheme,
} from "./src/components";

function App() {
  return (
    <MantineProvider theme={AppMantineTheme}>
      <MantineEmotionProvider>
        <Notifications position="bottom-right" zIndex={9999} />
            <RouterProvider router={router} />
      </MantineEmotionProvider>
      <LoadingIndicator />
      <FeedbackToast />
    </MantineProvider>
  );
}
export default App;

