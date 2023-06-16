import Navbar from "@/components/Navbar";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SkyAds - Portfolio website",
  description:
    "Portfolio website made for showcase purposes. SkyAds is a SMMA agency which skyrockets your sales through tiktok ads ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="max-w-[90%] mx-auto text-white md:max-w-[85%] lg:max-w-[80%]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
