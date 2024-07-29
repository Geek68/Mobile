import { StyleSheet } from "react-native";
import { COLOR,PADDING,TEXT_SIZE } from "../../Outils/Constantes";

const FormulaireStyle = StyleSheet.create({
    header:{
        width: '100%',
        height: 150,
        backgroundColor:COLOR.grey,
       borderBottomRightRadius:20,
      

    },
    ImageBahground:
    {
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:"flex-start",
        width:"100%",height:"100%",
    },
    logo:
    {
        flexDirection:'row',
        alignItems: 'center',
        gap:8   
    },
    headerTitle:
    {
        fontSize:15,
        fontWeight:'bold',
        color:COLOR.white,
        fontFamily:"Lucida Grande",
    },
    champsInputs:
    {
        backgroundColor:COLOR.white,
        borderRadius:20,
        color:COLOR.sombre,
        fontSize:17,
        paddingHorizontal:30,
        borderColor:COLOR.sombre,
        borderWidth:1,
        borderStyle:'solid',
        height:50
    },
    label:{
        fontSize:15,
        fontWeight:'bold',
        color:COLOR.sombre,
        fontFamily:"Lucida Grande",
    },
    styleTextDropdown:
    {
        color:COLOR.sombre,
        fontSize:17,
    },
    styleBoutton:{
        color : COLOR.white,
        backgroundColor: COLOR.sombre,
        fontSize:20,
    },
    styleBoutton : 
    {
        backgroundColor:COLOR.white,
        borderRadius:20,
        color:COLOR.sombre,
        fontSize:17,
        borderColor:COLOR.sombre,
        borderWidth:1,
        borderStyle:'solid',
        height:50,
        display: 'flex',
        paddingHorizontal:10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default FormulaireStyle