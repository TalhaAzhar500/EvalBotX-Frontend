import { CircularProgress, Typography } from "@mui/material";

const NoData = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
      }}
    >
      {!text ? (
        <CircularProgress />
      ) : (
        <Typography sx={{ fontWeight: 800, fontSize: "1.5rem" }}>
          {text}
        </Typography>
      )}
    </div>
  );
};

export default NoData;
