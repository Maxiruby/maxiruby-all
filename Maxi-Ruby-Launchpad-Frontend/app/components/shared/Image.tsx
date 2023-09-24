import React, { useEffect } from "react";

// utils
import { cn } from "~/utils/cn";

interface ImageProps {
  src: string;
  alt: string;
  loading?: "eager" | "lazy";
  objectFit?: "cover" | "contain" | "fill";
  width?: number | string;
  height?: number | string;
  onLoad?: () => void;
}

/**
 * @param {string} src - source of image
 * @param {string} alt - alternate text
 * @param {string} loading - load method [default: lazy]
 * @param {string} objectFit - render behaviour of image
 * @param {number | string} width - width of image
 * @param {number | string} height - height of image
 * @param {function} onLoad - callback function on image load
 * @returns {node} <img /> element
 */
const Image = React.memo(function Image({
  src,
  alt,
  loading = "lazy",
  objectFit,
  width,
  height,
  onLoad
}: ImageProps) {
  const id = React.useId();
  const image = React.useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = React.useState(true);

  const handleImageLoaded = () => {
    setImageLoaded(true);

    if (typeof onLoad === "function") {
      onLoad();
    }
  };

  // loaded control on mount because if image is already in cache
  // onLoad function not trigger again
  useEffect(() => {
    if (!image.current) return;

    if (image.current.complete) {
      handleImageLoaded();
    }
  }, [image.current]);

  const props = {
    src,
    alt,
    loading,
    ...(width && { width }),
    ...(height && { height })
  };

  // fix: onLoad not working

  return (
    <img
      ref={image}
      key={id}
      id={id}
      className={cn("opacity-0 transition-opacity duration-75", {
        "!opacity-100": imageLoaded,
        "max-w-full": !width,
        "object-cover": objectFit === "cover",
        "object-contain": objectFit === "contain",
        "object-fill": objectFit === "fill"
      })}
      style={width && height ? { width, height } : {}}
      onLoad={handleImageLoaded}
      {...props}
    />
  );
});

export default Image;

interface ImageContainerProps {
  children: React.ReactNode;
  className?: string;
}
/**
 * container for image component.
 * can be used for image loading placeholders.
 * usage: wrap your Image component by ImageContainer.
 * @param {string} className css classnames
 * @param {node} children <Image /> element
 * @returns <span /> element
 */
export function ImageContainer({ className, children }: ImageContainerProps) {
  return (
    <span className={cn("flex flex-1 bg-gray-100 dark:bg-gray-800 animate-pulse", className)}>
      {children}
    </span>
  );
}
