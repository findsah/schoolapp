import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
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
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.imagesty}
                        source={require("../Demo/Pic/Background.png")}>

                    </ImageBackground>
                    <View style={styles.view1sty}>
                        <Text style={styles.text1sty}>الاسم</Text>
                        <View style={styles.inputview}>
                            <Input placeholder=' الاسم' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 28 }}
                            />
                        </View>

                        <Text style={styles.text1sty}> الرقم المدنى</Text>
                        <View style={styles.inputview}>
                            <Input placeholder='الرقم المدنى' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 28 }}
                            />
                        </View>

                        <Text style={styles.text1sty}>الصف</Text>
                        <View style={styles.inputview}>
                            <Input placeholder='الصف' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 28 }}
                            />
                        </View>

                        <Text style={styles.text1sty}> كلمة المرور</Text>
                        <View style={styles.inputview}>
                            <Input placeholder='كلمة المرور' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 28 }}
                            />
                        </View>

                        <TouchableOpacity style={styles.loginbuttonsty}
                            onPress={() => Actions.Dashbord()}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>تسجيل</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'white', marginTop: '7%', fontStyle: 'normal', fontWeight: 'bold', fontSize: 28, }}>
                            لديك حساب
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={[{ backgroundColor: '#007A3D', alignItems: 'center', justifyContent: 'center', height: 45, width: "30%", marginBottom: 20, borderRadius: 8, marginTop: '5%' }]}
                        onPress={() => Actions.Login()}
                    >
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 22 }}>تسجيل دخول</Text>
                    </TouchableOpacity>



                </View>
            </ScrollView >

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
        marginTop: '15%',
    },

    inputview: {
        height: 53,
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
        fontSize: 22,
        alignSelf: 'flex-end',
        color: '#FFFFFF',
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
        height: 45,

    },


});
