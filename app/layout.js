import "./globals.css";
import "./style/style.css";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import Footer from "@/app/components/Footer";
import BottomPlayer from "./components/BottomPlayer";
import PrimaryNavbar from "@/app/components/PrimaryNavbar";
import SecondaryNavbar from "./components/SecondaryNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify - Web Player: Music for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
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
          <BottomPlayer />
        </StoreProvider>
      </body>
    </html>
  );
}
