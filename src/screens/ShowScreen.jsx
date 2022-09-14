import React, {useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/BlogContext";
import { Ionicons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
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
    editIcon: {
        color: 'gray',
        fontSize: 24,
        margin: 10
    },
});

export default ShowScreen;