import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class componentName extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.view1sty}>
                        <View style={styles.view2sty}>
                            <TouchableOpacity
                                onPress={() => Actions.Levels()}>
                                <Icon style={styles.lefticonsty} type='Entypo' name='chevron-thin-left' />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.view3sty}>
                            <Text style={styles.text1sty}>السوال</Text>
                        </View>
                        <View style={styles.view4sty}>
                            <Text style={styles.text2sty}>
                                1
                            </Text>
                            <Icon style={styles.stariconsty} type='Entypo' name='star' />
                        </View>
                    </View>

                    <Image
                        source={require('./Pic/crossword3image.png')}
                        style={styles.imagesty}

                    />

                    <View style={styles.inputview}>
                        <Input placeholder='نص السوال' placeholderTextColor='#FFFFFF'
                            style={{ fontSize: 35 }}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        // backgroundColor: 'green',
                        width: '80%',
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10%'
                    }}>
                        <View style={styles.inputrowview}>
                            <Input placeholder='خيارـ١ ' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 25 }}
                            />
                        </View>
                        <View style={styles.inputrowview}>
                            <Input placeholder='خيارـ٢ ' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 25 }}
                            />
                        </View>
                    </View>



                    <View style={{
                        flexDirection: 'row',
                        // backgroundColor: 'green',
                        width: '80%',
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10%',
                        marginBottom: '10%'
                    }}>
                        <View style={styles.inputrowview}>
                            <Input placeholder='خيارـ٣ ' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 25 }}
                            />
                        </View>
                        <View style={styles.inputrowview}>
                            <Input placeholder='خيارـ٣ ' placeholderTextColor='#FFFFFF'
                                style={{ fontSize: 25 }}
                            />
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
        fontSize: 35,
        color: 'white',
        textAlign: 'center'
    },
    text2sty: {
        fontSize: 25
    },
    imagesty: {
        marginTop: '5%',
    },
    inputview: {
        height: 70,
        width: '90%',
        borderWidth: .6,
        borderRadius: 15,
        borderColor: '#707070',
        backgroundColor: '#59A9C2',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        alignSelf: 'center'
    },
    inputrowview: {
        height: 70,
        width: '30%',
        borderWidth: .6,
        borderRadius: 10,
        borderColor: '#707070',
        backgroundColor: '#59A9C2',
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: '10%',
        alignSelf: 'center'
    },
});
