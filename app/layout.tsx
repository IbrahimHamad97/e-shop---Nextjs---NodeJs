import Header from "@/components/Header/Header";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/ThemeProvider";

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
          <div className="max-w-6xl m-auto">
            <Header />
            {/* <Separator /> */}
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
