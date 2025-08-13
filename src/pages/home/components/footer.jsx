import {
  Container,
  Box,
  Typography,
  Link,
  Stack,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Copyright from "../../../components/copyright";
import CustomButton from "../../../components/button";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter a valid email.");
      return;
    }
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Stack direction="row" spacing={2}>
          {/* <Link href="/privacy-policy" underline="hover">
            Privacy Policy
          </Link>
          <Typography component="span" sx={{ mx: 1 }}>
            |
          </Typography>
          <Link href="/terms-of-service" underline="hover">
            Terms of Service
          </Link> */}
        </Stack>
        <IconButton href="#">
          <GitHubIcon />
        </IconButton>
      </Box>
      <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 4 }}>
        <Typography variant="h6" fontWeight={600}>
          Join our newsletter
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <TextField
            size="small"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomButton
            name="Subscribe"
            width="auto"
            onClick={handleSubscribe}
          />
        </Stack>
      </Box>
      <Copyright />
    </Container>
  );
};

export default Footer;
