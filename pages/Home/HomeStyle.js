import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        rowGap: 32,
        backgroundColor: '#1E293B',
    },
    main: {
        backgroundColor: '#1E293B',
        paddingHorizontal: 16,
        paddingTop: 12,
        flexDirection: 'row',
        columnGap: 15,
        alignItems: 'center',
    },
    search: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 100,
        paddingVertical: 8,
        borderRadius: 20,
        width: '87%',
        color: '#FFFFFF',
        textAlign: 'center',
        alignItems: 'center',
        // bottom: 8,
        height: 45,
    },
    buttonSearch: {
        backgroundColor: '#1E293B',
        // padding: 8,
        borderRadius: 9999,
    },
    totalView: {
        rowGap: 30,
        alignItems: 'center',
        backgroundColor: '#1E293B',
    },
    box: {
        width: 192,
        height: 192,
        top: 20
    },
    weather: {
        // rowGap: 12,
        alignItems: 'center'
    },
    weatherText: {
        color: '#FFFFFF',
        fontSize: 48,
        fontWeight: '600'
    },
    weatherCity: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    climateView: {
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    climateTem: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 16,
    },
    txt: {
        fontWeight: '500',
        color: '#FFFFFF',
        fontSize: 18,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    containerHum: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 16,
    },
    Humtext: {
        fontWeight: '500',
        color: '#FFFFFF',
        fontSize: 18,
    },
    textHu: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    windcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 16,
    },
    windtext: {
        fontWeight: '500',
        color: '#FFFFFF',
        fontSize: 18,
    },
    windhead: {
        color: '#FFFFFF',
        fontSize: 12,
    },

    appBarWarpper: {
        // marginHorizontal: 2,
        marginTop: 10,

    },
    appBar: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        // padding: 5
    },
    location: {
        fontFamily: 'bold',
        fontSize: 17,
        color: '#872341',
        fontStyle: "normal",
        fontWeight: '700',
        fontVariant: 'small-caps',
        // textDecorationColor: 'black',
        textShadowColor: 'white',
        textShadowRadius: 20,
        // textTransform: 'capitalize',
        textShadowOffset: { object: { width: 20, height: 20 } },
        writingDirection: 'ltr',
        // bottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1

    },

    ListContainer: {
        backgroundColor: '#1E293B',
        paddingHorizontal: 12,
        marginTop: 16,
        gap: 15,
        flexDirection: "column",
    },
    textHorly: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 6,
    },
    containerScroll: {
        // paddingHorizontal: 12,
        // paddingVertical: 16,
        // marginTop: 16,
        // gap: 20,
    },
    containerHourly: {
        width: 176,
        height: 176,
        backgroundColor: "#1e3a8a",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
    },
    boxHourly: {
        width: 80,
        height: 80,
    },
    textDeg: {
        alignItems: "center",
        gap: 4,
    },
    textHorly: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: "bold",
    },
    textCol: {
        color: "#d1d5db",
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#1E293B'
    },
    footer: {
        paddingVertical: 300,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles
