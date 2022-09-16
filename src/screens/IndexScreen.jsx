import React, {useContext, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context);

    useEffect(() => {
        getBlogPosts();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={state}
                keyExtractor={(e) => e.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id, title: item.title, content: item.content})}>
                            <View style={styles.row}>
                                <View>
                                    <Text style={styles.title}>{item.title} ({item.id})</Text>
                                    <Text>{item.content}</Text>
                                </View>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
      headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather style={styles.addIcon} name="plus" />
      </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },

    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderTopWidth: 1,
    },

    title: {
        fontSize: 18,
    },

    icon: {
        fontSize: 24,
        color: 'tomato',
    },

    addIcon: {
        color: 'green',
        fontSize: 24,
        margin: 10,
    },
});

export default IndexScreen;