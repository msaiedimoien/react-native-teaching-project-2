import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import {Context} from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

  return(
      <View style={styles.view}>
          <Text style={styles.label}>Enter Title:</Text>
          <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>

          <Text style={styles.label}>Enter Content:</Text>
          <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>

          <Button
              style={styles.button}
              title='Save'
              onPress={() =>
              {
                  addBlogPost(title , content, () => {
                      navigation.navigate('Index');
                  });
              }}
          />
      </View>
  );
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

    button: {

    },
});

export default CreateScreen;