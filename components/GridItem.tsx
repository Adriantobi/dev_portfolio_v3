"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../css/components/griditem.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

type GridItemProps = {
  size: "2x2" | "2x1" | "1x2" | "2x4" | "3x4" | "3x3";
  type: string;
  icon?: string;
  header?: string;
  subheader?: string;
  content?: string;
  buttonContent?: string;
  buttonColour?: string;
  link?: string;
  colourBg?: string;
  bgImage?: string;
  children?: React.ReactNode;
};

export default function GridItem({
  size,
  type,
  icon,
  header,
  subheader,
  content,
  buttonContent,
  buttonColour,
  link,
  colourBg,
  bgImage,
  children,
}: GridItemProps) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const getScreenSize = () => {
      return window.innerWidth;
    };

    const mobileSize = () => {
      if (getScreenSize() < 520) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    mobileSize();
    window.addEventListener("resize", mobileSize);
  }, []);

  const getGridItemProperties = (size: string) => {
    if (size === "2x2") {
      return {
        gridArea: "span 2/span 2/span 2/span 2",
        minWidth: "315px",
        minHeight: "150px",
      };
    }
    if (size === "2x1") {
      if (mobile) {
        return {
          gridArea: "span 1/span 1/span 1/span 1",
          minWidth: "150px",
          minHeight: "150px",
        };
      }
      return {
        gridArea: "span 2/span 1/span 2/span 1",
        minWidth: "150px",
        minHeight: "150px",
      };
    }
    if (size === "1x2") {
      return {
        gridArea: "span 1/span 2/span 1/span 2",
        minWidth: "315px",
        minHeight: "75px",
      };
    }
    if (size === "2x4") {
      return {
        gridArea: "span 4/span 2/span 4/span 2",
        minWidth: "315px",
        minHeight: "315px",
      };
    }
    if (size === "3x4") {
      if (mobile) {
        return {
          gridArea: "span 4/span 2/span 4/span 2",
          minWidth: "auto",
          minHeight: "auto",
        };
      }

      return {
        gridArea: "span 4/span 3/span 4/span 3",
        minWidth: "auto",
        minHeight: "auto",
      };
    }
    if (size === "3x3") {
      if (mobile) {
        return {
          gridArea: "span 3/span 2/span 3/span 2",
          minWidth: "auto",
          minHeight: "auto",
        };
      }

      return {
        gridArea: "span 3/span 3/span 3/span 3",
        minWidth: "auto",
        minHeight: "auto",
      };
    }
  };

  const gridItem = getGridItemProperties(size);
  const [hovering, setHovering] = useState(false);

  if (link) {
    return (
      // @ts-ignore
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 330,
          damping: 35,
          duration: 0.15,
        }}
        className={`${styles.GridItem} ${type === "project" ? `${styles.projectCard}` : type === "job" ? `${styles.jobCard}` : type === "social" && !bgImage ? `${styles.socialCard}` : ""} ${bgImage ? `${styles.bgImageWrapper}` : ""}`}
        style={{
          gridArea: gridItem?.gridArea,
          minWidth: gridItem?.minWidth,
          minHeight: gridItem?.minHeight,
          backgroundColor: colourBg
            ? `rgba(${colourBg}, ${hovering ? 0.5 : 0.25})`
            : `rgba(var(--grid-item), ${hovering ? 0.5 : 0.25})`,
          border: colourBg
            ? `1px solid rgba(${colourBg}, 0.95)`
            : `1px solid rgba(var(--grid-item), 0.95)`,
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Link href={link} target="_blank">
          {icon || (buttonContent && size !== "2x1") ? (
            <div className={styles.headingWrapper}>
              <div className={styles.iconWrapper}>
                {icon ? (
                  <Image
                    src={icon}
                    width={48}
                    height={48}
                    alt={`${header} Image`}
                    quality={100}
                    unoptimized
                  />
                ) : null}
              </div>
              {size !== "2x1" ? (
                <span
                  className={styles.buttonInfo}
                  style={{
                    backgroundColor: `rgb(${buttonColour})`,
                    color:
                      buttonColour === "0, 0, 0"
                        ? "rgb(255, 255, 255)"
                        : buttonColour === "255, 255, 255"
                          ? "rgb(0, 0, 0)"
                          : "",
                  }}
                >
                  {buttonContent}
                </span>
              ) : null}
            </div>
          ) : null}
          {header ||
          subheader ||
          content ||
          (buttonContent && size === "2x1") ? (
            <div className={styles.contentWrapper}>
              <span>{header}</span>
              <span className={styles.text}>{subheader}</span>
              <span className={styles.text}>{content}</span>
              {size === "2x1" ? (
                <span
                  className={styles.buttonInfo}
                  style={{
                    backgroundColor: `rgb(${buttonColour})`,
                    color:
                      buttonColour === "0, 0, 0"
                        ? "rgb(255, 255, 255)"
                        : buttonColour === "255, 255, 255"
                          ? "rgb(0, 0, 0)"
                          : "",
                  }}
                >
                  {buttonContent}
                </span>
              ) : null}
            </div>
          ) : null}
          {bgImage && size === "2x4" ? (
            <div
              className={styles.bgImage}
              style={{ background: bgImage ? `url(${bgImage})` : "" }}
            ></div>
          ) : null}
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <div
      className={`${styles.GridItem} ${type === "project" ? `${styles.projectCard}` : type === "job" ? `${styles.jobCard}` : type === "social" ? `${styles.socialCard}` : ""}`}
      style={{
        gridArea: gridItem?.gridArea,
        minWidth: gridItem?.minWidth,
        minHeight: gridItem?.minHeight,
      }}
    >
      {icon || (buttonContent && size !== "2x1") ? (
        <div className={styles.headingWrapper}>
          <div className={styles.iconWrapper}>
            {icon ? (
              <Image
                src={icon}
                width={48}
                height={48}
                alt={`${header} Image`}
                quality={100}
                unoptimized
              />
            ) : null}
          </div>
          {size !== "2x1" ? (
            <span
              className={styles.buttonInfo}
              style={{
                backgroundColor: `rgb(${buttonColour})`,
                color:
                  buttonColour === "0, 0, 0"
                    ? "rgb(255, 255, 255)"
                    : buttonColour === "255, 255, 255"
                      ? "rgb(0, 0, 0)"
                      : "",
              }}
            >
              {buttonContent}
            </span>
          ) : null}
        </div>
      ) : null}
      {header || subheader || content || (buttonContent && size === "2x1") ? (
        <div className={styles.contentWrapper}>
          <span>{header}</span>
          <span className={styles.text}>{subheader}</span>
          <span className={styles.text}>{content}</span>
          {size === "2x1" ? (
            <span
              className={styles.buttonInfo}
              style={{
                backgroundColor: `rgb(${buttonColour})`,
                color:
                  buttonColour === "0, 0, 0"
                    ? "rgb(255, 255, 255)"
                    : buttonColour === "255, 255, 255"
                      ? "rgb(0, 0, 0)"
                      : "",
              }}
            >
              {buttonContent}
            </span>
          ) : null}
        </div>
      ) : null}
      {children}
    </div>
  );
}
