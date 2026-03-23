import MainLayout from "@/components/ui/main-layout";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JOJO BANKS",
  description: "JOJO BANKS",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Provider>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
