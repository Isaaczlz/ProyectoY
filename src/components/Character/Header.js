import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { capitalize } from "lodash";
import getColorByCharacterStatus from "../../utils/getColorByCharacterStatus";

export default function Header(props) {
  const { id, name, status, gender, species, origin, image } = props;
  const color = getColorByCharacterStatus(status);

  const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.id}>#{`${id}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 500,
    borderBottomLeftRadius: 500,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  id: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 30,
    resizeMode: "contain",
  },
});
