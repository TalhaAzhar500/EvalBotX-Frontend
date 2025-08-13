import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 4,
        background: "linear-gradient(to right, #e6f6f9, #ffffff)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ flex: 1 }}
      >
        <Typography fontSize={48} fontWeight={900} mb={2}>
          <Box component="span" sx={{ color: "#488286" }}>
            EvalBotX.
          </Box>
        </Typography>
        <Typography fontSize={20} maxWidth="85%">
          EvalBotX is a smart, web-based exam generator that streamlines
          question management, CLO/PLO mapping, and bilingual (English/Urdu)
          paper creation. Designed for Outcome-Based Education, it helps
          instructors save time, ensures compliance, and empowers QA teams with
          performance reports — all in one secure platform.
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ flex: 1, display: "flex", justifyContent: "center" }}
      >
        {/* <img
          src={dashboardImg}
          alt="dashboard"
          style={{
            maxWidth: "100%",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        /> */}
        dashboard img
      </motion.div>
    </Box>
  );
};

export default HeroSection;
