import * as React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BarChartIcon from "@mui/icons-material/BarChart";

const MotionTypography = motion(Typography);

export default function Dashboard() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 5, minHeight: "100dvh" }}>
      <MotionTypography
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        variant="h4"
        align="center"
        mb={6}
        sx={{ fontWeight: 600, color: "#1a1a1a" }}
      >
        <BarChartIcon sx={{ mr: 1, verticalAlign: "middle", fontSize: 35 }} />
        Dashboard
      </MotionTypography>
    </Box>
  );
}
