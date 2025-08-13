import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Services from "./components/services";
import FAQ from "./components/faq";
import ContactUs from "./components/contactUs";
import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import { Divider } from "@mui/material";

const LandingPage = () => (
  <Box sx={{ bgcolor: "#ffffff", color: "#000", overflowX: "hidden" }}>
    <NavBar />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />
      <Services />
      <FAQ />
      <ContactUs />
    </motion.div>
    <Divider sx={{ my: 6, borderColor: "#ddd" }} />
    <Footer />
  </Box>
);

export default LandingPage;
