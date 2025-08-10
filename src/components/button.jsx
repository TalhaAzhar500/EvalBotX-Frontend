import { Button } from "@mui/material";

const CustomButton = ({ name, variant, width, onClick }) => {
  return (
    <Button
      variant={variant ?? "contained"}
      sx={{
        backgroundColor: "#488286",
        width: width ?? "100%",
        color: "#fff",
        fontWeight: 700,
        borderRadius: 2,
        py: 1.2,
        mb: 3,
        "&:hover": { backgroundColor: "#2e757aff" },
      }}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
