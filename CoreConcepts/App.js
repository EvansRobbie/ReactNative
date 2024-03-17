import {View} from "react-native"
const App = () =>{
  return(
    <View style={{flex:1, backgroundColor:"red"}}>
      {/* View is similar to div but no scrollable */}
      <View style={{width:200,height:200, backgroundColor:"blue"}}/>
      <View style={{width:200,height:200, backgroundColor:"lightgreen"}}/>
    </View>
  )
}

export default App
