import { ActivityIndicator, FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './NewsStyle.js'
import { useNavigation } from '@react-navigation/native'
import uuid from "react-native-uuid";
import Search from "react-native-vector-icons/EvilIcons";

const API_KEY = "b284e3824bd94c6e9096f91b5028184d";
const API_URL = `https://newsapi.org/v2/everything?q=tesla&from=2025-02-28&sortBy=publishedAt&apiKey=${API_KEY}`;

const News = () => {
    const navigation = useNavigation();
    const [articles, setArticles] = useState([]);
    const [filteredData, setFilteredData] = useState(articles);
    const [query, setQuery] = useState(""); 
    const [loading, setLoading] = useState(false);

    const handleSearch = (text) => {
        setQuery(text);
        if (text) {
            const newData = articles?.filter((item) =>
                item?.source?.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(newData);
        } else {
            setFilteredData(articles);
        }
    };
    const fetchNews = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if (data?.articles) {
                const updatedArticles = data?.articles?.map((item, index) => ({
                    ...item,
                    source: {
                        ...item?.source,
                        id: item?.source?.id || `source-${index}`,
                    },
                    id: item?.id || uuid.v4(),
                }));

                setArticles(updatedArticles);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
        setArticles(filteredData);
    }, []);

    return (
        <>
            <SafeAreaView>
                <View style={styles.main}>
                    <TextInput
                        style={styles.search}
                        placeholder="Search here..."
                        placeholderTextColor={"white"}
                        onChangeText={handleSearch}
                        value={query}
                    />
                    <Pressable
                        style={styles.buttonSearch}>
                        <Search name='search' size={40} color="white" />
                    </Pressable>
                </View>
                <View>
                    <FlatList
                        data={articles}
                        numColumns={2}
                        columnWrapperStyle={{
                            justifyContent: "space-between"
                        }}
                        renderItem={({ item, index }) =>
                            <View style={styles.container} key={index} >
                                <View style={styles.imgContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate("NewsList", { article: item })}>
                                        <Image
                                            source={{ uri: item?.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s' }}
                                            style={styles.image}
                                        />
                                        <View style={styles.details}>
                                            <Text style={styles.productName}>{item?.source?.name}</Text>
                                        </View>
                                        <View style={styles.pricweDetails}>
                                            <Text style={styles.priceName}>{item?.author}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        vertical
                        keyExtractor={(item) => item?.id?.toString()}
                        ListFooterComponent={
                            loading ? (
                                <View style={styles.footer}>
                                    <ActivityIndicator size="large" color="black" />
                                    <Text style={{ color: 'black', fontSize: 15 }}>Loading....</Text>
                                </View>
                            ) : null
                        }/>

                </View>
            </SafeAreaView>
        </>
    )
}

export default News

