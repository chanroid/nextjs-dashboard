import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  authors: { url: "mailto:chanroid@gmail.com", name: "chanroid" },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next Dashboard</title>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
