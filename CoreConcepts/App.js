import { View, Text } from "react-native";
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
      {/* View is similar to div but no scrollable */}
      {/* <View style={{width:200,height:200, backgroundColor:"blue"}}/>
      <View style={{width:200,height:200, backgroundColor:"lightgreen"}}/> */}
      {/* Text is similar to p */}
      {/* all texts must be inside a Text else you will run into an error */}
      <Text>
        <Text style={{ color: "white" }}>Hello</Text>
        World
      </Text>
    </View>
  );
};

export default App;
