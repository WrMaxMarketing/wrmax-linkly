// components/TrackLink.tsx
"use client";

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  label: string; // ex: "whatsapp"
  category?: string; // ex: "cpsolar"
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
  category = "cpsolar",
  target = "_blank",
  rel = "noopener noreferrer",
  className,
}: Props) {
  const onClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cpsolar_click",
      category,
      label,
      href,
      page_path: window.location.pathname,
    });
  };

  // Link externo: pode usar <a>, mas Link funciona também
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