import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BarChartIcon from "@mui/icons-material/BarChart";

const MotionTypography = motion(Typography);

const themes = ["488286", "ffffff", "000000"];

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
        {themes.map((color, index) => (
          <div
            key={index}
            style={{ display: "inline-block", margin: "0 10px" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: `#${color}`,
                color: "#fff",
                mx: 1,
                mb: 2,
                fontWeight: 800,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <BarChartIcon
                sx={{ mr: 1, verticalAlign: "middle", fontSize: 35 }}
              />
              Dashboard
            </Button>
          </div>
        ))}
      </MotionTypography>
    </Box>
  );
}
