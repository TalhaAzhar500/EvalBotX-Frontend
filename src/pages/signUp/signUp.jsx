import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import CustomButton from "../../components/button";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSignUp = () => {
    console.log("sign up clicked");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #DBF9F4, #ffffff)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ width: "100%", maxWidth: 400 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              backgroundColor: "#488286",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <Typography variant="h5" color="#fff">
              ✍
            </Typography>
          </Box>

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Create an account
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Sign up to start creating and managing exams, quizzes, and tests
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Full Name"
            sx={{
              mb: 2,
              borderRadius: 5,
              "& .MuiOutlinedInput-root:hover fieldset": {
                border: "#488286 solid 2px !important",
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                border: "#488286 solid 2px !important",
              },
            }}
            InputProps={{
              style: {
                borderRadius: "12px",
              },
            }}
          />

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Email"
            sx={{
              mb: 2,
              borderRadius: 5,
              "& .MuiOutlinedInput-root:hover fieldset": {
                border: "#488286 solid 2px !important",
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                border: "#488286 solid 2px !important",
              },
            }}
            InputProps={{
              style: {
                borderRadius: "12px",
              },
            }}
          />

          <TextField
            fullWidth
            variant="outlined"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root:hover fieldset": {
                border: "#488286 solid 2px !important",
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                border: "#488286 solid 2px !important",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? (
                      <VisibilityOff style={{ color: "#488286" }} />
                    ) : (
                      <Visibility style={{ color: "#488286" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                borderRadius: "12px",
              },
            }}
          />

          <motion.div whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
            <CustomButton
              name="Sign Up"
              width="100%"
              onClick={() => handleSignUp()}
            />
          </motion.div>

          <Typography variant="body2">
            Already have an account?{" "}
            <span
              style={{
                color: "#488286",
                cursor: "pointer",
                fontWeight: 600,
              }}
              onClick={() => navigate("/signIn")}
            >
              Sign In
            </span>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default SignUp;
