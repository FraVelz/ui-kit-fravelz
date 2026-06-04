import type { CSSProperties, ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { GradientText } from "../../kit";
import siteMeta from "../../site-meta.json";

type SiteBrandLogoProps = {
  to: string;
  end?: boolean;
  className?: string;
  titleClassName?: string;
  logoClassName?: string;
  navLink?: boolean;
  id?: string;
  style?: CSSProperties;
  tabIndex?: number;
  "aria-hidden"?: boolean;
};

function BrandContent({
  titleClassName,
  logoClassName,
}: Pick<SiteBrandLogoProps, "titleClassName" | "logoClassName">) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5 sm:gap-3">
      <img
        src={siteMeta.logoPath}
        alt=""
        width={40}
        height={40}
        draggable={false}
        className={logoClassName ?? "size-9 shrink-0 rounded-lg object-contain sm:size-10"}
      />
      <span className={titleClassName ?? "truncate text-lg font-bold sm:text-xl"}>
        <GradientText variant="cyan-purple">{siteMeta.name}</GradientText>
      </span>
    </span>
  );
}

function wrapLink(children: ReactNode, props: SiteBrandLogoProps): ReactNode {
  const className =
    props.className ??
    "inline-flex rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80";

  if (props.navLink) {
    return (
      <NavLink
        id={props.id}
        to={props.to}
        end={props.end}
        className={className}
        style={props.style}
        tabIndex={props.tabIndex}
        aria-hidden={props["aria-hidden"]}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <Link to={props.to} className={className}>
      {children}
    </Link>
  );
}

export default function SiteBrandLogo(props: SiteBrandLogoProps) {
  return wrapLink(
    <BrandContent titleClassName={props.titleClassName} logoClassName={props.logoClassName} />,
    props
  );
}
