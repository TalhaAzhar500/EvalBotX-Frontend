import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "#1995AD", mb: 2 }} />

      <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ color: "#6c757d", mb: 2 }}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" sx={{ color: "#999", mb: 4 }}>
        The page you're looking for doesn’t exist or was moved.
      </Typography>

      <Button
        variant="contained"
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: "8px",
          background: "linear-gradient(45deg, #1995AD 30%, #a2d6e3 90%)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textTransform: "none",
          fontWeight: 600,
          fontSize: 16,
          "&:hover": {
            transform: "translateY(-2px)",
            background: "linear-gradient(45deg, #177d93 30%, #90cfe5 90%)",
          },
        }}
        onClick={() => navigate("/")}
      >
        Go to Homepage
      </Button>
    </Container>
  );
};

export default NotFound;
