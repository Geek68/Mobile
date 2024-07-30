import {  StyleSheet } from "react-native";
import { COLOR, PADDING, TEXT_SIZE } from "../../Outils/Constantes";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

  const  HomeStyle = StyleSheet.create({
    header : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.white,
        paddingHorizontal:PADDING.horizental,
        paddingVertical:PADDING.vertical,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25,
        borderSize:5,
        borderColor:COLOR.sombre
    },
    logo:{
        flexDirection:'row',
        alignItems: 'center',
        gap:8   
    },
    Title: 
    {
        fontSize: TEXT_SIZE.title,
        fontWeight:'bold',
        color:COLOR.sombre,
        fontFamily:"Lucida Grande",
    },
    Image :{
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius:20,
        marginLeft:10
    },
    BjrConteneur:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal:PADDING.horizental,
        paddingVertical:10,
        borderWidth:2,
        borderColor:COLOR.sombre,
        borderRadius:20,
    },
    scroll:{
         flexDirection: 'row', 
         flexWrap: 'wrap',
    },
    flatList:{
        white:"auto",
        height:530,
    }
  })
  export default HomeStyle;