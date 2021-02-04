import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class componentName extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.view1sty}>
                    <TouchableOpacity
                        onPress={() => Actions.courses()}
                        style={styles.view2sty}>
                        <Icon style={styles.lefticonsty} type='Entypo' name='chevron-thin-left' />
                    </TouchableOpacity>

                    <View style={styles.view3sty}>
                        <Text style={styles.text1sty}>المراحل</Text>
                    </View>
                    <View style={styles.view4sty}>
                        <Text style={styles.text2sty}>
                            1
                            </Text>
                        <Icon style={styles.stariconsty} type='Entypo' name='star' />
                    </View>
                </View>

                <View style={styles.mainimageviewsty}>
                    <TouchableOpacity
                        onPress={() => Actions.crossword1()}
                        style={styles.image1viewsty}>
                        <Image
                            source={require("../Demo/Pic/level1.png")}
                        //resizeMode='cover'

                        />
                    </TouchableOpacity>
                    <View style={styles.image1viewsty}>
                        <TouchableOpacity
                            onPress={() => Actions.crossword3()}
                        >
                            <Image
                                source={require("../Demo/Pic/level2.png")}
                                blurRadius={1}
                            />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        onPress={() => Actions.crossword4()}
                        style={styles.image1viewsty}>
                        <Image
                            source={require("../Demo/Pic/level3.png")}
                            blurRadius={1}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.mainimage2viewsty}>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("../Demo/Pic/level4.png")}
                            blurRadius={1}
                        />
                    </View>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("../Demo/Pic/level5.png")}
                            blurRadius={1}
                        />
                    </View>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("../Demo/Pic/level6.png")}
                            blurRadius={1}
                        />
                    </View>
                </View>



                <View style={styles.mainimage2viewsty}>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("../Demo/Pic/level7.png")}
                            blurRadius={1}
                        />
                    </View>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("../Demo/Pic/level8.png")}
                            blurRadius={1}
                        />
                    </View>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("../Demo/Pic/level9.png")}
                            blurRadius={1}
                        />
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
        fontSize: 25
    },
    mainimageviewsty: {
        flexDirection: 'row',
        marginTop: '18%',
        //backgroundColor: 'red',
        width: '75%',
        height: 110,
    },
    image1viewsty: {
        width: '33.3%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110
    },
    mainimage2viewsty: {
        flexDirection: 'row',
        marginTop: '5%',
        //backgroundColor: 'green',
        width: '75%',
        height: 110,
    },
    imagesty: {

    }








});
