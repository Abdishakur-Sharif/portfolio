/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#ffffff", // White outline for visibility
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon, theme, imageArray) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = "#ffffff"; // Always use white for high visibility
  const minContrastRatio = 3; // Ensuring strong contrast

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export function IconCloud({ iconSlugs = [], imageArray }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map(
      (icon) => renderCustomIcon(icon, theme || "dark") // Default to dark theme
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
      {imageArray &&
        imageArray.length > 0 &&
        imageArray.map((image, index) => (
          <a key={index} href="#" onClick={(e) => e.preventDefault()}>
            <img height="42" width="42" alt="A globe" src={image} />
          </a>
        ))}
    </Cloud>
  );
}
