import { StyleSheet, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const NewsList = ({ route }) => {
    const { article } = route.params;

    console.log(article?.url, 'SELEDDJNDND')
    return (
        <View style={styles.container}>
            <WebView source={{ uri: article?.url }} />
        </View>
    )
}

export default NewsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})