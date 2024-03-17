import { useState } from "react";
import { Button, View, Text } from "react-native";

const Buttons = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
      <Text>{count}</Text>
    </View>
  );
};

export default Buttons;
