// JavaScript source code
import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
    centered: {
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 64,
        fontWeight: '400',
    },
    logo1: {
        color: 'black',
    },
    logo2: {
        color: '#039900',
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    buttonBlack: {
        backgroundColor: 'black',
    },
    buttonGreen: {
        backgroundColor: '#039900',
    },
    buttonBlackText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },
    
    buttonGreenText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
});
