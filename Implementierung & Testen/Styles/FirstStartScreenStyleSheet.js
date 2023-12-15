// JavaScript source code
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centered: {
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
    },
    welcome: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
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
    buttonBlack: {
        width: '100%',
        height: 50,
        backgroundColor: 'black',
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
    buttonBlackText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },
});
