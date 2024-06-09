"use client";
import styles from "../css/components/projectbento.module.css";

import Image from "next/image";
import GridItem from "./GridItem";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ProjectBentoProps = {
  title: string;
  description: string;
  images: string[];
  link: string;
  unoptimized?: boolean;
};

export default function ProjectBento({
  title,
  description,
  images,
  link,
  unoptimized,
}: ProjectBentoProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const imagesScrollRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (imagesScrollRef.current) {
        setScrollPosition(imagesScrollRef.current.scrollLeft);
      }
    };

    const scrollContainer = imagesScrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [scrollPosition]);

  const isScrollAtStart = scrollPosition === 0;
  const isScrollAtEnd =
    imagesScrollRef.current &&
    scrollPosition + imagesScrollRef.current.clientWidth >=
      imagesScrollRef.current.scrollWidth;

  return (
    <GridItem size="3x4" type={"project"}>
      <div className={styles.content}>
        <Link href={link} target="_blank">
          <div className={styles.textWrapper}>
            <div className={styles.titleLink}>
              <div className={styles.innerWrapper}>
                <span>
                  {title} <ArrowRight width={18} height={18} />
                </span>
                <span>
                  {title} <ArrowRight width={18} height={18} />
                </span>
              </div>
            </div>
            <span className={styles.description}>{description}</span>
          </div>
          <div
            className={`${styles.imageWrapper} ${images.length > 1 ? `${styles.imageBento}` : ""}`}
          >
            {images.length > 0 && images.length <= 1 ? (
              <Image
                key={images[0]}
                src={images[0]}
                width={0}
                height={0}
                sizes="100vw"
                alt={`${title} image`}
                style={{ width: "100%", height: "auto" }}
                unoptimized={unoptimized ? unoptimized : false}
              />
            ) : (
              <>
                <Image
                  key={images[currentImage]}
                  src={images[currentImage]}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={`${title} image`}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                  unoptimized={unoptimized ? unoptimized : false}
                />
                <div
                  ref={imagesScrollRef}
                  className={styles.miniImageWrapper}
                  style={{
                    borderTopLeftRadius: !isScrollAtStart ? "6px" : "0",
                    borderBottomLeftRadius: !isScrollAtStart ? "6px" : "0",
                    borderTopRightRadius: !isScrollAtEnd ? "6px" : "0",
                    borderBottomRightRadius: !isScrollAtEnd ? "6px" : "0",
                  }}
                >
                  <div
                    ref={scrollableRef}
                    className={styles.miniImagesContainer}
                  >
                    {images.map((image, index) => (
                      <div
                        key={image}
                        className={`${styles.imageSlide} ${currentImage === index ? `${styles.currentImage}` : ""}`}
                      >
                        <Image
                          src={image}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt={`${title} image ${index + 1}`}
                          style={{ width: "100%", height: "auto" }}
                          unoptimized={unoptimized ? unoptimized : false}
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setCurrentImage(index);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </Link>
      </div>
    </GridItem>
  );
}
