import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import React, { useState, useEffect } from "react";
import { getCharactersDetailApi } from "../api/rym";
import Header from "../components/Character/Header";
import Status from "../components/Character/Status";

export default function RYM(props) {
  const {
    route: { params },
    navigation,
  } = props;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCharactersDetailApi(params.id);
        setCharacter(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!character) return null;

  return (
    <ScrollView>
      <Header
        id={character.id}
        name={character.name}
        status={character.status}
        gender={character.gender}
        species={character.species}
        origin={character.origin.name}
        image={character.image}
      />
      <Status status={character.status} />
    </ScrollView>
  );
}
