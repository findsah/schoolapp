import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
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
                    <Image
                        style={styles.image1sty}
                        source={require("../Demo/Pic/homepageimage.png")}
                    />
                    <ImageBackground style={styles.imagesty}
                        source={require("../Demo/Pic/Background.png")}>

                    </ImageBackground>
                    <View style={styles.view1sty}>

                        <TouchableOpacity
                            style={styles.inputview}
                            onPress={() => Actions.Login()}
                        >
                            <Text style={styles.textsty}>الدخول</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.inputview}
                            onPress={() => Actions.Register()}
                        >
                            <Text style={styles.textsty}>تسجيل جديد </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.inputview}
                            onPress={() => Actions.Aboutus()}
                        >
                            <Text style={styles.textsty}>عن المدرسة</Text>
                        </TouchableOpacity>
                    </View>





                </View>
            </ScrollView>

        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#AED0EE'
    },
    image1sty: {

        marginTop: '10%',
    },
    textsty: {
        color: '#FFFFFF',
        fontSize: 30
    },

    imagesty: {
        width: 100,
        height: 230,
        marginTop: '10%',
    },

    inputview: {
        height: 70,
        width: '100%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#59A9C2',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        alignSelf: 'center',

    },
    view1sty: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '10%'
    },




});
