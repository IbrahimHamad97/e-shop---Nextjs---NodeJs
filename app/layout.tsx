import Header from "@/components/Header/Header";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Suspense } from "react";

export const metadata = {
  title: "Top Delivery",
  description: "Get anything you want from here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="max-w-6xl m-auto">
              <Header />
              {/* <Separator /> */}
              {children}
            </div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
