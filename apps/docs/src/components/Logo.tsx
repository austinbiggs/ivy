import Image from "next/image";
import { useTheme } from "nextra-theme-docs";

const DARK_MODE_LOGO_SRC = "/img/logo/dark/logo.svg";
const LIGHT_MODE_LOGO_SRC = "/img/logo/light/logo.svg";

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === "dark";

  const src = darkMode ? DARK_MODE_LOGO_SRC : LIGHT_MODE_LOGO_SRC;

  return (
    <Image loading="eager" src={src} alt="Ivy UI" width={105} height={40.8} />
  );
};
