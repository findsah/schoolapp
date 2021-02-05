import { Icon, View, } from 'native-base';
import { Text, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default class componentName extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        source={require('./Pic/Background.png')}
                        style={{ height: 200, width: 100, marginTop: '8%', marginBottom: '5%', resizeMode: 'contain' }} />
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.view1sty}>
                            <Image
                                source={require('./Pic/about1image.png')}
                                style={styles.imagesty} />
                            <Image
                                source={require('./Pic/about2.png')}
                                style={styles.imagesty} />
                            <Image
                                source={require('./Pic/about3.png')}
                                style={styles.imagesty} />
                            <Image
                                source={require('./Pic/about4.png')}
                                style={styles.imagesty} />
                            <Image
                                source={require('./Pic/about5.png')}
                                style={styles.imagesty} />
                        </View>
                    </ScrollView>

                    <View style={styles.infoviewsty}>
                        <Text style={{ fontSize: 20, paddingHorizontal: 10, color: 'white' }}>ولد أحمد عيسى السعد في عام 1915 م، ونشأ يتيما منذ صغره وعاش في كنف أخيه حتى اشتد

                        ساعده، ودخل الغوص، ثم عمل في إحدى الشركات النفطية في شبابه، حتى التحق بإدارة المعارف في

                        عام 1952 م بوظيفة مدير أعمال إنشاء مدرسة الشويخ الثانوية )جامعة الكويت حاليا(، ونال التقدير

                        والشكر من مجلس المعارف في ذلك الوقت، ثم تم تعيينه مشرفا على مشاريع إدارة المعارف ومنسقاً

                        عاماً وضابط اتصال مع جميع الدوائر الحكومية الأخرى، وفي عام 1955 م تم تعيينه معاوناً إدارياً

                        لمدير دائرة المعارف، وساهم بوضع اللبنات الأولى لإنشاء جامعة الكويت من خلال عضويته بلجنة

                        التخطيط التي شُكِّلت لهذا الغرض وذلك في عام 1962 م، وبعد التشكيل الوزاري الأول تم تعيينه بدرجة

                        وكيل وزارة مساعد بوزارة التربية والتعليم في عام 1963 م، لقد كان محبوبا من الجميع لما اتصف به

                        من تواضع وتفاني في توفير احتياجات العاملين والموظفين دون كلل وملل حتى وافته المنية في عام

                        1964 م، وقد اعتبر رحمه الله من الرعيل الأول الذين أسسوا البنية الأساسية للنظام التربوي والتعليمي

                        في دولة الكويت من الناحية التطبيقية والتي ما زال النظام الحالي يستند عليها.
                     </Text>
                        <Text style={{ fontSize: 30, color: 'white' }}>معلومات الاتصال</Text>
                        <Icon
                            type="Entypo"
                            name='old-phone'
                            style={styles.iconsty}
                        />
                        <Text style={styles.infotextsty}>23921028</Text>
                        <Icon
                            type="AntDesign"
                            name='printer'
                            style={styles.iconsty}
                        />
                        <Text style={styles.infotextsty}>23910672</Text>
                        <Icon
                            type="AntDesign"
                            name='instagram'
                            style={styles.iconsty}

                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
let styles = StyleSheet.create({
    container: {

        height: '100%',
        backgroundColor: '#AED0EE',
        alignItems: 'center'
    },
    view1sty: {
        flexDirection: 'row',
        //height: '50%',
    },
    imagesty: {
        width: 220,
        height: 220,

    },
    infoviewsty: {
        width: '95%',
        backgroundColor: '#59A9C2',
        marginTop: "2%",
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: { width: 1, height: 2 },
        elevation: 5,
        marginBottom: '1%',
        paddingBottom: 10
    },
    iconsty: {
        marginTop: '5%',
        fontSize: 65,
        color: '#DC143C'
    },
    infotextsty: {
        color: 'blue',
        fontSize: 25
    }
});