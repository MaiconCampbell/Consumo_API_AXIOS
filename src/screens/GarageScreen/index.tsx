import React from "react";
import { View, Text } from "react-native";

import { styles } from "./style";
import CardView from "../../components/CardView";

export default function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner} />
        <View style={[styles.triangleCorner, styles.topRigth]} />
        <View style={[styles.triangleCorner, styles.bottomLeft]} />
        <View style={[styles.triangleCorner, styles.bottomRigth]} />

        <CardView />
      </View>
    </View>
  );
}
