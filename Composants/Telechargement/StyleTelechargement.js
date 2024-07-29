import { StyleSheet } from "react-native";
import { COLOR, PADDING,TEXT_SIZE} from "../../Outils/Constantes";
import { Title } from "react-native-paper";

const TelechargementStyle =  StyleSheet.create({
    parent:{
        backgroundColor:  COLOR.bleugris,
        paddingHorizontal:PADDING.horizental,
        paddingVertical:PADDING.vertical,
        marginHorizontal:5,
        marginVertical:5,
        width:190,
        borderRadius:10,
        flexDirection:"column",
        justifyContent: "center",
        height:"auto",
        gap:12,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
    },
    name:
    {
        fontSize: TEXT_SIZE.secondary,
        color: COLOR.sombre,
        fontWeight: '900',
    },
    Icone:{
        fontSize:40
    }
})
export default TelechargementStyle;