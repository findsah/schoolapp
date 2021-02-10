import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            civilid: '',
            class: '',
            password: '',
            userdata: '',

        }
    }
    handelname = (v) => {
        this.setState({ name: v })
        //console.log('name', this.state.name);
    }
    handelcivilid = (text) => {
        this.setState({ civilid: text })

    }
    handelclass = (text) => {
        this.setState({ class: text })

    }
    handelpassword = (text) => {
        this.setState({ password: text })

    }



    Register = () => {
        if (this.state.name === '' || this.state.class === '' || this.state.civilid === '' || this.state.Password === '') {
            alert('Please Enter required field');

        }

        else {
            console.log('Success')



            let formdata = new FormData()
            formdata.append('name', this.state.name)
            formdata.append('s_class', this.state.class)
            formdata.append('civil_id', this.state.civilid)
            formdata.append('password', this.state.password)

            //console.log('formdata', formdata);



            fetch('https://crossword-app-backend.herokuapp.com/user/register/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',

                },
                body: formdata
            }).then((response) => response.json())
                // console.log(response)

                .then((data) => {
                    console.log('Data', data)
                    //const token = data.token;
                    this.setState({
                        userdata: data
                    })
                    Actions.Login()
                    return
                    if (responsejosn.status) {
                        this.setState({ stsAuthToken: responsejosn.token })


                        AsyncStorage.setItem('authToken', JSON.stringify(token))
                        Actions.Dashbord()

                        console.log(responsejosn.token)

                        console.log('response send', responsejosn)
                    }
                    else {
                        alert(responsejosn.message)


                    }
                    if (responsejosn) {
                        this.setState({ stsAuthToken: responsejosn.success.token })
                        AsyncStorage.setItem('authToken', JSON.stringify(token))
                        console.log(responsejosn.token)
                    }
                    else {
                        Alert.alert(
                            "Please enter the valid Id & Password ")
                    }
                    console.log(responsejosn)

                })
            console.log('Login Entered email and password', this.state.stcivilid, ' ', this.state.stPassword, this.state.stname, ' ', this.state.stclass, ' ')

        }
    };
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
                                onChangeText={(v) => this.handelname(v)}
                            />
                        </View>

                        <Text style={styles.text1sty}> الرقم المدنى</Text>
                        <View style={styles.inputview}>
                            <Input placeholder='الرقم المدنى' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 28 }}
                                onChangeText={(v) => this.handelcivilid(v)}
                            />
                        </View>

                        <Text style={styles.text1sty}>الصف</Text>
                        <View style={styles.inputview}>
                            <Input placeholder='الصف' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 28 }}
                                onChangeText={(v) => this.handelclass(v)}
                            />
                        </View>

                        <Text style={styles.text1sty}> كلمة المرور</Text>
                        <View style={styles.inputview}>
                            <Input placeholder='كلمة المرور' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 28 }}
                                onChangeText={(v) => this.handelpassword(v)}
                            />
                        </View>

                        <TouchableOpacity style={styles.loginbuttonsty}
                            onPress={() => this.Register()}

                        >
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>تسجيل</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'white', marginTop: '7%', fontStyle: 'normal', fontWeight: 'bold', fontSize: 28, }}>
                            لديك حساب
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={[{ backgroundColor: '#007A3D', alignItems: 'center', justifyContent: 'center', height: 45, width: "30%", marginBottom: 20, borderRadius: 8, marginTop: '5%' }]}
                    //onPress={() => Actions.Login()}
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

        height: 55,
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
        width: '65%',
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
