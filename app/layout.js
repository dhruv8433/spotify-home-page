import { Inter } from "next/font/google";
import PrimaryNavbar from "@/app/components/PrimaryNavbar";
import Footer from "@/app/components/Footer";
import "./style/style.css";
import "./globals.css";
import { Grid } from "@mui/material";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Box from "@mui/material/Box";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify - Web Player: Music for everyone"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grid container>
          <Grid item xs={12} md={3}>
            {/* navigation bar */}
            <Box display={{ xs: "none", md: "block" }}>
              <PrimaryNavbar />
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="secondary-nav mx-2 rounded-md">
              {/* secondary nav */}
              <SecondaryNavbar />

              {/* childrens */}
              {children}

              {/* footer component */}
              <div>
                <Footer />
              </div>
            </div>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
