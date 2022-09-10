import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import {BlogProvider} from "./src/context/BlogContext";
import {defaultProps} from "react-native-web/dist/modules/forwardedProps";
import App from "react-native/template/App";

const navigator = createStackNavigator({
   Index: IndexScreen,
}, {
    initialRouteName: "Index",
    defaultNavigationOptions: {
        title: 'Blogs',
    }
});

export default createAppContainer(navigator);

export default () => {
    return <BlogProvider>
        <App />
    </BlogProvider>
};