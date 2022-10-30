import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByCharacterStatus from "../../utils/getColorByCharacterStatus";

export default function Status(props) {
  const { status } = props;
  return (
    <View style={styles.content}>
      <View
        style={{
          ...styles.pill,
          backgroundColor: getColorByCharacterStatus(status),
        }}
      >
        <Text style={styles.text}>Status: {capitalize(status)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
  },
});
