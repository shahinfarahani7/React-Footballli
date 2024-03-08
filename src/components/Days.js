import { Divider, Grid, Typography } from "@mui/material";

function Days() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        item
        xs={11}
        
        sx={{ display: "flex", justifyContent: "space-between",paddingTop:"8px" }}
      >
        <Typography color="#9C9C9F" fontSize="12px">
          دیروز
        </Typography>
        <Typography color="#9C9C9F" fontSize="12px">
          امروز
        </Typography>
        <Typography color="#9C9C9F" fontSize="12px">
          فردا
          <Divider
            sx={{
              marginTop: "5px",
              backgroundColor: "green",
              height: "1px",
              borderTopLeftRadius: "80px",
              borderTopRightRadius: "80px",
            }}
          />
        </Typography>
        <Typography color="#9C9C9F" fontSize="12px">
          جمعه
        </Typography>
        <Typography color="#9C9C9F" fontSize="12px">
          ۲۰ اسفند
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Days;
