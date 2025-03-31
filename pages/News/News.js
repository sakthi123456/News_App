import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './NewsStyle.js'
import { useNavigation } from '@react-navigation/native'
import uuid from "react-native-uuid";

const API_KEY = "b284e3824bd94c6e9096f91b5028184d"; 
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

const News = () => {
    const navigation = useNavigation();
    const [articles, setArticles] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if (data.articles) {
                const updatedArticles = data.articles.map((item, index) => ({
                    ...item,
                    source: {
                        ...item.source,
                        id: item.source.id || `source-${index}`,
                    },
                    id: item.id || uuid.v4(),
                }));

                setArticles(updatedArticles);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                <View >
                    <FlatList
                        data={articles}
                        numColumns={2}
                        // style={{ height: '100%' }}/
                        columnWrapperStyle={{
                            justifyContent: "space-between"
                        }}
                        renderItem={({ item, index }) =>
                            <View style={styles.container} key={index} >
                                <View style={styles.imgContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate("NewsList", { article: item })}>
                                        <Image
                                            source={{ uri: item.urlToImage }}
                                            style={styles.image}
                                        />
                                        <View style={styles.details}>
                                            <Text style={styles.productName}>{item?.source?.name}</Text>
                                        </View>
                                        <View style={styles.pricweDetails}>
                                            <Text style={styles.priceName}>{item.author}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        vertical
                        keyExtractor={(item) => item.id.toString()}
                    />

                </View>
            </ScrollView>
        </>
    )
}

export default News