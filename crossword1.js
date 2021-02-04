import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class componentName extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.view1sty}>
                    <View style={styles.view2sty}>
                        <TouchableOpacity
                            onPress={() => Actions.Levels()}>
                            <Icon style={styles.lefticonsty} type='Entypo' name='chevron-thin-left' />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.view3sty}>
                        <Text style={styles.text1sty}>الكلمات المتقاطعة</Text>
                    </View>
                    <View style={styles.view4sty}>
                        <Text style={styles.text2sty}>
                            1
                            </Text>
                        <Icon style={styles.stariconsty} type='Entypo' name='star' />
                    </View>
                </View>



                <View style={styles.quizmainviewsty}>
                    <View style={{ marginLeft: '63%' }}>
                        <View style={styles.input1view}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                    </View>




                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '1%' }}>
                        <View style={styles.inputview}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View style={styles.inputview}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View style={styles.inputview}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View style={styles.inputview}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View style={styles.inputview}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View style={styles.inputview}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View style={styles.inputview}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View style={styles.inputview}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                    </View>



                    <View style={{ marginLeft: '63%' }}>
                        <View style={styles.input1view}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                    </View>



                    <View style={{
                        flexDirection: 'row',
                        width: '35%',
                        justifyContent: 'space-between',
                        //backgroundColor: 'green',
                        marginLeft: '52%'
                    }}>
                        <View style={styles.input2view}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View style={styles.input2view}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: '35%',
                        justifyContent: 'space-between',
                        //backgroundColor: 'green',
                        marginLeft: '52%'
                    }}>
                        <View style={styles.input2view}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                        <View style={styles.input2view}>
                            <Input placeholder='' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 20 }}
                            />
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}
let styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#AED0EE',
        alignItems: 'center'
    },



    stariconsty: {
        color: '#FFD800',
        fontSize: 35,
        marginBottom: '5%'
    },



    view1sty: {
        flexDirection: 'row',
        width: '100%',
        height: 75,

    },
    view2sty: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '23%',
        height: 75,
        backgroundColor: '#59A9C2'
    },
    view3sty: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '54%',
        height: 75,
        backgroundColor: '#114E76'
    },
    view4sty: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '23%',
        height: 75,
        backgroundColor: '#59A9C2'
    },
    lefticonsty: {
        color: '#007A3D',
        fontSize: 50,
        color: '#FFD800',
        marginBottom: '5%'
    },
    text1sty: {
        fontSize: 25,
        color: 'white'
    },
    text2sty: {
        fontSize: 25,
        color: 'white'
    },
    inputview: {
        flexDirection: 'row',
        height: 45,
        width: '11%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: '3%',
        alignSelf: 'center'
    },
    input1view: {
        flexDirection: 'row',
        height: 45,
        width: '30%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        alignSelf: 'center'
    },
    input2view: {
        flexDirection: 'row',
        height: 45,
        width: '33%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        alignSelf: 'center'
    },
    input3view: {
        flexDirection: 'row',
        height: 45,
        width: '22%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: '3%',
        alignSelf: 'center'
    },

    quizmainviewsty: {
        marginTop: '10%',
        width: '90%',
        height: '70%',
        backgroundColor: 'red'
    },
});
