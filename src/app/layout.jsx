import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>

    </html>
  );
}
