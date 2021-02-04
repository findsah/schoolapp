import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imagesty}
                    source={require("../Demo/Pic/Background.png")}>

                </ImageBackground>
                <View style={styles.view1sty}>
                    <Text style={styles.text1sty}>الرقم المدني</Text>
                    <View style={styles.inputview}>
                        <Input placeholder='أدخل الرقم المدني' placeholderTextColor='#FFFFFF'
                            style={{ fontSize: 25 }}
                        />
                    </View>

                    <Text style={styles.text1sty}>كلمة المرور</Text>
                    <View style={styles.inputview}>
                        <Input placeholder='كلمة المرور' placeholderTextColor='#FFFFFF'
                            style={{ fontSize: 25 }}
                        />
                    </View>

                    <TouchableOpacity style={styles.loginbuttonsty}
                        onPress={() => Actions.Dashbord()}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>
                            تسجيل دخول
                        </Text>
                    </TouchableOpacity>



                </View>


                <TouchableOpacity style={[styles.loginbuttonsty, { position: 'absolute', bottom: '2%', backgroundColor: '#007A3D', height: 20, width: "40%" }]}
                    onPress={() => Actions.Register()}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 22 }}>تسجيل جديد</Text>
                </TouchableOpacity>



            </View>

        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#AED0EE'
    },

    imagesty: {
        width: 100,
        height: 230,
        marginTop: '20%',
    },

    inputview: {
        height: 50,
        width: '100%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#59A9C2',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        alignSelf: 'center'
    },
    text1sty: {

        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 25,
        alignSelf: 'flex-end',
        marginTop: '3%',

    },
    view1sty: {
        width: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 13,
    },

    loginbuttonsty:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#366890',
        marginTop: '8%',
        borderRadius: 8,
        borderColor: '#707070',
        width: '60%',
        height: 40,

    },


});
