import { View,Text,Image,Button,BackHandler} from "react-native"
import ExitStyle from "./Exit"
const ExitPage = ()=>
{
 return(
 <View style={ExitStyle.ExitConteneur}>
    <View style={{display:"flex",flexDirection:"column",alignItems:"center",gap:100}}>
      <Image source={require('../../Images/exit.png')} style={ExitStyle.ExitImage}/>
      <View style={{display:"flex",flexDirection:"column",gap:20}}>
        <Text style={ExitStyle.ExitText1}>Mercie !!!</Text>
        <Text style={ExitStyle.ExitText}>Etês-vous sûr de vouloir quitter ?</Text>
      </View>
    </View>
   <Button title="QUITTER" style={ExitStyle.ExitBoutton} onPress={()=>{BackHandler.exitApp()}}/>
 </View>)
}
export default ExitPage