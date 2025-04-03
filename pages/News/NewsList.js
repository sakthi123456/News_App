import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import WebView from 'react-native-webview';

const NewsList = ({ route }) => {
    const { article } = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 5000));
                setData(article); 
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    
    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.footer}>
                    <ActivityIndicator size="large" color="black" />
                    <Text style={{ color: 'black', fontSize: 15 }}>Loading....</Text>
                </View>
            ) : (
                <WebView source={{ uri: data?.url }} />
            )}
        </View>
    )
}

export default NewsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        paddingVertical: 300,
        justifyContent: "center",
        alignItems: "center",
    }
})

