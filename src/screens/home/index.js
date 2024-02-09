import { Styles } from "./style";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../../components/header";

export default function Home() {
  return (
    <View style={Styles.container}>
      <Header />

      <View style={Styles.imgContainer}>
        <View style={Styles.options}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/pray.png")}
              style={Styles.img}
            />
          </TouchableOpacity>
          <Text style={Styles.textOptions}>Teste 1234</Text>
        </View>
        <View style={Styles.options}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/profile.png")}
              style={Styles.img}
            />
          </TouchableOpacity>
          <Text style={Styles.textOptions}>Teste 1234</Text>
        </View>
        <View style={Styles.options}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/contributions.png")}
              style={Styles.img}
            />
          </TouchableOpacity>
          <Text style={Styles.textOptions}>Teste 1234</Text>
        </View>
        <View style={Styles.options}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/logo500.png")}
              style={Styles.img}
            />
          </TouchableOpacity>
          <Text style={Styles.textOptions}>Teste 1234</Text>
        </View>
      </View>
    </View>
  );
}
