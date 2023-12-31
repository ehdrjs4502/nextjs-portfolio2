import { ReactNode, useEffect, useState } from "react";
import HtmlIcon from "@/svgs/html5-color.svg";
import CssIcon from "@/svgs/css3-color.svg";
import JsIcon from "@/svgs/javascript-color.svg";
import NextjsIcon from "@/svgs/nextdotjs-color.svg";
import ReactjsIcon from "@/svgs/react-color.svg";
import NodejsIcon from "@/svgs/nodedotjs-color.svg";
import NotionIcon from "@/svgs/notion-color.svg";
import FigmaIcon from "@/svgs/figma-color.svg";
import GithubIcon from "@/svgs/github-color.svg";
import TSIcon from "@/svgs/typescript-color.svg";
import { useTheme } from "next-themes";

type Skill = {
  name: string;
  icon: ReactNode;
};

type Etc = {
  name: string;
  icon: ReactNode;
};

export type SkillData = {
  skills: Skill[];
  etcs: Etc[];
};

type DarkModeIconProps = {
  lightIcon: React.ReactNode;
  darkIcon: React.ReactNode;
};

// 테마에 따라서 아이콘 변경
const DarkModeIcon: React.FC<DarkModeIconProps> = ({ lightIcon, darkIcon }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // ssr에서 말고 클라이언트 측에서 렌더링 되고 나서 아이콘을 렌더링하도록 설정
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return theme === "dark" ? darkIcon : lightIcon;
};

export const skillData: SkillData = {
  skills: [
    {
      name: "Javascript",
      icon: <JsIcon />,
    },
    {
      name: "React.js",
      icon: <ReactjsIcon />,
    },
    {
      name: "Next.js",
      icon: <DarkModeIcon lightIcon={<NextjsIcon />} darkIcon={<NextjsIcon fill="#ffffff" />} />,
    },
    {
      name: "HTML 5",
      icon: <HtmlIcon />,
    },
    {
      name: "CSS 3",
      icon: <CssIcon />,
    },
    {
      name: "Node.js",
      icon: <NodejsIcon />,
    },
    {
      name: "TypeScript",
      icon: <TSIcon />,
    },
  ],
  etcs: [
    {
      name: "Github",
      icon: <DarkModeIcon lightIcon={<GithubIcon />} darkIcon={<GithubIcon fill="#ffffff" />} />,
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
    },
    {
      name: "Notion",
      icon: <DarkModeIcon lightIcon={<NotionIcon />} darkIcon={<NotionIcon fill="#ffffff" />} />,
    },
  ],
};
