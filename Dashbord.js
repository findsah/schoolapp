import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity, _Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [
                { id: 1, name: 'Arabic' },
                { id: 2, name: 'English' },
                { id: 3, name: 'Math' },
                { id: 4, name: 'Genral' },
                { id: 5, name: 'Arabic' },

            ]
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>


                    <View style={{ marginRight: '88%' }}>
                        <Icon style={{ color: '#000002', fontSize: 55 }} type='Entypo' name='menu' />
                    </View>

                    <Image
                        source={require("../Demo/Pic/Dashbordimage.png")}
                    />


                    <View style={styles.inputviewsty}>
                        <TouchableOpacity
                            style={styles.inputview}
                            onPress={() => Actions.courses()}
                        >
                            <Text style={styles.textsty}>اكمل اللعبة</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.inputview}
                            onPress={() => Actions.Pointstable()}
                        >
                            <Text style={styles.textsty}>ملف المتعلم</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.inputview}

                        >
                            <Text style={styles.textsty}> المتعلمون الاوائل</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imagesty}>
                        <Image

                            source={require("../Demo/Pic/Dashbordimage2.png")}

                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.textsty}>الوليد</Text>
                            <Text style={styles.textsty}>السالم</Text>
                            <Text style={styles.textsty}>الخالد</Text>
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

    inputviewsty: {
        width: '55%',
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
        marginTop: '10%',
        alignSelf: 'center'
    },
    textsty: {
        color: '#FFFFFF',
        fontSize: 30
    },
    imagesty: {
        marginTop: '10%',
        paddingBottom: 30


    }



});
