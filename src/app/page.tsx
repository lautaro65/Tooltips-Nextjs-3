"use client";

import React from "react";
import CreativeErrorTooltip from "./components/CreativeErrorTooltip/CreativeErrorTooltip";
export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-start justify-start bg-gray-900 pl-2 pt-2">
      <CreativeErrorTooltip errorMessage="This is a creative and innovative error message with animated elements!" />
    </main>
  );
}
