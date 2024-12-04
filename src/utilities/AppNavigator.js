import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import SpeechRecognition from "../screens/SpeechRecognition";

const MainStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="splash_screen">
      <MainStack.Screen
        name="splash_screen"
        component={SplashScreen}
        options={{
          headerTitle: "SplashScreen",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="speech_recognition_screen"
        component={SpeechRecognition}
        options={{
          headerTitle: "SpeechRecognition",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};

export default AppNavigator;
