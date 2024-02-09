import { View, Text } from "react-native";
import { Styles } from "./style";

export default function Header() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>MY CHURCH</Text>
    </View>
  );
}
