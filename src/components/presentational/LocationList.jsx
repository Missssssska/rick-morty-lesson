import { LocationItem } from "./LocationItem";
import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useLocations } from "../hooks/useLocations";

export const LocationList = ({ ids }) => {
  const { locations } = useLocations(ids);
  return (
    <div>
      {locations.map((location) => (
         <LocationItem key={location.id} location={location} />
        // <Collapse
        //   key={episode.id}
        //   className="episode"
        //   title={episode.episode + ":" + episode.name}
        //   content={
        //     <CharacterList
        //       ids={episode.characters.map((character) => {
        //         const id = character.split("/").pop();
        //         return id;
        //       })}
        //     />
        //   }
        // />
      ))}
    </div>
  );
};