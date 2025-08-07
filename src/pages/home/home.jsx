import { Box } from "@mui/material";
import { motion } from "framer-motion";
const LandingPage = () => (
  <Box
    sx={{
      bgcolor: "#ffffff",
      color: "#000",
      overflowX: "hidden",
    }}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      This is your LandingPage content.....
    </motion.div>
  </Box>
);

export default LandingPage;
