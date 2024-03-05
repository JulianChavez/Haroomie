import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


function AddToDo() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>
                Hello
            </Text>
            <Button title="Home" onPress={() => navigation.navigate("home")} />
        </View>
    )
}

export default AddToDo


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }

})