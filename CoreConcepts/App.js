import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StyleSheet,
} from "react-native";
import Buttons from "./assets/components/Buttons";
import ModalTest from "./assets/components/ModalTest";
import Status from "./assets/components/Status";
import Indicator from "./assets/components/Indicator";
import Alerts from "./assets/components/Alerts";
import Greet from "./assets/components/Greet";
import FlatlistSample from "./assets/components/FlatlistSample";
import StylingRN from "./assets/components/StylingRN";
import RNLayout from "./assets/components/RNLayout";
const logoImg = require("./assets/adaptive-icon.png");
const App = () => {
  return (
    <View style={styles.container}>
      <RNLayout style={{ backgroundColor: "#8e9b00" }}>Box 1</RNLayout>
      <RNLayout style={{ backgroundColor: "#b65d1f" }}>Box 2</RNLayout>
      <RNLayout style={{ backgroundColor: "#1c4c56" }}>Box 3</RNLayout>
      {/* <RNLayout style={{ backgroundColor: "#ab9156" }}>Box 4</RNLayout>
      <RNLayout style={{ backgroundColor: "#6b080b" }}>Box 1</RNLayout>
      <RNLayout style={{ backgroundColor: "#b65d1f" }}>Box 2</RNLayout>
      <RNLayout style={{ backgroundColor: "#1c4c56" }}>Box 3</RNLayout>
      <RNLayout style={{ backgroundColor: "#ab9156" }}>Box 4</RNLayout> */}
    </View>
    // <StylingRN />
    // // <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
    //   {/* <ScrollView>
    //     <Button
    //       title="Click me"
    //       onPress={() => console.log("clicked")}
    //       color={"midnightblue"}
    //       // disabled
    //     />
    //     <Buttons />
    //     <Pressable onPress={() => console.log("Image Pressed")}>
    //       <Image source={logoImg} style={{ width: 200, height: 200 }} />
    //     </Pressable>
    //     <Pressable onPress={() => console.log("Text Pressed")}>
    //       <Text>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    //         mollitia, molestiae quas vel sint commodi repudiandae consequuntur
    //         voluptatum laborum numquam blanditiis harum quisquam eius sed odit
    //         fugiat iusto fuga praesentium optio, eaque rerum! Provident
    //         similique accusantium nemo autem. Veritatis obcaecati tenetur iure
    //         eius earum ut to voluptate aliquam nihil, eveniet aliquid culpa
    //         officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
    //         nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
    //         error repudiandae fuga? Ipsa laudantium molestias eos sapiente
    //         officiis modi at sunt excepturi expedita sint? Sed quibusdam
    //         recusandae alias error harum maxime adipisci amet laborum.
    //         Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
    //         a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
    //         fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
    //         magni deleniti quod quam consequuntur! Commodi minima excepturi
    //         repudiandae velit hic maxime doloremque. Quaerat provident commodi
    //         consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
    //         hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
    //         cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
    //         placeat. Voluptatem quaerat non architecto ab laudantium modi minima
    //         sunt esse temporibus sint culpa, recusandae aliquam numquam totam
    //         ratione voluptas quod exercitationem fuga. Possimus quis earum
    //         veniam quasi aliquam eligendi, placeat qui corporis!
    //       </Text>
    //     </Pressable>
    //     <Image source={logoImg} style={{ width: 200, height: 200 }} />
    //   </ScrollView> */}
    //   {/* View is similar to div but no scrollable */}
    //   {/* <View style={{width:200,height:200, backgroundColor:"blue"}}/>
    //   <View style={{width:200,height:200, backgroundColor:"lightgreen"}}/> */}
    //   {/* Text is similar to p */}
    //   {/* all texts must be inside a Text else you will run into an error */}
    //   {/* <Text>
    //     <Text style={{ color: "white" }}>Hello</Text>
    //     World
    //   </Text> */}

    //   {/*
    //   <Image
    //     source={{
    //       uri: "https://picsum.photos/id/1/200/300",
    //     }}
    //     style={{ width: 200, height: 200 }}
    //   /> */}
    //   {/* For adding Background */}
    //   {/* <ImageBackground style={{flex:1}} source={logoImg}>
    //     <Text>Image Text</Text>
    //   </ImageBackground> */}
    //   {/* <ModalTest /> */}
    //   {/* <Status /> */}
    //   {/* <Indicator /> */}
    //   {/* <Alerts /> */}
    //   {/* <Greet greet={"Evans"} />
    //   <Greet greet={"Batman "} /> */}
    //   {/* <FlatlistSample /> */}

    // // </View>
  );
};
styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 60,
    borderWidth: 5,
    borderColor: "red",
  },
});

export default App;
