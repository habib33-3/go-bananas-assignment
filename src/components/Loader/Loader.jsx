import { Box, Container, Skeleton, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: "90vw", margin: "auto", mt: 4 }}>
        <Stack spacing={2}>
          <Skeleton
            variant="text"
            width="80%"
            height={40}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={200}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={200}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={200}
            animation="wave"
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default Loader;
