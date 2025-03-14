// app/routes/test.tsx
import React, { lazy, Suspense } from "react";
import type { Route } from "./+types/test"; // Import types for the route

// Mark the route as client-only:
export const ssr = false;

// Lazy load the TestPage component to reduce initial bundle size
const DashboardPage = lazy(
  () => import("../features/dashboard/pages/DashboardPage")
);

/**
 * Defines the Test route with lazy loading and a Suspense fallback.
 */
export default function DashboardRoute() {
  return (
    <Suspense fallback={<div className="p-4">Loading Form Feature...</div>}>
      <DashboardPage />
    </Suspense>
  );
}
