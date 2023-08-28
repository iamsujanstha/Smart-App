import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings } from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-sky-500",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-orange-700",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];
