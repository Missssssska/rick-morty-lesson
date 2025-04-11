import { CharacterItem } from "./CharacterItem";
import { useCharacters } from "../hooks/useCharacters";

export const CharacterList = ({ ids }) => {
  const { characters, isLoading } = useCharacters(ids);

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }
  if (characters.results != undefined) {
    //console.log(characters)
    return (
      <div className="characters-container">
        {characters.results.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </div>
    );
  } else if (characters.length != undefined) {
    return (
      <div className="characters-container">
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </div>
    );
  }
  else {
    return (
      <CharacterItem key={characters.id} character={characters} />
    );
  }

};
