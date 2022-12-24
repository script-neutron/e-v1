import "../styles/globals.css";
import Footer from "./components/footer";
import Head from "./head";
import Navbar from "./navbar/page";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="background normaltext">
        <Navbar />
        {children}
        <hr className="mt-12" />
        <Footer />
      </body>
    </html>
  );
}
