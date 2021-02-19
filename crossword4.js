import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
const HEIGHT = Dimensions.get('screen').height / 3;
const baseUrl = 'https://crossword-app-backend.herokuapp.com'


export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cmcq: [],
            image: '',
            choiceword1: '',
            choiceword2: '',
            choiceword3: '',
            choiceword4: '',
            choiceword5: '',
            choiceword6: '',
            choiceword7: '',
            choiceword8: '',
            choiceword9: '',
            choiceword10: '',
            count: 1,
            fill1: '',
            fill2: '',
            fill3: '',
            fill4: '',
            fill5: '',
            count: 1,
            order: 5,
            save: '',
            fillWords: [],
            answer: '',
        }
        this.qmcq()
    }


    fillword1 = (ans) => {
        this.setState({
            fill1: ans,
            fill2: ans,
            fill3: ans,
            fill4: ans,
            fill5: ans,

            // next: count + 1,
        })
        let wordArray = this.state.fillWords
        wordArray.push(ans);
        let abc = wordArray.join('')
        console.log('join', abc)
        this.setState({
            answer: abc
        })
        this.setState({
            fillWords: wordArray
        })

        console.log("Array++++++++++", this.state.fillWords)
        //console.log("String++++++++++", toString())
    }


    qmcq = async () => {
        //console.log('pram+++', this.props?.param)
        //return
        await fetch('https://crossword-app-backend.herokuapp.com/app/cquestion/1/' + this.props?.param + '/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {

                //console.log('Data---->', data?.cmcq)

                this.setState({
                    image: data?.question_pic,
                    cmcq: data?.cmcq,
                    choiceword1: data?.cmcq[0].choice_word,
                    choiceword2: data?.cmcq[1].choice_word,
                    choiceword3: data?.cmcq[2].choice_word,
                    choiceword4: data?.cmcq[3].choice_word,
                    choiceword5: data?.cmcq[4].choice_word,
                    choiceword6: data?.cmcq[5].choice_word,
                    choiceword7: data?.cmcq[6].choice_word,
                    choiceword8: data?.cmcq[7].choice_word,
                    choiceword9: data?.cmcq[8].choice_word,
                    choiceword10: data?.cmcq[9].choice_word,
                })
                //console.log("image===============++>", this.state.cmcq)
            })

    }


    saveans = async (ans) => {
        this.setState({
            save: ans,

        })
        //console.log('value', this.state.save)
    }


    checkAnswer = async () => {
        let formdata = new FormData()
        formdata.append('answer', this.state.answer)
        //console.log('formdat', formdata)
        //console.log("order=========>", this.props.order)
        //console.log("Answer========>", answer)
        //return
        await fetch('https://crossword-app-backend.herokuapp.com/app/answer/1/42/' + this.props.order + '/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formdata
        }).then((response) => response.json())
            .then((data) => {
                console.log('Data---->', data)

                //console.log('Data---->++++++1111', this.state.save, '==', data.answer)
                if (data.detail == 'Mash Allah') {
                    console.log("Answer==========", data)
                    this.setState({
                        order: this.state.order + 1
                    })
                    //console.log("Answer==========", data)
                    alert(data.detail)
                    this.qmcq(this.state.count + 1)
                }
                else {
                    console.log("else Data==========", data)
                    this.setState({
                        order: this.state.order + 1
                    })
                    alert(data.detail)
                    this.qmcq(this.state.count + 1)
                }
            })
        if (this.props.order < 8) {
            Actions.crossword1()
        }
        else {
            Actions.Pointstable()
        }

    }

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
                            style={{ marginTop: '30%', width: 170, height: 180 }}
                        />
                        <View style={styles.maincardviewsty}>
                            <View style={styles.headerviewsty}>
                                <Text style={styles.text1sty}>أكمل...</Text>
                            </View>

                            <Image
                                source={{ uri: baseUrl + this.state.image }}
                                style={styles.imagesty}
                            />

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
                                <Text style={styles.chosewordsty}>{this.state.fillWords[0]}</Text>
                            </View>
                            <View style={styles.inputview}>
                                <Text style={styles.chosewordsty}>{this.state.fillWords[1]}</Text>
                            </View>
                            <View style={styles.inputview}>
                                <Text style={styles.chosewordsty}>{this.state.fillWords[2]}</Text>
                            </View>
                            <View style={styles.inputview}>
                                <Text style={styles.chosewordsty}>{this.state.fillWords[3]}</Text>
                            </View>
                            <View style={styles.inputview}>
                                <Text style={styles.chosewordsty}>{this.state.fillWords[4]}</Text>
                            </View>
                        </View>


                        <View style={{ height: '40%', alignItems: 'center' }}>

                            <View style={styles.textbox1viewsty}>
                                <TouchableOpacity
                                    //this.mcqs(this.state.count + 1)
                                    onPress={() => this.fillword1(this.state.choiceword1)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword1}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.fillword1(this.state.choiceword2)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword2}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.fillword1(this.state.choiceword3)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword3}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.fillword1(this.state.choiceword4)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword4}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.fillword1(this.state.choiceword5)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword5}</Text>
                                </TouchableOpacity>

                            </View>


                            <View style={[styles.textbox1viewsty]}>
                                <TouchableOpacity
                                    onPress={() => this.fillword1(this.state.choiceword6)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword6}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.fillword1(this.state.choiceword7)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword7}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.fillword1(this.state.choiceword8)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword8}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.fillword1(this.state.choiceword9)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword9}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.fillword1(this.state.choiceword10)}
                                    style={styles.input1view}>
                                    <Text style={styles.chosewordsty}>{this.state.choiceword10}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                //onPress={() => this.mcqs(this.state.count + 1)}
                                onPress={() => this.checkAnswer()}
                                style={{ width: 130, height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2e86de', borderRadius: 10, marginTop: '8%' }}>
                                <Text style={{ fontSize: 18, color: 'white' }}>Next Question</Text>
                            </TouchableOpacity>
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
        //backgroundColor: 'red',
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
        width: '70%',
        padding: 10,
        alignItems: 'center',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
    },
    input1view: {
        flexDirection: 'row',
        height: 49,
        width: '19%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagesty: {
        marginTop: '15%',
        width: 150,
        height: 150,
    },
    chosewordsty: {
        fontSize: 30,
    }
});
