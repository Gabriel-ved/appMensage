import React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

export default function LRpage() {
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Text>Logo</Text>
        </View>
        <View style={styles.containerform}>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Name:" />
                <TextInput style={styles.input} placeholder="Password:"/>
                <View style={styles.btnGrup}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.footer}>
            <Text>Forgot password?</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3
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
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form:{
        width: 295,
        height: 164,
        justifyContent:'space-between'
    },
    input:{
        alignSelf:'stretch',
        height:40,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#c4c4c4',
        borderRadius:20,
        paddingHorizontal: 10
    },
    btnGrup:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btn:{
        width: 120,
        height:40,
        alignItems: 'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#c4c4c4',
        borderRadius:10,
    }
})
