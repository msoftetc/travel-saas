"use client";

import React from "react";
import { Breadcrumb } from "flowbite-react";

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbItems: { label: string; href?: string }[];
}

const Layout: React.FC<LayoutProps> = ({ children, breadcrumbItems }) => {
  return (
    <div className="h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Breadcrumb */}
      <nav className="p-4 bg-[var(--color-primary)]">
        <Breadcrumb aria-label="Breadcrumb navigation" className="text-lg">
          {breadcrumbItems.map((item, index) => (
            <Breadcrumb.Item
              key={index}
              href={item.href}
              className="text-[var(--color-text)]"
            >
              {item.label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default Layout;
