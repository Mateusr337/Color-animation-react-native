import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [animate] = useState(new Animated.Value(0));

  const boxInterpolation = animate.interpolate({
    inputRange: [0, 1],
    outputRange: ["#fff", "#000"],
  });

  const textInterpolate = animate.interpolate({
    inputRange: [0, 1],
    outputRange: ["#000", "#fff"],
  });

  const startAnimate = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animate, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Button title="click" onPress={startAnimate} />
      <Animated.View style={{ backgroundColor: boxInterpolation }}>
        <Animated.Text style={{ color: textInterpolate }}>
          Open up App.tsx to start working on your app!
        </Animated.Text>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
