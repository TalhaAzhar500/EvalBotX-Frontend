import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/button";

const NavBar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
        px: 4,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      {/* <img src={logo} alt="logo" width={180} style={{ cursor: "pointer" }} /> */}
      logo
      <Box sx={{ display: "flex", gap: 4 }}>
        {["About", "FAQs", "Get in Touch"].map((item) => (
          <Typography
            key={item}
            onClick={() =>
              scrollToSection(
                item === "FAQs"
                  ? "faq"
                  : item === "Get in Touch"
                    ? "contact"
                    : "hero"
              )
            }
            sx={{
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              borderBottom: "2px solid transparent",
              "&:hover": {
                color: "#488286",
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
      <CustomButton
        name="Sign In"
        width="auto"
        onClick={() => navigate("/signIn")}
      />
    </Box>
  );
};

export default NavBar;
