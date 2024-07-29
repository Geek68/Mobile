import { StyleSheet } from "react-native";
import { COLOR, TEXT_SIZE } from "../../Outils/Constantes";

const FileTelechargeStyle = StyleSheet.create({
    fileConteneur:{
        backgroundColor: COLOR.bleugris,
        flexDirection:'row',
        gap:15,
        alignItems: 'center',
        width: 'auto',
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:15,
        marginHorizontal:10
    },
    fileTitle:{
        fontSize: TEXT_SIZE.secondary,
        color: COLOR.sombre,
        fontWeight: 'bold',
    },
    fileIcone:{
        fontSize: 35
    },
    BtnOpen:{
        borderWidth:1.5,
        width:60,
        borderColor:COLOR.sombre,
        paddingVertical:3,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5
    }
})
export default FileTelechargeStyle;