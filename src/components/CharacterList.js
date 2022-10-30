import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  const { characters, loadCharacters, isNext } = props;

  const loadMore = () => {
    loadCharacters();
  };

  return (
    <FlatList
      data={characters}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(character) => String(character.id)}
      renderItem={({ item }) => <CharacterCard character={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#69C8EC99"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 70 : 60,
  },
});
