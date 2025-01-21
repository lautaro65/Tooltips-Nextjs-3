"use client";

import React from "react";
import CreativeErrorTooltip from "./components/CreativeErrorTooltip/page";
export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gray-900">
      <CreativeErrorTooltip errorMessage="This is a creative and innovative error message with animated elements!" />
    </main>
  );
}
