import React, { useState } from "react";
import { Modal, View, Button, Text } from "react-native";

const ModalTest = () => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Button
        title="Click me"
        onPress={() => setOpen(true)}
        color={"midnightblue"}
        // disabled
      />
      <Modal
        visible={open}
        onRequestClose={() => setOpen(false)}
        animationType="slide" //fade, slide, none:default
        presentationStyle="fullScreen" // fullscreen-default, formSheet, pageSheet-- only affects ios
      >
        <View style={{ flex: 1, backgroundColor: "lightblue" }}>
          <Text>Modal</Text>
          <Button
            title="Close"
            onPress={() => setOpen(false)}
            color={"midnightblue"}
            // disabled
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalTest;
