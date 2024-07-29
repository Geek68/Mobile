import { StyleSheet } from "react-native";
import { COLOR } from "../../Outils/Constantes";
const ExitStyle = StyleSheet.create({
    ExitConteneur:{
        flex: 1, 
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-evenly",
        paddingHorizontal:60,
        backgroundColor:COLOR.white
    },
    ExitImage:{
        width: 300,
        height: 300,
    },
    ExitBoutton:{
        width: 300
    },
    ExitText1:{
        color:COLOR.sombre,
        fontSize: 25,
        textAlign:"center",
        fontWeight: "bold",
        
    },
    ExitText:{
        color:COLOR.sombre,
        fontSize: 18,
        fontWeight: "bold",
        
    }
})
export default ExitStyle