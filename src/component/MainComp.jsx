import React from "react";
import {
  styled,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import Right from "./Right";

function MainComp() {
  const data = [
    {
      Date: "Nov. 12",
      Time: "08:00 am - 05:00 pm",
      Address: "410 S. Pecan Pearsall, TX 78061",
      Seats: "12 seats available",
    },
    {
      Date: "Nov. 12",
      Time: "08:00 am - 05:00 pm",
      Address: "410 S. Pecan Pearsall, TX 78061",
      Seats: "12 seats available",
    },
    {
      Date: "Nov. 12",
      Time: "08:00 am - 05:00 pm",
      Address: "410 S. Pecan Pearsall, TX 78061",
      Seats: "12 seats available",
    },
  ];

  return (
    <>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          color: "white",
          textAlign: "center",
          fontFamily: "arial",
          bgcolor: "black",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "4px",
          pt: 2,
          pb: 0.5,
        }}
      >
        Texas Parks & Wildlife
      </Typography>
      <Grid container md={12} spacing={1}>
        <Grid container item md={12} mt={2} mx={30}>
          <Grid
            container
            md={12}
            justifyContent="flex-end"
            columnGap={1}
            mb="0"
          >
            <Button variant="text" sx={{ color: "grey", borderRadius: "0" }}>
              <Typography
                variant="h6"
                sx={{ color: "black", fontWeight: "normal" }}
              >
                Help
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#e7e7e7",
                "&:hover": {
                  backgroundColor: "#e7e7e7",
                },
                borderRadius: "0",
                boxShadow: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "#5f5f5f",
                  textTransform: "none",
                }}
              >
                Login
              </Typography>
            </Button>
          </Grid>
          <Grid container md={12} rowGap={2} mb={5}>
            <Grid item md={12}>
              <Typography variant="h4" sx={{ fontWeight: "900" }}>
                Education Registration System
              </Typography>
            </Grid>
            <Grid item md={12}>
              <TextField
                id="outlined-basic"
                value="Education Reg System Home"
                variant="outlined"
                inputProps={{ style: { fontWeight: 800, fontSize: "1.2rem" } }}
                sx={{
                  width: "300px",
                  bgcolor: "#f2f2f2",
                  borderRadius: 0,
                  color: "black",
                  mr: 1,
                }}
              />
              <Button
                variant="contained"
                color="success"
                size="large"
                sx={{
                  textTransform: "none",
                  fontSize: "1.1rem",
                  borderRadius: 0,
                  bgcolor: "#23b33b",
                  py: 1.8,
                  "&:hover": { bgcolor: "#23b33b" },
                }}
              >
                Am I Certified?
              </Button>
            </Grid>
          </Grid>
          <Grid container md={12}>
            <Grid item md={12} ml={1}>
              <Typography
                variant="h3"
                sx={{
                  color: "#5c5c5c",
                  fontWeight: "600",
                  wordSpacing: "5px",
                  letterSpacing: "2px",
                }}
              >
                Hunter Education Classroom Course
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#5c5c5c",
                  mt: 4,
                  fontWeight: "600",
                  wordSpacing: "5px",
                  letterSpacing: "2px",
                }}
              >
                Showing classes near Austin, TX 78701, USA
              </Typography>
              <Button
                variant="text"
                sx={{
                  my: 1,
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  mx: 0,
                  textTransform: "none",
                  px: 0,
                }}
              >
                Change Location
              </Button>
            </Grid>
          </Grid>
          <Grid container mt={2} spacing={0}>
            <Grid item xs={3}>
              <Typography
                variant="h6"
                sx={{
                  color: "#5c5c5c",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  wordSpacing: "1px",
                }}
              >
                Show classes within:
              </Typography>
              <TextField
                id="filled-number"
                type="number"
                variant="filled"
                inputProps={{
                  style: {
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    height: ".2rem",
                  },
                }}
                sx={{
                  maxWidth: "165px",
                  border: "2px solid black",
                  borderRadius: "7px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#5c5c5c",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  wordSpacing: "1px",
                  mt: 2,
                }}
              >
                Month:
              </Typography>
              <TextField
                id="filled-number"
                type="number"
                variant="filled"
                inputProps={{
                  style: {
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    height: ".2rem",
                  },
                }}
                sx={{
                  maxWidth: "165px",
                  border: "2px solid black",
                  borderRadius: "7px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#5c5c5c",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  wordSpacing: "1px",
                  mt: 2,
                }}
              >
                Show only:
              </Typography>
              <FormGroup sx={{ maxWidth: "200px" }}>
                <FormControlLabel
                  control={<BpCheckbox />}
                  label={
                    <Typography
                      variant="h6"
                      sx={{ wordWrap: "wrap", width: "80%" }}
                    >
                      Classes for the hearing impaired
                    </Typography>
                  }
                  sx={{ py: 1 }}
                />
                <FormControlLabel
                  control={<BpCheckbox />}
                  label={
                    <Typography
                      variant="h6"
                      sx={{ wordWrap: "wrap", width: "80%" }}
                    >
                      Instructors bilingues(espanol -ingles)
                    </Typography>
                  }
                  sx={{ py: 1 }}
                />
                <FormControlLabel
                  control={<BpCheckbox />}
                  label={
                    <Typography
                      variant="h6"
                      sx={{ wordWrap: "wrap", width: "70%" }}
                    >
                      Open classes
                    </Typography>
                  }
                  sx={{ py: 1 }}
                />
              </FormGroup>
            </Grid>
            <Grid item md={9}>
              <Grid item m={0} p={0} md={12}>
                    {data.map((row) => (
                <Table>
                  <TableBody 
                  sx={{
                  }}>
                      <TableRow
                        sx={{
                          borderRight:"1px solid black",
                          borderLeft:"1px solid black",
                          borderBottom:"1px solid black",
                          borderTop:"1px solid black"
                        }}
                      >
                        <TableCell sx={{pb:2,borderRight:"1px solid black"}}>{row.Date}</TableCell>
                        <TableCell sx={{pb:2,borderRight:"1px solid black"}}>{row.Time}</TableCell>
                        <TableCell sx={{pb:2,borderRight:"1px solid black"}}>Open{row.Address}</TableCell>
                        <TableCell sx={{pb:2,borderRight:"1px solid black"}}>{row.Seats}</TableCell>
                        <TableCell sx={{pb:2,borderRight:"1px solid black"}}><Button>Learn More</Button></TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
                    ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MainComp;

// for checkbox customized

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}
