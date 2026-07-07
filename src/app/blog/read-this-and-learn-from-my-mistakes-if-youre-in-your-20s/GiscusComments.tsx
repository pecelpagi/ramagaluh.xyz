"use client";

import { useEffect, useRef } from "react";

const GISCUS_ORIGIN = "https://giscus.app";
const LIGHT_THEME = "light";
const DARK_THEME = "dark_dimmed";

function getGiscusTheme() {
  return document.documentElement.classList.contains("dark")
    ? DARK_THEME
    : LIGHT_THEME;
}

function updateGiscusTheme(theme: string) {
  const iframe = document.querySelector<HTMLIFrameElement>(
    "iframe.giscus-frame",
  );

  iframe?.contentWindow?.postMessage(
    {
      giscus: {
        setConfig: {
          theme,
        },
      },
    },
    GISCUS_ORIGIN,
  );
}

export default function GiscusComments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "pecelpagi/ramagaluh.xyz");
    script.setAttribute("data-repo-id", "R_kgDOTQNqLw");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOTQNqL84DAr9d");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "1");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", getGiscusTheme());
    script.setAttribute("data-lang", "en");

    container.appendChild(script);

    const observer = new MutationObserver(() => {
      updateGiscusTheme(getGiscusTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="giscus" />;
}
