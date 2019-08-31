import React from 'react';
import {View,Text,StatusBar,TextInput,TouchableOpacity,Image,FlatList,StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import img from '../../assets/a1.jpg';

export default function app(){
    return (
      <View style={styles.container}>
          <StatusBar hidden={true}/>
          <View style={styles.chatBox}>
            <FlatList
                data={[
                    {id:1,
                    msg:{
                        author:'Gabriel',
                        mensage:'Texto grande, teste teste 3teste teste teste teste 2 teste teste 4'
                    }},{
                    id:2,
                    msg:{
                        author:'Gabriel',
                        mensage:'Texto pequeno'
                    }},{
                    id:3,
                    msg:{
                        author:'a',
                        mensage:'eu'
                    }}

                ]}
                style={styles.chat}
                keyExtractor={item => String(item.id)}
                renderItem={({item})=>(
                   (item.msg.author === 'a')
                    ? 
                    <View style={styles.outChat}>
                        <Text style={styles.text}>{item.msg.mensage}</Text>
                    </View>
                    :
                    <View style={styles.inChat}>
                        <Text style={styles.text}>{item.msg.mensage}</Text>
                    </View>
                )}/>
            <View style={styles.OverProfile}>
                <Image style={styles.img} source={img} />
                <Text style={styles.profileName}>Nome</Text>
            </View>
          </View>

        <View style={styles.formChat}>
            <View style={styles.containerInput}>
                <TextInput maxLength={80} placeholder="Digite aqui..." style={styles.inputChat}/>
            </View>
            
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btnChat}>
                <Entypo name="dots-three-horizontal" size={40} color="#fff" />
                </TouchableOpacity>
            </View>

        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#B951E8'
    },
    chatBox:{
        flex:7,
        alignItems:'center'
    },
    formChat:{
        flex:1,
        flexDirection:'row',
        backgroundColor: 'rgba(196,196,196,0.5)',
        borderTopColor:"#000",
        borderTopWidth:1
    },
    text:{
        fontSize: 17,
        padding:3,
        lineHeight:22
    },
    containerBtn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    btnChat:{
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        backgroundColor:"#A666FF",
        borderRadius:25
    },
    inputChat:{
        height:50,
        borderRadius:25,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        fontSize:16
    },
    containerInput:{
        flex:4,
        justifyContent:'center',
        alignItems:'stretch',
        paddingLeft: 20
    },
    OverProfile:{
        position:'absolute',
        backgroundColor:'#6751E8',
        width:380,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    img:{
        width:50,
        height:50,
        borderRadius:25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    profileName:{
        color:'#fff',
        fontSize:18,
        paddingLeft:20
    },
    chat:{
        alignSelf:'stretch',
        flexDirection:'column-reverse',
        paddingHorizontal:15,
        paddingBottom:5
    },
    inChat:{
        alignSelf:'flex-start',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical:5,
        maxWidth: 340,
        paddingHorizontal: 7,
        flexWrap:'wrap'
    },
    outChat:{
        alignSelf:'flex-end',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical:5,
        paddingHorizontal: 7,
        maxWidth: 340,
        flexWrap:'wrap'
    }
})
