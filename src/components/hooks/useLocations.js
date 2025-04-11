import { useState, useEffect } from "react";
import { fetchLocations } from "../../api";

export const useLocations = (ids) => {
    const [locations, setLocations] = useState([]);
    useEffect((ids) => {
        fetchLocations(ids).then((data) => {
            setLocations(data);
      });
    }, [ids]);
  
    return { locations };
  };
  