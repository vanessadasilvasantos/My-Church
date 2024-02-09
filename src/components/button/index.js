import { TouchableOpacity, View, Text } from "react-native";
import { Styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Button({ text, onPress }) {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.containerButton}
        onPress={() => navigation.navigate(onPress)}
      >
        <Text style={Styles.title}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
