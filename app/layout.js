import { Inter } from "next/font/google";
import PrimaryNavbar from "@/app/components/PrimaryNavbar";
import Footer from "@/app/components/Footer";
import "./style/style.css";
import "./globals.css";
import { Grid } from "@mui/material";
import SecondaryNavbar from "./components/SecondaryNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grid container>
          <Grid item xs={12} md={3}>
            {/* navigation bar   */}
            <div>
              <PrimaryNavbar />
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            {/* secondary nav */}
            <SecondaryNavbar />

            {/* childrens */}
            {children}

            {/* footer component */}
            <div>
              <Footer />
            </div>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
