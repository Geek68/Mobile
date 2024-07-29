import { StyleSheet } from "react-native";
import { COLOR } from "../../Outils/Constantes";

const ExitStyle = StyleSheet.create({
    ExitConteneur:{
        backgroundColor: COLOR.white,
        flex:1,
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        
    },
    ExitImage:{
        width:400,
        height:400,
    }
}) 
export default ExitStyle