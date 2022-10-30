import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { getCharactersApi, getCharacterDetailsByUrlApi } from "../api/rym";
import CharacterList from "../components/CharacterList";

export default function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadCharacters();
    })();
  }, []);

  const loadCharacters = async () => {
    try {
      const response = await getCharactersApi(nextUrl);
      setNextUrl(response.info.next);
      const charactersArray = [];
      for await (const character of response.results) {
        const characterDetails = await getCharacterDetailsByUrlApi(
          character.url
        );
        charactersArray.push({
          id: characterDetails.id,
          name: characterDetails.name,
          status: characterDetails.status,
          gender: characterDetails.gender,
          species: characterDetails.species,
          origin: characterDetails.origin.name,
          image: characterDetails.image,
        });
      }

      setCharacters([...characters, ...charactersArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <CharacterList
        characters={characters}
        loadCharacters={loadCharacters}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
