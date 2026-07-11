// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./globals.css";

// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/layout/Navbar";
 import Footer from "@/components/layout/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
 import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}