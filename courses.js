import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class componentName extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>


                    <View style={{ marginRight: '88%' }}>
                        <Icon style={{ color: '#000002', fontSize: 55 }} type='Entypo' name='menu' />
                    </View>

                    <Image
                        source={require("../Demo/Pic/courseimage.png")}
                    />

                    <View style={styles.view1sty}>
                        <View style={styles.view2sty}>
                            <Icon style={styles.checkiconsty} type='Entypo' name='chevron-with-circle-right' />
                        </View>

                        <TouchableOpacity
                            style={styles.view3sty}
                            onPress={() => Actions.Levels()}
                        >
                            <Text style={styles.text1sty}> Course-01</Text>
                        </TouchableOpacity>

                        <View style={styles.view4sty}>
                            <Text style={styles.text2sty}>
                                0
                            </Text>
                            <Icon style={styles.stariconsty} type='Entypo' name='star-outlined' />

                        </View>

                    </View>



                    <View style={styles.view1sty}>
                        <View style={styles.view2sty}>
                            <Icon style={styles.checkiconsty} type='Entypo' name='chevron-with-circle-right' />
                        </View>

                        <TouchableOpacity
                            style={styles.view3sty}
                            onPress={() => Actions.Levels()}
                        >
                            <Text style={styles.text1sty}> Course-02</Text>
                        </TouchableOpacity>

                        <View style={styles.view4sty}>
                            <Text style={styles.text2sty}>
                                0
                            </Text>
                            <Icon style={styles.stariconsty} type='Entypo' name='star-outlined' />

                        </View>
                    </View>



                    <View style={styles.view1sty}>
                        <View style={styles.view2sty}>
                            <Icon style={styles.checkiconsty} type='Entypo' name='chevron-with-circle-right' />
                        </View>

                        <TouchableOpacity
                            style={styles.view3sty}
                            onPress={() => Actions.Levels()}
                        >
                            <Text style={styles.text1sty}> Course-03</Text>
                        </TouchableOpacity>

                        <View style={styles.view4sty}>
                            <Text style={styles.text2sty}>
                                0
                            </Text>
                            <Icon style={styles.stariconsty} type='Entypo' name='star-outlined' />

                        </View>
                    </View>







                    <View style={styles.view1sty}>
                        <View style={styles.view2sty}>
                            <Icon style={styles.checkiconsty} type='Entypo' name='chevron-with-circle-right' />
                        </View>
                        <TouchableOpacity
                            style={styles.view3sty}
                            onPress={() => Actions.Levels()}
                        >
                            <Text style={styles.text1sty}> Course-04</Text>
                        </TouchableOpacity>

                        <View style={styles.view4sty}>
                            <Text style={styles.text2sty}>
                                0
                            </Text>
                            <Icon style={styles.stariconsty} type='Entypo' name='star-outlined' />

                        </View>

                    </View>



                    <View style={styles.view1sty}>
                        <View style={styles.view2sty}>
                            <Icon style={styles.checkiconsty} type='Entypo' name='chevron-with-circle-right' />
                        </View>

                        <TouchableOpacity
                            style={styles.view3sty}
                            onPress={() => Actions.Levels()}
                        >
                            <Text style={styles.text1sty}> Course-05</Text>
                        </TouchableOpacity>

                        <View style={styles.view4sty}>
                            <Text style={styles.text2sty}>
                                0
                            </Text>
                            <Icon style={styles.stariconsty} type='Entypo' name='star-outlined' />

                        </View>
                    </View>



                    <View style={styles.view1sty}>
                        <View style={styles.view2sty}>
                            <Icon style={styles.checkiconsty} type='Entypo' name='chevron-with-circle-right' />
                        </View>

                        <TouchableOpacity
                            style={styles.view3sty}
                            onPress={() => Actions.Levels()}
                        >
                            <Text style={styles.text1sty}> Course-06</Text>
                        </TouchableOpacity>

                        <View style={styles.view4sty}>
                            <Text style={styles.text2sty}>
                                0
                            </Text>
                            <Icon style={styles.stariconsty} type='Entypo' name='star-outlined' />

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
        alignItems: 'center'
    },

    textsty: {
        fontSize: 25,
        marginTop: '3%'
    },
    scoreviewsty: {
        height: 90,
        width: '39%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#000002',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
        alignSelf: 'center'

    },
    stariconsty: {
        color: '#FFD800',
        fontSize: 35,
        marginBottom: '5%'
    },
    scoretextsty: {
        color: 'white',
        marginBottom: '10%',
        fontSize: 22
    },



    view1sty: {
        flexDirection: 'row',

        marginTop: '2%',
        width: '100%',
        height: 75,

    },
    view2sty: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '23%',
        height: 60,
        backgroundColor: '#59A9C2'
    },
    view3sty: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '54%',
        height: 60,
        backgroundColor: '#114E76'
    },
    view4sty: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '23%',
        height: 60,
        backgroundColor: '#59A9C2'
    },
    checkiconsty: {
        color: '#114E76',
        fontSize: 40,
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


    view5sty: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#707070'


    },




});
