import { Image, Sports } from "@mui/icons-material";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            display: "flex",
            my: 1,
          }}
        >
          <a href="/">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <Sports />
              <Typography fontSize="10px">مسابقات</Typography>
            </div>
          </a>
          <a href="/">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <Sports />
              <Typography fontSize="10px">مسابقات</Typography>
            </div>
          </a>
          <a href="/">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <Sports />
              <Typography fontSize="10px">مسابقات</Typography>
            </div>
          </a><a href="/">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <Sports />
              <Typography fontSize="10px">مسابقات</Typography>
            </div>
          </a><a href="/">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <Sports />
              <Typography fontSize="10px">مسابقات</Typography>
            </div>
          </a>
        </Box>
      </Container>
    </Paper>
  );
}
