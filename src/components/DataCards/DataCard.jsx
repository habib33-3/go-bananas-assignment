import { Box, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const DataCard = ({ item }) => {
  const { userId, title, body } = item;

  return (
    <Box
      component={Paper}
      elevation={3}
      padding={2}
      margin={1}
      sx={{
        width: "100%", 
        height:"400px"
      }}
    >
      <Typography variant="h6" textAlign="left" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" textAlign="left">
        {body}
      </Typography>
    </Box>
  );
};

DataCard.propTypes = {
  item: PropTypes.object,
};

export default DataCard;
