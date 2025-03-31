import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#fcf9f0',
        flex: 1,
        padding: 3
    },

    imgContainer: {
        flex: 1,
        width: 150,
        marginLeft: 9,
        marginTop: 6,
        borderRadius: 5,
        overflow: "hidden",
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
        height: 150
    },

    details: {
        padding: 1
    },
    pricweDetails: {
        marginLeft: 0,
    },
    productName: {
        fontSize: 14,
        fontWeight: '900',
        color: 'black'
    },
    priceName: {
        fontSize: 11,
        fontWeight: '600',
        color: 'black'
    },
    add: {
        position: 'absolute',
        bottom: 5,
        right: 8
    },
    textColor: {
        color: 'black'
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10
    },
    searchIcon: {
        flex: 1,
        color: "black",
        borderRadius: 10,
        padding: 10
    },
    searchWarpper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#e3e3e3",
        borderRadius: 8,

    },
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        color: 'black'
    },
})

export default styles
