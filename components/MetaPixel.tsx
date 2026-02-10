"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: (...args: any[]) => void;
  }
}

type MetaPixelProps = {
  pixelId: string;
};

export default function MetaPixel({ pixelId }: MetaPixelProps) {
  useEffect(() => {
    if (!pixelId) return;

    // Evita duplicar pixel
    if (window.fbq) {
      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
      return;
    }

    // Cria o script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";

    script.onload = () => {
      if (!window.fbq) return;

      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
    };

    document.head.appendChild(script);

    // Stub do fbq (fila)
    window.fbq = function () {
      (window.fbq as any).queue.push(arguments);
    };
    (window.fbq as any).queue = [];
    (window.fbq as any).loaded = true;
    (window.fbq as any).version = "2.0";

  }, [pixelId]);

  return null;
}
