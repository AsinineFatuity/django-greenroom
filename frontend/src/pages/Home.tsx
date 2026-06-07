import React from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
} from "@mantine/core";
import {
  IconBrandMantine,
  IconBrandReact,
  IconBrandVite,
  IconInfoCircle,
  IconRocket,
  IconServer,
} from "@tabler/icons-react";
import { setFeedbackToast } from "@/redux/reducer/slices/feedbackToast";
import { FeedBackToast } from "@/types/feedbackToast";
import { useAppDispatch } from "../hooks";
import { startLoading, stopLoading } from "@/redux/reducer/slices/loading";

const djangoGreen = {
  dark: "#092E20",
  header: "#0C4B33",
  accent: "#44B78B",
  light: "#C9F0DD",
  cream: "#F7F7F7",
};

const stackBadges: {
  label: string;
  color: string;
  icon: typeof IconServer;
  textColor?: string;
}[] = [
  { label: "Django", color: djangoGreen.header, icon: IconServer },
  { label: "React", color: "#61DAFB", icon: IconBrandReact, textColor: "#0a2540" },
  { label: "Vite", color: "#646CFF", icon: IconBrandVite },
  { label: "Mantine", color: "#339AF0", icon: IconBrandMantine },
];

const toastMessages: FeedBackToast[] = [
  { message: "Welcome to Your Awesome Project", type: "info" },
  { message: "This is a resounding success!", type: "success" },
  { message: "This is how warnings look like", type: "warning" },
  { message: "This is how errors look like", type: "error" },
  { message: "This is how default messages look like", type: "default" },
];

const getRandomToastMessage = (): FeedBackToast =>
  toastMessages[Math.floor(Math.random() * toastMessages.length)];

const Home = () => {
  const dispatch = useAppDispatch();

  const showWelcomeToast = () => {
    const randomMessage = getRandomToastMessage();
    dispatch(
      setFeedbackToast({
        message: randomMessage.message,
        type: randomMessage.type,
      }),
    );
  };

  const load = () => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(stopLoading());
    }, 3000);
  };

  return (
    <Box
      mih="100dvh"
      py={{ base: rem(24), sm: rem(64) }}
      style={{
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(165deg, ${djangoGreen.dark} 0%, ${djangoGreen.header} 48%, ${djangoGreen.cream} 48%, ${djangoGreen.cream} 100%)`,
      }}
    >
      <Container size="sm" px={{ base: "xs", sm: "md" }} w="100%">
        <Stack align="center" gap={rem(24)}>
          <Paper
            radius="xl"
            p={{ base: "md", sm: "xl" }}
            shadow="xl"
            w="100%"
            style={{
              border: `1px solid ${djangoGreen.light}`,
              background: "white",
              overflow: "hidden",
            }}
          >
            <Box
              py={{ base: rem(20), sm: rem(28) }}
              mb="lg"
              style={{
                background: `linear-gradient(135deg, ${djangoGreen.header} 0%, ${djangoGreen.dark} 100%)`,
                borderRadius: rem(16),
                marginInline: rem(-8),
                marginTop: rem(-8),
              }}
            >
              <Stack align="center" gap="sm">
                <ThemeIcon
                  size={60}
                  radius="xl"
                  variant="light"
                  color="teal"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: djangoGreen.accent,
                    border: `2px solid ${djangoGreen.accent}`,
                  }}
                >
                  <IconRocket size={34} stroke={1.5} />
                </ThemeIcon>
                <Title
                  order={1}
                  ta="center"
                  c="white"
                  style={{ letterSpacing: rem(-0.5), lineHeight: 1.15 }}
                >
                  Your Awesome Project
                </Title>
                <Text c={djangoGreen.light} size="sm" ta="center" maw={360} px="xs">
                  Hybrid Django · React · Vite · Mantine — launched and ready for liftoff.
                </Text>
              </Stack>
            </Box>

            <Stack gap="md">
              <Group justify="center" gap="xs" wrap="wrap">
                {stackBadges.map(({ label, color, icon: Icon, textColor }) => (
                  <Badge
                    key={label}
                    leftSection={<Icon size={14} />}
                    size="lg"
                    radius="sm"
                    variant="filled"
                    styles={{
                      root: {
                        backgroundColor: color,
                        color: textColor ?? "white",
                        textTransform: "none",
                        fontWeight: 600,
                        paddingInline: rem(12),
                      },
                    }}
                  >
                    {label}
                  </Badge>
                ))}
              </Group>

              <Divider
                label="Mission control"
                labelPosition="center"
                color={djangoGreen.light}
              />

              <Card
                p={{ base: "md", sm: "lg" }}
                radius="md"
                withBorder
                style={{
                  backgroundColor: djangoGreen.cream,
                  borderColor: djangoGreen.light,
                }}
              >
                <Stack gap="xs">
                  <Text fw={600} c={djangoGreen.dark}>
                    The web framework for perfectionists with deadlines.
                  </Text>
                  <Text size="sm" c="dimmed">
                    This stack pairs Django&apos;s batteries-included backend with a
                    React frontend served through Vite — same rocket, modern cockpit.
                  </Text>
                </Stack>
              </Card>

              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                <Button
                  size="md"
                  variant="light"
                  color="teal"
                  fullWidth
                  leftSection={<IconInfoCircle size={18} />}
                  onClick={showWelcomeToast}
                  styles={{
                    root: {
                      minWidth: 0,
                      minHeight: rem(48),
                      fontWeight: 600,
                      color: djangoGreen.dark,
                      backgroundColor: djangoGreen.light,
                    },
                  }}
                >
                  Test Toast
                </Button>
                <Button
                  size="md"
                  fullWidth
                  leftSection={<IconRocket size={18} />}
                  onClick={load}
                  styles={{
                    root: {
                      minWidth: 0,
                      background: `linear-gradient(135deg, ${djangoGreen.accent} 0%, ${djangoGreen.header} 100%)`,
                      border: "none",
                      minHeight: rem(48),
                      fontWeight: 600,
                      transition: "transform 150ms ease, box-shadow 150ms ease",
                      "&:hover": {
                        background: `linear-gradient(135deg, ${djangoGreen.accent} 0%, ${djangoGreen.dark} 100%)`,
                        transform: "translateY(-1px)",
                        boxShadow: `0 8px 24px ${djangoGreen.header}55`,
                      },
                    },
                  }}
                >
                  Test Loader
                </Button>
              </SimpleGrid>
            </Stack>
          </Paper>

          <Text size="xs" c="dimmed" ta="center">
            django · react · vite · mantine
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
