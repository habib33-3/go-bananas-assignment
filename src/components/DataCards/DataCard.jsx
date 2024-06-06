import { Box, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const DataCard = ({ item }) => {
  const { userId, title, body } = item;

  return (
    <Box
      component={Paper}
      elevation={3}
      padding={2}
      margin={2}
      sx={{
        width: "100%",
        height: "400px",
        borderRadius: "16px",
        backgroundColor: "#F7FAFC",
        color:"#2D3748",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Typography
        variant="h5"
        textAlign="left"
        gutterBottom
        sx={{
          color: "#333",
          fontWeight: "bold",
          borderBottom: "2px solid #1976d2",
          paddingBottom: "8px",
        }}
      >
        {title}
      </Typography>

      <Box
        component="div"
        sx={{ marginTop: "16px" }}
        height={4/5}
      >
        <Typography
          variant="body2"
          textAlign="left"
          sx={{
            color: "#666",
            marginBottom: "8px",
          }}
        >
          User ID: {userId}
        </Typography>

        <Typography
          variant="body1"
          textAlign="justify"
          sx={{
            color: "#111",
          }}
        >
          {body}
        </Typography>
      </Box>
    </Box>
  );
};

DataCard.propTypes = {
  item: PropTypes.object,
};

export default DataCard;
