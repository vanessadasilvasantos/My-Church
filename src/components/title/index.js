import { View, Text } from "react-native";
import { Styles } from "./styles";

export default function Title({ text }) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{text}</Text>
    </View>
  );
}
