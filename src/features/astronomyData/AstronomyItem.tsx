import { LocationOn } from "@mui/icons-material";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Avatar, Box, Chip, Divider, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import moment from "moment";
import React from "react";

type AstronomyData = {
  [key: string]: any;
};

const AstronomyItem = ({ astronomyData }: AstronomyData) => {
  const {
    name,
    region,
    country,
    lat,
    lon,
    localtime,
  } = astronomyData?.location;
  const {
    sunset,
    sunrise,
    moonrise,
    moonset,
    moon_phase,
  } = astronomyData?.astronomy?.astro;
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography fontWeight={600} fontFamily="'Poppins', sans-serif">
            The Location's Stats
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Name of area : <LocationOn sx={{ color: grey[500] }} />
            {name}, {country}
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Currently the time is{"  "}
            <Chip
              color="primary"
              label={`${moment(localtime).format("MMMM Do YYYY, h:mm:ss a")}`}
            />
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Name of region is {region}
          </Typography>
          <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
            Area's longitude is {lon} & the Area's latitude is {lat}
          </Typography>
        </CardContent>
      </Card>
      <Divider />
      <Card>
        <Box sx={{ p: 2, display: "flex" }}>
          <Avatar variant="rounded" children={<WbSunnyIcon />} />
          <Stack spacing={0.5} sx={{ px: 2 }}>
            <Typography fontWeight={600} fontFamily="'Poppins', sans-serif">
              The Current Sun Stats
            </Typography>
            <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
              Sunrise is at <Chip label={`${sunrise}`} color="primary" /> and
              the Sunset is at <Chip label={`${sunset}`} color="primary" />
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ p: 2, display: "flex" }}>
          <Avatar variant="rounded" children={<Brightness3Icon />} />
          <Stack spacing={0.5} sx={{ px: 2 }}>
            <Typography fontWeight={600} fontFamily="'Poppins', sans-serif">
              The Current Moon Stats
            </Typography>
            <Typography fontWeight={500} fontFamily="'Poppins', sans-serif">
              Moon rise is at
              <Chip label={`${moonrise}`} color="primary" /> and the Moon set is
              at <Chip label={`${moonset}`} color="primary" />
              .The moon phase is at{" "}
              <Chip label={`${moon_phase}`} color="primary" />
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Divider />
      </Card>
    </div>
  );
};

export default AstronomyItem;
