// Your projects. Change the text any time.
// To show a real screenshot: put the file in public/images/ and set  image: "/images/floodwatch.png"
// (while image is null, a drawn preview is shown instead;
//  art = "map" | "docs" | "dash" | "kanban" | "chat" | "shop")
//
// Projects 1-3 are shown first. When you scroll, 4 replaces 1, 5 replaces 2, 6 replaces 3.
export const projects = [
  {
    id: 1,
    number: "01",
    title: "FloodWatch",
    subtitle: "AI-powered flood prediction app",
    description:
      "Predicts flood risk from rainfall and terrain data and shows live risk zones on an interactive map.",
    tags: ["React", "Python", "Maps"],
    image: null,
    art: "map",
    link: "#",
  },
  {
    id: 2,
    number: "02",
    title: "CaseFlow",
    subtitle: "Legal AI application",
    description:
      "Helps organise case files, summarise documents and track every case from one clean dashboard.",
    tags: ["React", "Node.js", "AI"],
    image: null,
    art: "docs",
    link: "#",
  },
  {
    id: 3,
    number: "03",
    title: "Startup Intelligence Dashboard",
    subtitle: "Analytics for founders",
    description:
      "Turns startup data into clear charts and insights so founders can track growth and decide faster.",
    tags: ["React", "Charts", "API"],
    image: null,
    art: "dash",
    link: "#",
  },
  // ---- placeholders: replace the name, text and tags with your real projects ----
  {
    id: 4,
    number: "04",
    title: "TaskPilot",
    subtitle: "Smart task manager",
    description:
      "Plan, prioritise and track daily work with reminders and a clean drag-and-drop board.",
    tags: ["React", "Node.js", "MongoDB"],
    image: null,
    art: "kanban",
    link: "#",
  },
  {
    id: 5,
    number: "05",
    title: "ChatBridge",
    subtitle: "Real-time chat app",
    description:
      "Instant messaging with rooms, typing indicators and a searchable message history.",
    tags: ["React", "Socket.io", "Node.js"],
    image: null,
    art: "chat",
    link: "#",
  },
  {
    id: 6,
    number: "06",
    title: "ShopSphere",
    subtitle: "E-commerce platform",
    description:
      "A complete online store with product search, a cart and a simple checkout flow.",
    tags: ["React", "Express", "Payments"],
    image: null,
    art: "shop",
    link: "#",
  },
];