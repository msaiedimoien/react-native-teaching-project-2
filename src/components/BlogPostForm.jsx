import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";

const BlogPostForm = ({ onSubmit , initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return(
        <View style={styles.view}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>

            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>

            <Button
                title='Save Blog'
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    },
};

const styles = StyleSheet.create({
    view: {
        padding: 15,
        paddingTop: 40,
    },

    label: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "600",
        color: 'tomato'
    },

    input: {
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default BlogPostForm;