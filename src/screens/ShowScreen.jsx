import React, {useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/BlogContext";
import { Ionicons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <Ionicons style={styles.editIcon} name="pencil"/>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        borderStyle: 'dashed',
        paddingVertical: 40,
        backgroundColor: 'white',
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'orange',
        margin: 10
    },

    content: {
        fontSize: 16,
        fontStyle: 'italic',
        margin: 10,
        // marginLeft: 20,
        color: 'gray',
    },

    editIcon: {
        color: 'gray',
        fontSize: 24,
        margin: 10
    },
});

export default ShowScreen;