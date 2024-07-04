import react from "react";
import { Grid, Box, Typography } from "@mui/material";

const GridComponent = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{ height: 100, bgcolor: "primary.main", color: "white", p: 3 }}
        >
          Caja 1
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{ height: 100, bgcolor: "secondary.main", color: "white", p: 3 }}
        >
          Caja 2
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box sx={{ height: 100, bgcolor: "error.main", color: "white", p: 3 }}>
          Caja 3
        </Box>
      </Grid>
      <Grid item xs={6} md={8}>
        <Box
          sx={{ height: 100, bgcolor: "warning.main", color: "white", p: 3 }}
        >
          Caja 4
        </Box>
      </Grid>
    </Grid>
  );
};

export default GridComponent;
