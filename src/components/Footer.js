import {  Sports } from "@mui/icons-material";
import { Box, Container, Paper, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import "./Footer.css"

export default function Footer() {
  return (
    <Paper
      sx={{
      
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
          <a href="/" >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <Person2OutlinedIcon />
              <Typography fontSize="10px">پروفایل</Typography>
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
              <EmojiEventsOutlinedIcon />
              <Typography fontSize="10px">لیگ ها</Typography>
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
              <SportsSoccerOutlinedIcon />
              <Typography fontSize="10px">فوتبان</Typography>
            </div>
          </a><a href="/">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <ExploreOutlinedIcon />
              <Typography fontSize="10px">اکتشاف</Typography>
            </div>
          </a><a href="/">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center",
                color:"green"
              }}
            >
              <Sports />
              <Typography fontSize="10px" >مسابقات</Typography>
            </div>
          </a>
        </Box>
      </Container>
    </Paper>
  );
}
