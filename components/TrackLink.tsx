"use client";

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  label: string; // ex: "whatsapp", "site", "instagram"
  target?: string;
  rel?: string;
  className?: string;
};

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export default function TrackLink({
  href,
  children,
  label,
  target = "_blank",
  rel = "noopener noreferrer",
  className,
}: Props) {
  const onClick = () => {
    const path = window.location.pathname;
    const empresa = path.split("/")[1] || "desconhecida";

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "link_click",
      empresa,               // wrmax | vipx | tmax
      link_label: label,     // whatsapp | site | maps
      link_url: href,
      page_path: path,
    });
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
