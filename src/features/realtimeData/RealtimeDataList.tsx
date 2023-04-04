import React, { useState } from "react";

import { Button } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { FadeLoader } from "react-spinners";

import { useRealtimeData } from "../../contexts/RealtimeData";
import { getRealtimeData } from "./../../services/APIUtils";
import RealtimeItem from "./RealtimeItem";

import "./RealtimeDataList.css";

const RealtimeDataList = () => {
  const {
    realtimeData,
    isLoading,
    setRealtimeData,
    setLoading,
  } = useRealtimeData();
  const [location, setLocation] = useState<string>("");

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await getRealtimeData(location);
      const data = res.data;
      setRealtimeData(data);
    } catch (error) {
      console.error("Error fetching realtime data:", error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="content-container">
      <h3 className="margin-left title-text">
        Get Realtime Data of a specific location
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
          <RealtimeItem realtimeData={realtimeData} />
        </div>
      )}
    </div>
  );
};

export default RealtimeDataList;
