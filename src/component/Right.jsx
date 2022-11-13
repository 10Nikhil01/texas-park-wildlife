import React from "react";
import {Box, Button,Typography} from "@mui/material";
function Right() {
    const data=[
        {Date: "Nov. 12",Time:"08:00 am - 05:00 pm",Address:"410 S. Pecan Pearsall, TX 78061",Seats:"12 seats available"}
      ]
  return (
    <div>
      {data.map((data) => {
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box>{data.Date}</Box>
          <Box>{data.Time}</Box>
          <Box>{data.Address}</Box>
          <Box>
            <Typography variant="h6">OPEN</Typography>
            {data.Seats}
          </Box>
          <Box>
            <Button color="success">Learn More</Button>
          </Box>
        </Box>;
      })}
    </div>
  );
}

export default Right;
