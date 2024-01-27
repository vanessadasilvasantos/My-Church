import { View, Text, Image } from "react-native";
import { Styles } from "./style";

//Components
import Input from "../../components/input";
import Button from "../../components/button";
import Title from "../../components/title";

export default function Login() {
  return (
    <View style={Styles.container}>
      <View style={Styles.containerImg}>
        <Image source={require("../../assets/logo.png")} style={Styles.logo} />
      </View>
      <Title text="Login" />
      <Input label="Email" />
      <Input label="Senha" />
      <Button text="Continuar" />
      <Text>Esqueci minha senha</Text>
    </View>
  );
}
