import React from "react";
import { View, Alert, Button } from "react-native";

const Alerts = () => {
  return (
    <View>
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />

      <Button
        title="Alert2"
        onPress={() => Alert.alert("Invalid Data!", "DOB Incorrect")}
      />
      <Button
        title="Alert3"
        onPress={() =>
          Alert.alert("Invalid Data!", "DOB Incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "Ok", onPress: () => console.log("Ok Pressed") },
            // { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          ])
        }
      />
    </View>
  );
};

export default Alerts;
