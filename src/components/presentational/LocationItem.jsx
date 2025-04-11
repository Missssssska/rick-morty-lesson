import { useMemo, useState } from "react";
import { CharacterList } from "./CharacterList";

export const LocationItem = ({ location }) => {
  const [open, setOpen] = useState(false);
 // console.log(location)
  const ids = useMemo(
    () =>
        location.residents.map((residents) => {
        const id = residents.split("/").pop();
        return id;
      }),
    [location?.residents]
  );

  return (
    <div className="episode" onClick={() => setOpen(!open)}>
      <h3>{location.type} : {location.name} ({location.dimension})</h3>
      {open && <CharacterList ids={ids} />}
    </div>
  );
};
