"use client";

import dynamic from "next/dynamic";

const TubesBackground = dynamic(() => import("@/components/ui/TubesBackground"), {
  ssr: false,
});

export default function DeferredTubesBackground() {
  return <TubesBackground />;
}
