import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
      {/* View is similar to div but no scrollable */}
      {/* <View style={{width:200,height:200, backgroundColor:"blue"}}/>
      <View style={{width:200,height:200, backgroundColor:"lightgreen"}}/> */}
      {/* Text is similar to p */}
      {/* all texts must be inside a Text else you will run into an error */}
      {/* <Text>
        <Text style={{ color: "white" }}>Hello</Text>
        World
      </Text> */}

      {/* <Image source={logoImg} style={{ width: 200, height: 200 }} />
      <Image
        source={{
          uri: "https://picsum.photos/id/1/200/300",
        }}
        style={{ width: 200, height: 200 }}
      /> */}
      <ImageBackground style={{flex:1}} source={logoImg}>
        <Text>Image Text</Text>
      </ImageBackground>
    </View>
  );
};

export default App;
