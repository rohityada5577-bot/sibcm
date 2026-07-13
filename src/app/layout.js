import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
//  import SiboAssistant from "@/components/common/SiboAssistant";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        {/* <SiboAssistant /> */}
      </body>
    </html>
  );
}