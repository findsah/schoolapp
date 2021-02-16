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
            qmcq: [],
            qText: '',
            image: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            save: '',
            count: 1,
        }
        this.mcqs(this.state.count)
    }

    mcqs = async (q) => {

        //console.log('calledd', q)

        await this.setState({
            count: q
        })

        //  console.log('count', this.state.count);

        if (this.props.from) {
            await AsyncStorage.setItem('levelId', JSON.stringify(this.props?.levelId))
        }

        let levelId = await AsyncStorage.getItem('levelId')
        if (this.state.count < 5) {

            await fetch('https://crossword-app-backend.herokuapp.com/app/question/42/' + this.state.count + '/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
            }).then((response) => response.json())
                .then((data) => {

                    //console.log('Data---->', data?.qmcq[0])

                    this.setState({
                        image: data?.question_picture,
                        qText: data?.question_text,
                        qmcq: data?.qmcq,
                        option1: data?.qmcq[0].choice_word,
                        option2: data?.qmcq[1].choice_word,
                        option3: data?.qmcq[2].choice_word,
                        option4: data?.qmcq[3].choice_word,
                    })
                })

        }
        else {
            Actions.crossword1()

        }

    }
    saveans = async (ans) => {
        await this.setState({
            save: ans
        })
        //console.log('value', this.state.save)
    }
    checkAnswer = async () => {
        await fetch('https://crossword-app-backend.herokuapp.com/app/answer/2/42/1/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
        }).then((response) => response.json())
            .then((data) => {

                console.log('Data---->', data)
                //return
                if (this.state.save == data.answer) {
                    alert("answer is correct")
                    this.mcqs(this.state.count + 1)
                }
                else {
                    alert(data.detail)
                    this.mcqs(this.state.count + 1)
                }
            })
    }

    render() {
        // console.log('image', baseUrl + this.state.image)
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }} >
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
                    source={{ uri: baseUrl + this.state.image }}
                    style={styles.imagesty}
                />
                <View style={styles.inputview}>
                    <Text style={{ fontSize: 18, color: '#fff' }}>{this.state.qText}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    width: '80%',
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10%'
                }}>
                    <TouchableOpacity
                        onPress={() => this.saveans(this.state.option1)}
                        style={styles.inputrowview}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>{this.state.option1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.saveans(this.state.option2)}
                        style={styles.inputrowview}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>{this.state.option2}</Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity
                        onPress={() => this.saveans(this.state.option3)}
                        style={styles.inputrowview}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>{this.state.option3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.saveans(this.state.option4)}
                        style={styles.inputrowview}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>{this.state.option4}</Text>

                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    //onPress={() => this.mcqs(this.state.count + 1)}
                    onPress={() => this.checkAnswer()}
                    style={{ width: 100, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
                    <Text>Next Question</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
let styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#AED0EE',
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
        width: 150,
        height: 150,
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
        alignSelf: 'center'
    },
});
