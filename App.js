import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Login from "./src/screens/login";
import Input from "./src/components/input";
import Button from "./src/components/button";
import Title from "./src/components/title";
import Home from "./src/screens/home";
import Header from "./src/components/header";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Input"
          component={Input}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Button"
          component={Button}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Title"
          component={Title}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
