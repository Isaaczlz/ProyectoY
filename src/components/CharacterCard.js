import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import getColorByCharacterStatus from "../utils/getColorByCharacterStatus";

export default function CharacterCard(props) {
  const { character } = props;
  const navigation = useNavigation();

  const characterColor = getColorByCharacterStatus(character.status);
  const bgStyles = { backgroundColor: characterColor, ...styles.bgStyles };

  const goToCharacter = () => {
    navigation.navigate("RYM", { id: character.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToCharacter}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.number}>
              #{`${character.id}`.padStart(3, 0)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 0,
    width: 90,
    height: 90,
    borderRadius: 20,
    top: 30,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    paddingTop: 10,
    top: -10,
  },
  number: {
    position: "absolute",
    left: 10,
    top: 90,
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
