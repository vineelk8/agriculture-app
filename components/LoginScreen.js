import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from "react-native";

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={require("../assets/images/agri-bg.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Text>Welcome to Agriculture</Text>
          <TextInput
            placeholder="User Name"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            returnKeyType="go"
          />
          <TouchableOpacity>
            <Button title="LOGIN" />
          </TouchableOpacity>
          <Text>Create Account</Text>
          <Text>Forgot Password?</Text>
          <Text>---------- Or Connect with ----------</Text>
          <TouchableOpacity>
            <Button title="FACEBOOK" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Button title="GOOGLE" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "60%"
  }
});
