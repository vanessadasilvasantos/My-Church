import { View, TextInput, Text } from "react-native";
import { Styles } from "./style";

export default function Input({ label }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.input}>
        <Text style={Styles.title}>{label}</Text>
        <TextInput />
      </View>
    </View>
  );
}
