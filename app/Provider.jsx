"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-[#0F172A] dark:text-white text-gray-700 transition-colors duration-200 min-h-screen select-none">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;