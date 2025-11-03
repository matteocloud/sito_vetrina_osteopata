import { getAssetUrl } from "../utils/assets";

type LogoCBProps = {
  className?: string;
  title?: string;
  variant?: "solid" | "outline";
};

const LogoCB = (props: LogoCBProps) => {
  const { className = "", title = "Osteopata Chiara Benini" } = props;
  const logoSrc = getAssetUrl("logo.png");

  return (
    <img
      src={logoSrc}
      alt={title}
      className={className}
      loading="lazy"
    />
  );
};

export default LogoCB;
