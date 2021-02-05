import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stcivilid: '',
            stPassword: '',
            stsAuthToken: '',
            stsIsLoading: false,
            isLoading: false,
        }
    }
    handlecivilid = (text) => {
        this.setState({ stcivilid: text })
    }
    handlePassword = (text) => {
        this.setState({ stPassword: text })
    }

    manageLoading = (value) => {
        setState({ isLoading: value })
    }

    componentDidMount = () => {
        this.getData();
    };

    getData = () => {
        AsyncStorage.getItem('authToken', (error, token) => {
            console.log(token)

        });
    };

    login = () => {


        if (this.state.stcivilid === '' || this.state.stPassword === '') {

            alert('Please Enter Email and Password');
        }
        else {
            console.log('request send')
            let formdata = new FormData()
            formdata.append('civilid', this.state.stcivilid)
            formdata.append('password', this.state.stPassword)
            formdata.append('request', 'login')
            fetch('https://crossword-app-backend.herokuapp.com/user/login/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Key': 'c05bd74d95bc5f024625eea3be19540c'
                },
                body: formdata
            })
                .then((response) => response.json())

                .then((responsejosn) => {
                    console.log(responsejosn)
                    const token = responsejosn.token;
                    if (responsejosn.status) {
                        this.setState({ stsAuthToken: responsejosn.token })


                        AsyncStorage.setItem('authToken', JSON.stringify(token))
                        console.log(responsejosn.token)

                        console.log('response send')
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

            console.log('Login Entered email and password', this.state.stcivilid, ' ', this.state.stPassword)
            //this.props.navigation.navigate('Home')
            // onPress={() => this.props.navigation.navigate('Drawer')}
        }
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
                            onChangeText={(text) => this.handlecivilid(text)}
                            style={{ fontSize: 25 }}
                        />
                    </View>

                    <Text style={styles.text1sty}>كلمة المرور</Text>
                    <View style={styles.inputview}>
                        <Input placeholder='كلمة المرور' placeholderTextColor='#FFFFFF'
                            onChangeText={(text) => this.handlePassword(text)}
                            style={{ fontSize: 25 }}
                        />
                    </View>

                    <TouchableOpacity style={styles.loginbuttonsty}
                        onPress={() => this.login()}

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
