import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type SiteImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
};

/**
 * Project-standard next/image wrapper.
 * Use for all content images (local /public or configured remote hosts).
 */
export function SiteImage({
  className,
  alt,
  sizes,
  ...props
}: SiteImageProps) {
  return (
    <Image
      alt={alt}
      sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      className={cn(className)}
      {...props}
    />
  );
}
