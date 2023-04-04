import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import moment from "moment";
import React from "react";

type RealtimeData = {
  [key: string]: any;
};

const RealtimeItem = ({ realtimeData }: RealtimeData) => {
  const { name, region, country, lat, lon, localtime } = realtimeData?.location;

  const {
    temp_c,
    temp_f,
    last_updated,
    condition,
    wind_mph,
    wind_kph,
    wind_dir,
    pressure_mb,
    pressure_in,
    humidity,
    precip_mm,
    precip_in,
    vis_km,
    vis_miles,
  } = realtimeData?.current;

  const { text, icon } = condition;

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Name of area : {name} Current time :{" "}
            {moment(localtime).format("MMMM Do YYYY, h:mm:ss a")}
          </Typography>
          <Typography variant="h5" component="div">
            Name of region : {region}
          </Typography>
          <Typography variant="h5" component="div">
            Country name : {country}
          </Typography>
          <Typography variant="h5" component="div">
            Area's longitude : {lon} Area's latitude : {lat}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default RealtimeItem;
