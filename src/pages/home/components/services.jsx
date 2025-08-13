import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { FiStar, FiMail, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

const services = [
  {
    title: "Digital Marketing",
    icon: <FiStar />,
    description: "Boost your online presence",
  },
  {
    title: "Web Development",
    icon: <FiMail />,
    description: "Custom web solutions",
  },
  {
    title: "Brand Strategy",
    icon: <FiUser />,
    description: "Build your brand identity",
  },
];

const CardMotion = styled(motion.div)({
  height: "100%",
});

const Services = () => (
  <Container id="services" sx={{ py: { xs: 8, md: 12 } }}>
    <Typography variant="h4" align="center" fontWeight={700} mb={6}>
      Our Services
    </Typography>
    <Grid container spacing={4}>
      {services.map((svc, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <CardMotion
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
              <Box
                sx={{
                  fontSize: 50,
                  mb: 2,
                  color: "#488286",
                  textAlign: "center",
                }}
              >
                {svc.icon}
              </Box>
              <CardContent>
                <Typography variant="h5" gutterBottom fontWeight={600}>
                  {svc.title}
                </Typography>
                <Typography color="text.secondary">
                  {svc.description}
                </Typography>
              </CardContent>
            </Card>
          </CardMotion>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Services;
