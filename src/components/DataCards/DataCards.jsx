import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import DataCard from "./DataCard";

const DataCards = ({ data }) => {
  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        Posts
      </Typography>

      <Stack
        flexWrap="wrap"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="24px"
        direction="row"
      >
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "300px",
            }}
          >
            <DataCard item={item} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

DataCards.propTypes = {
  data: PropTypes.array,
};

export default DataCards;
