import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FadeLoader } from "react-spinners";
import { useAstronomyData } from "../../contexts/AstronomyData";
import { getAstronomyData } from "../../services/APIUtils";
import "./AstronomyDataList.css";
import AstronomyItem from "./AstronomyItem";

const AstronomyDataList = () => {
  const {
    astronomyData,
    isLoading,
    setAstronomyData,
    setLoading,
  } = useAstronomyData();

  const [location, setLocation] = useState<string>("");

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await getAstronomyData(location);
      const data = res.data;
      setAstronomyData(data);
    } catch (error) {
      console.error("Error fetching astronomy data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="content-container">
      <h3 className="margin-left title-text">
        Get Astronomy Data of a specific location
      </h3>
      <h4 className="margin-left title-text">Enter the location</h4>
      <div className="margin-left title-text">
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          value={location}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setLocation(e.target.value)}
        />
        <Button className="margin-left margin-top" onClick={handleClick}>
          Search
        </Button>
      </div>
      {isLoading ? (
        <div className="loader-style">
          <FadeLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="item-style">
          <AstronomyItem astronomyData={astronomyData} />
        </div>
      )}
    </div>
  );
};

export default AstronomyDataList;
