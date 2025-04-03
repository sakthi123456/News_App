import { ActivityIndicator, FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './NewsStyle.js'
import { useNavigation } from '@react-navigation/native'
import Search from "react-native-vector-icons/EvilIcons";
import { fetchNews } from "../../redux/newsReducer.js";
import { useDispatch, useSelector } from "react-redux";

const News = () => {
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const { articles, loading } = useSelector((state) => state?.news);

    const filteredArticles = articles?.filter(article =>
        article?.source?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <>
            <SafeAreaView>
                <View style={styles.main}>
                    <TextInput
                        style={styles.search}
                        placeholder="Search here..."
                        placeholderTextColor={"white"}
                        onChangeText={(text) => setSearchTerm(text)}
                        value={searchTerm}
                    />
                    <Pressable
                        style={styles.buttonSearch}>
                        <Search name='search' size={40} color="white" />
                    </Pressable>
                </View>
                <View>
                    <FlatList
                        data={filteredArticles}
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
                                            <Text numberOfLines={1} style={styles.productName}>{item?.source?.name}</Text>
                                        </View>
                                        <View style={styles.pricweDetails}>
                                            <Text numberOfLines={1} style={styles.priceName}>{item?.author}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        vertical
                        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                        ListFooterComponent={
                            loading ? (
                                <View style={styles.footer}>
                                    <ActivityIndicator size="large" color="black" />
                                    <Text style={{ color: 'black', fontSize: 15 }}>Loading....</Text>
                                </View>
                            ) : null
                        } />

                </View>
            </SafeAreaView>
        </>
    )
}

export default News

