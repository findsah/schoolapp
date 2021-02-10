import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            civilid: '',
            password: '',
            userdata: '',
            loader: false,

        }
    }

    handelcivilid = (text) => {
        this.setState({ civilid: text })
        //console.log('civilid', this.state.civilid);
    }
    handelpassword = (text) => {
        this.setState({ password: text })

    }



    login = async () => {
        if (this.state.civilid === '' || this.state.password === '') {
            alert('Please Enter required field');

        }

        else {
            console.log('Success')


            // return
            let formdata = new FormData()
            formdata.append('civil_id', this.state.civilid)
            formdata.append('password', this.state.password)

            console.log('formdata', formdata);
            //return
            this.setState({

                loader: true
            })
            await fetch('https://crossword-app-backend.herokuapp.com/user/login/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',

                },
                body: formdata
            }).then((response) => response.json())
                // console.log(response)

                .then((data) => {
                    console.log('Data', data)
                    const token = data.token;

                    // console.log('ID==========', data.user_id)

                    AsyncStorage.setItem('userid', JSON.stringify(data.user_id))
                    this.setState({
                        userdata: data,
                        loader: false
                    })
                    Actions.Dashbord()
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
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
                <ImageBackground style={styles.imagesty}
                    source={require("../Demo/Pic/Background.png")}>

                </ImageBackground>
                <View style={styles.view1sty}>
                    <Text style={styles.text1sty}>الرقم المدني</Text>
                    <View style={styles.inputview}>
                        <Input placeholder='أدخل الرقم المدني' placeholderTextColor='#FFFFFF'
                            onChangeText={(text) => this.handelcivilid(text)}
                            style={{ fontSize: 25 }}
                        />
                    </View>

                    <Text style={styles.text1sty}>كلمة المرور</Text>
                    <View style={styles.inputview}>
                        <Input placeholder='كلمة المرور' placeholderTextColor='#FFFFFF'
                            onChangeText={(text) => this.handelpassword(text)}
                            style={{ fontSize: 25 }}
                        />
                    </View>


                    <TouchableOpacity style={styles.loginbuttonsty}
                        onPress={() => this.login()}

                    >
                        {!this.state.loader ? <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>
                            تسجيل دخول
                        </Text>
                            :
                            <ActivityIndicator size="large" color="#fff" />
                        }


                    </TouchableOpacity>



                </View>


                <TouchableOpacity style={[styles.loginbuttonsty, { backgroundColor: '#007A3D', height: 40, width: "40%" }]}
                    onPress={() => Actions.Register()}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 22 }}>تسجيل جديد</Text>
                </TouchableOpacity>



            </ScrollView>

        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
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
