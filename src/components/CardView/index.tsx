import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";

import { styles } from "./styles";

import Logo from "../../../assets/logo.png";
import { Divider } from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import { BuyButton } from "../BuyButton";
import { CarModel } from "./props";
import { loadCarData } from "./actions";

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadCarData(8, setCarData);
      console.log(carData)
    })();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.imageLogo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Automobili Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button title="<" color={"#01A6B3"} onPress={() => {}} />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button title=">" color={"#01A6B3"} onPress={() => {}} />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      {renderCarDetails()}
      {renderCarImage()}

      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}
