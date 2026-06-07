import React from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  ThemeIcon,
  useMantineTheme,
  Group,
} from "@mantine/core";
import { IconAlertTriangle, IconReload, IconHome } from "@tabler/icons-react";
import { APP_URLS } from "@/helpers";
interface FallbackUIProps {
  resetErrorBoundary?: () => void;
}

const FallBackErrorUI: React.FC<FallbackUIProps> = ({ resetErrorBoundary }) => {
  const theme = useMantineTheme();
  const dangerColor = theme.colors.red[6];

  const handleReset = () => {
    if (resetErrorBoundary) {
      // Use the provided reset function if available
      resetErrorBoundary();
    } else {
      // Default action: navigate to the homepage
      window.location.href = APP_URLS.home;
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Container
      size="md"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Stack align="center" gap="xl">
        {/* Error Icon */}
        <ThemeIcon color="red" size={80} radius="xl" variant="light">
          <IconAlertTriangle size={50} stroke={1.5} color={dangerColor} />
        </ThemeIcon>

        {/* Title */}
        <Title order={2} style={{ color: dangerColor }}>
          Something Went Terribly Wrong
        </Title>

        {/* Description */}
        <Text size="lg" c="dimmed" style={{ maxWidth: 450 }}>
          We're sorry! An unexpected and unrecoverable error occurred while
          rendering this part of the application.
        </Text>

        {/* Actions */}
        <Group mt="lg" gap="md">
          <Button
            size="md"
            variant="outline"
            color="gray"
            style={{ color: "black" }}
            leftSection={<IconReload size={18} />}
            onClick={handleReload}
          >
            Try Refreshing
          </Button>

          <Button
            size="md"
            variant="filled"
            leftSection={<IconHome size={18} />}
            onClick={handleReset}
          >
            Go to Dashboard
          </Button>
        </Group>
      </Stack>
    </Container>
  );
};

export default FallBackErrorUI;
