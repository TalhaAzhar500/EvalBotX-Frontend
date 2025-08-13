import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!details.fullname || !details.email || !details.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      // await sendQuery(details);
      toast.success("Message sent successfully!");
      setDetails({ fullname: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact" sx={{ py: 8 }}>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700}>
          Get In Touch
        </Typography>
        <Typography color="text.secondary">
          We’re here to help—send us a message!
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 800,
          mx: "auto",
          p: 4,
          borderRadius: 3,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: 3,
        }}
      >
        <Grid container spacing={3}>
          {[
            { label: "Full Name", name: "fullname", icon: FiUser },
            { label: "Email*", name: "email", icon: FiMail, type: "email" },
            { label: "Phone", name: "phone", icon: FiPhone },
          ].map(({ label, name, icon: Icon }, ix) => (
            <Grid item xs={12} md={ix === 2 ? 12 : 6} key={name}>
              <TextField
                fullWidth
                required={name !== "phone"}
                label={label}
                type={name === "email" ? "email" : "text"}
                value={details[name]}
                onChange={(e) =>
                  setDetails((prev) => ({ ...prev, [name]: e.target.value }))
                }
                InputProps={{
                  startAdornment: (
                    <Icon style={{ marginRight: 8, color: "#488286" }} />
                  ),
                  sx: { borderRadius: 2 },
                }}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Message*"
              multiline
              rows={4}
              value={details.message}
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, message: e.target.value }))
              }
              InputProps={{
                startAdornment: (
                  <FiMessageSquare
                    style={{ marginRight: 8, color: "#488286" }}
                  />
                ),
                sx: { borderRadius: 2 },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              type="submit"
              sx={{ py: 1.5, background: "#488286" }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress color="inherit" size={24} />
              ) : (
                "Send Message"
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
