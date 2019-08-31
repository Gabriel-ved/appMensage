import React from 'react';
import {View,Text,Image,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import logo from '../../assets/simpleIcon.png'
export default function LRpage() {
  return (
    <View style={styles.container}>
        <View style={styles.logocontainer}>
            <Image style={styles.logo} source={logo}/>
        </View>
        <View style={styles.containerform}>
            <View style={styles.form}>
                <View style={styles.formInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Number:"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholder="Password:"
                    />
                </View>
                
                <View style={styles.btnGrup}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}>sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}>sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.textBtn}>Forgot password?</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    logocontainer:{
        justifyContent: 'center',
        alignContent: 'center',
        flex: 2
    },
    logo:{
      padding: 2,  
    },
    containerform:{
        flex:2
    },
    footer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        flex: 1,
        backgroundColor: '#8C53A0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn:{
        color: '#fff',
    },
    form:{
        width: 295,
        height: 270,
        justifyContent:'space-between'
    },
    formInput:{
        justifyContent: 'space-around',
        height: 160,
    },
    input:{
        alignSelf:'stretch',
        height:45,
        backgroundColor:'#fff',
        borderColor:'#fff',
        borderRadius:22.5,
        paddingHorizontal: 20
    },
    btnGrup:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btn:{
        width: 125,
        height:45,
        alignItems: 'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})
