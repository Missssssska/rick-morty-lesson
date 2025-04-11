import { Rick } from "./components/Rick";
import { EpisodeList } from "./components/presentational/EpisodeList";
import { LocationList } from "./components/presentational/LocationList";
import { useState } from "react";


function App() {
  const [openLocation, setOpenLocation] = useState(false);
  const [openEpisode, setOpenEpisode] = useState(false);

  return (
    <>
      <div className="content-block">
        <div>
          <h1 className="title" onClick={() => setOpenEpisode(!openEpisode)}>Episode</h1>
          {openEpisode && <EpisodeList />}
        </div>
      </div>
      <div className="content-block">
        <div>
          <h1 className="title" onClick={() => setOpenLocation(!openLocation)}>Location</h1>
          {openLocation && <LocationList />}
        </div>
      </div>
    </>
  );
}

export default App;
