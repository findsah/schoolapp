import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
    container: { backgroundColor: 'white', flex: 1, },
    icon: { fontSize: 35, color: '#fff' },
    searchIcon: { fontSize: 28, color: '#fff' },
    header: { width: '100%', height: 60, backgroundColor: '#222222', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 },
    logo: { width: 150, height: 40 },
    content: { padding: 20 },
    image: { width: '100%', height: 200 },
    desc: { fontSize: 25, fontWeight: 'bold', marginTop: 15, color: '#003366' },
    date: { fontSize: 12, color: '#aaa', marginTop: 5 },
    detail: { color: '#777', fontSize: 16, marginTop: 15 },

})