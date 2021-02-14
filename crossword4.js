import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
const HEIGHT = Dimensions.get('screen').height / 3;

export default class componentName extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ height: '100%', flex: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.view1sty}>
                            <View style={styles.view2sty}>
                                <TouchableOpacity
                                    onPress={() => Actions.Levels()}>
                                    <Icon style={styles.lefticonsty} type='Entypo' name='chevron-thin-left' />
                                </TouchableOpacity>

                            </View>
                            <View style={styles.view3sty}>
                                <Text style={styles.text1sty}>  الكلمات المتقاطعة</Text>
                            </View>
                            <View style={styles.view4sty}>
                                <Text style={styles.text2sty}> 1 </Text>
                                <Icon style={styles.stariconsty} type='Entypo' name='star' />
                            </View>
                        </View>
                    </View>


                    <View style={styles.container}>
                        <Image
                            source={require("./Pic/crossword3image.png")}
                            style={{ marginTop: '25%', width: '36%', height: '22%' }}
                        />
                        <View style={styles.maincardviewsty}>
                            <View style={styles.headerviewsty}>
                                <Text style={styles.text1sty}>أكمل...</Text>
                            </View>







                            <View style={styles.cardtextviewsty}>
                                <View style={{ width: '25%' }}>
                                    <Text style={styles.text1sty}>
                                        ____
                            </Text>
                                </View>
                                <View style={{ width: '84%', justifyContent: 'center' }}>
                                    <Text style={styles.text1sty}>
                                        أطلب العلم ولوفي
                            </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.cardfooterviewsty}>
                                <Text style={styles.text1sty}>
                                    إحذف حرف
                        </Text>
                                <Icon type='Octicons' name='diff-removed'
                                    style={{ color: 'white', marginLeft: '3%', }}
                                />
                            </TouchableOpacity>
                        </View>


                        <View style={styles.textboxviewsty}>
                            <View style={styles.inputview}>

                            </View>
                            <View style={styles.inputview}>

                            </View>
                            <View style={styles.inputview}>

                            </View>
                            <View style={styles.inputview}>
                                <Text style={styles.text1sty}>ح</Text>
                            </View>
                            <View style={styles.inputview}>

                            </View>
                        </View>


                        <View style={{ height: '40%' }}>

                            <View style={styles.textbox1viewsty}>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>
                            </View>


                            <View style={[styles.textbox1viewsty]}>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>
                                <View style={styles.input1view}>

                                </View>

                            </View>

                        </View>

                    </View>
                </View>
            </ScrollView>

        );
    }
}
let styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#AED0EE',
        alignItems: 'center',
        justifyContent: 'center'
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
        fontSize: 28,
        color: 'white',
        fontFamily: 'bold',
        textAlign: 'center'
    },
    text2sty: {
        fontSize: 25
    },
    inputview: {
        flexDirection: 'row',
        height: 49,
        width: '19%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#114E76',
        justifyContent: 'center',
        alignItems: 'center',

    },
    maincardviewsty: {
        backgroundColor: '#114E76',
        width: '80%',

        height: 380,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: '5%'
    },
    headerviewsty: {
        backgroundColor: '#59A9C2',
        padding: 10,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    cardtextviewsty: {
        flexDirection: 'row',
        width: '80%',
        padding: 20,
        marginTop: '25%'
    },
    cardfooterviewsty: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#59A9C2',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        width: '100%',
        padding: 10,
        position: 'absolute',
        bottom: 0
    },
    textboxviewsty: {
        flexDirection: 'row',
        width: '70%',
        padding: 10,
        justifyContent: 'space-between',

    },
    textbox1viewsty: {

        flexDirection: 'row',
        width: '98%',
        padding: 10,
        justifyContent: 'space-between',

    },
    input1view: {
        flexDirection: 'row',
        height: 49,
        width: '15%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',

    },
});
