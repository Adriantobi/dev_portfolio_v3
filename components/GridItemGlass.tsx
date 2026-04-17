"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useEffectEvent, useState } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import { useHover } from "@/hooks/use-hover";
import { cn } from "@/lib/utils";

type GridSizeParam = { size: number } | { width: number; height: number };

type SharedGridItemProps = {
  type: "project" | "job" | "social";

  icon?: string;
  header?: string;
  subheader?: string;
  content?: string;

  btnContent?: string;
  btnColor?: string;
  link?: string;
  bgColor?: string;
  bgImage?: string;
  children?: ReactNode;
};

type GridItemProps =
  | ({
      size: number;
      height?: never;
      width?: never;
    } & SharedGridItemProps)
  | ({
      size?: never;
      height: number;
      width: number;
    } & SharedGridItemProps);

export default function GridItemGlass({
  size,
  height,
  width,
  type,
  icon,
  header,
  subheader,
  content,
  btnContent,
  btnColor,
  link,
  children,
}: GridItemProps) {
  const { width: windowWidth } = useWindowSize();
  const [mobile, setMobile] = useState(false);
  const [ref, hovering] = useHover<HTMLDivElement>();

  const updateMobileState = useEffectEvent((state: boolean) =>
    setMobile(state),
  );

  useEffect(() => {
    updateMobileState(windowWidth < 520 ? true : false);
  }, [windowWidth]);

  const getGridItemProperties = (param: GridSizeParam) => {
    const w = "size" in param ? param.size : param.width;
    const h = "size" in param ? param.size : param.height;

    if (w === undefined || h === undefined) return "";

    const size_str = `${w}x${h}`;

    switch (size_str) {
      case "2x2":
        return "col-span-2 row-span-2 min-w-[315px] min-h-[150px]";
      case "2x1":
        return mobile
          ? "col-span-1 row-span-1 min-w-[150px] min-h-[150px]"
          : "col-span-1 row-span-2 min-w-[150px] min-h-[150px]";
      case "1x2":
        return "col-span-2 row-span-1 min-w-[315px] min-h-[75px]";
      case "2x4":
        return "col-span-2 row-span-4 min-w-[315px] min-h-[315px]";
      case "3x4":
        return mobile ? "col-span-2 row-span-4" : "col-span-3 row-span-4";
      case "3x3":
        return mobile ? "col-span-2 row-span-3" : "col-span-3 row-span-3";
      default:
        return `col-span-${w} row-span-${h} min-w-[${w * 75}px] min-h-[${h * 75}px]`;
    }
  };

  const gridClasses = size
    ? getGridItemProperties({ size })
    : height && width
      ? getGridItemProperties({ width, height })
      : "";

  const isProjectOrJob = type === "project" || type === "job";

  const headingWrapper = (
    <div className="flex items-center justify-between">
      {icon && (
        <div className="shrink-0 rounded-xl overflow-hidden shadow-[0_2px_12px_var(--glass-shadow)] border border-[var(--glass-border)]">
          <Image
            src={icon}
            width={48}
            height={48}
            alt={`${header} Image`}
            quality={100}
            unoptimized
          />
        </div>
      )}
      {btnContent && (width !== 2 || height !== 1) && (
        <span
          className="px-3.5 py-1.5 rounded-full text-[13px] font-medium w-fit text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          style={{ backgroundColor: `rgb(${btnColor})` }}
        >
          {btnContent}
        </span>
      )}
    </div>
  );

  const contentWrapper = (
    <div className="flex flex-col gap-1">
      {header && <span className="font-semibold">{header}</span>}
      {subheader && <span className="text-sm opacity-70">{subheader}</span>}
      {content && <span className="text-sm opacity-60">{content}</span>}
      {width === 2 && height === 1 && btnContent && (
        <span
          className="px-3.5 py-1.5 rounded-full text-[13px] font-medium w-fit text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          style={{ backgroundColor: `rgb(${btnColor})` }}
        >
          {btnContent}
        </span>
      )}
    </div>
  );

  const innerContent = link ? (
    <Link href={link} target="_blank" className="flex flex-col gap-2 h-full w-full">
      {headingWrapper}
      {contentWrapper}
      {children}
    </Link>
  ) : (
    <>
      {headingWrapper}
      {contentWrapper}
      {children}
    </>
  );

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 330,
        damping: 35,
        duration: 0.15,
      }}
      ref={ref}
      className={cn(
        gridClasses,
        // Base styles
        "rounded-[20px] p-[18px] flex flex-col min-w-[150px] min-h-[75px] overflow-hidden gap-2 h-full w-full cursor-pointer",
        // Glass effect - default state
        !isProjectOrJob && [
          "bg-[var(--glass-bg)]",
          "backdrop-blur-[20px] backdrop-saturate-[180%]",
          "border border-[var(--glass-border)]",
          "shadow-[0_1px_3px_var(--glass-shadow),0_4px_20px_var(--glass-shadow),inset_0_1px_0_rgba(255,255,255,0.1)]",
        ],
        // Project/Job cards - transparent default, glass on hover
        isProjectOrJob && [
          "bg-transparent border border-transparent",
          "hover:bg-[var(--glass-bg)]",
          "hover:backdrop-blur-[20px] hover:backdrop-saturate-[180%]",
          "hover:border-[var(--glass-border)]",
          "hover:shadow-[0_4px_20px_var(--glass-shadow-hover),0_8px_40px_var(--glass-shadow),inset_0_1px_0_rgba(255,255,255,0.1)]",
        ],
        // Shared hover transitions
        "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:-translate-y-0.5",
        // Hover state for non-project/job
        !isProjectOrJob && [
          "hover:bg-[rgba(var(--grid-item),0.85)]",
          "hover:shadow-[0_4px_12px_var(--glass-shadow-hover),0_8px_32px_var(--glass-shadow-hover),inset_0_1px_0_rgba(255,255,255,0.15)]",
        ],
      )}
    >
      {innerContent}
    </motion.div>
  );
}
