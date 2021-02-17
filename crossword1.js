import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
const baseUrl = 'https://crossword-app-backend.herokuapp.com'
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crosswordpic: '',
            id: '',
            save: '',
            Image: '',
            count: 1,
        }
        this.crossword()
    }

    crossword = async () => {
        //console.log('Data==================',)
        await fetch('https://crossword-app-backend.herokuapp.com/app/crossword/42/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log('Data----+++++++++++++', data)
                this.setState({
                    image: data?.crossword_picture,
                })
            })
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.view1sty}>
                    <View style={styles.view2sty}>
                        <TouchableOpacity
                            onPress={() => Actions.Levels({ courseId: this.props?.courseId })}>
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
                <View>
                    <Image
                        source={{ uri: baseUrl + this.state.image }}
                        style={styles.imagesty}
                    />
                </View>
                <View style={styles.buttonviewsty}>
                    <TouchableOpacity
                        onPress={() => Actions.crossword4({ param: '1-Down' })}
                        style={styles.inputrowview}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Down-1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Actions.crossword4({ param: '2-Down' })}
                        style={styles.inputrowview}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Down-2</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonviewsty}>
                    <TouchableOpacity
                        onPress={() => Actions.crossword4({ param: '3-Across' })}
                        style={styles.inputrowview}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Across-3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Actions.crossword4({ param: '4-Across' })}
                        style={styles.inputrowview}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Across-4</Text>
                    </TouchableOpacity>
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
    imagesty: {
        marginTop: '5%',
        width: 300,
        height: 300,
    },
    inputrowview: {
        height: 70,
        width: '30%',
        borderWidth: .6,
        borderRadius: 10,
        borderColor: '#707070',
        backgroundColor: '#114E76',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonviewsty: {
        flexDirection: 'row',
        width: '72%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10%'
    }
});
