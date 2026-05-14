"use client";

import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const mapsLinkProps = {
  href: SITE.mapsShortUrl,
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};

export type ViewOnMapsTone = "light" | "hero" | "footer";

interface ViewOnMapsButtonProps {
  tone?: ViewOnMapsTone;
  size?: "default" | "lg";
  className?: string;
  /** Short label for tight layouts (e.g. navbar). */
  compact?: boolean;
}

export function ViewOnMapsButton({
  tone = "light",
  size = "lg",
  className,
  compact = false,
}: ViewOnMapsButtonProps) {
  const label = compact ? "Maps" : "View on Maps";

  if (tone === "hero") {
    return (
      <Button
        asChild
        size={size}
        variant="outline"
        className={cn(
          "rounded-2xl border-2 border-white/90 bg-white/5 text-white shadow-sm backdrop-blur-[2px] transition-all hover:border-white hover:bg-white/12 hover:shadow-md active:translate-y-px",
          className
        )}
      >
        <a
          {...mapsLinkProps}
          aria-label="View on Maps in Google Maps"
          title="View on Maps"
          className="inline-flex min-h-[48px] items-center justify-center gap-2"
        >
          <MapPin className="size-4 shrink-0" aria-hidden />
          {label}
        </a>
      </Button>
    );
  }

  if (tone === "footer") {
    return (
      <Button
        asChild
        size={size}
        variant="secondary"
        className={cn(
          "rounded-xl border border-white/25 bg-white/5 text-white shadow-none backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/12 hover:shadow-md active:translate-y-px",
          className
        )}
      >
        <a
          {...mapsLinkProps}
          aria-label="View on Maps in Google Maps"
          title="View on Maps"
          className="inline-flex min-h-[44px] items-center justify-center gap-2"
        >
          <MapPin className="size-4 shrink-0 text-[#D97706]" aria-hidden />
          {label}
        </a>
      </Button>
    );
  }

  return (
    <Button
      asChild
      size={size}
      variant="secondary"
      className={cn(
        "rounded-2xl border-[#E2E4E6] transition-all hover:border-[#D97706]/35 hover:shadow-md active:translate-y-px",
        size === "default" && "rounded-xl",
        className
      )}
    >
      <a
        {...mapsLinkProps}
        aria-label="View on Maps in Google Maps"
        title="View on Maps"
        className={cn(
          "inline-flex items-center justify-center gap-2",
          size === "lg" ? "min-h-[48px]" : "min-h-[44px]"
        )}
      >
        <MapPin className="size-4 shrink-0 text-[#D97706]" aria-hidden />
        {label}
      </a>
    </Button>
  );
}
