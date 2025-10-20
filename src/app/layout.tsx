import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Aina Nirina RANDRIA | Mobile Developer",
  description: "Clean, professional portfolio built with Next.js & Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
