import { TouchableOpacity, View, Text } from "react-native";
import { Styles } from "./style";

export default function Button({ text }) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.containerButton}>
        <Text style={Styles.title}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
