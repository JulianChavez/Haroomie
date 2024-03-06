import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";


function AddToDo() {
    const navigation = useNavigation()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Kitchen', value: 'kitchen' },
        { label: 'Living Room', value: 'livingRoom' }
    ]);
    function whatValue() {
        console.log(value)
    }
    return (
        <View style={styles.container}>

            <View style={styles.mainContent}>
                {/*Main component for the To-Do, Have a list of item to add*/}
                <View style={styles.selection}>
                    <Text>Selection</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />

                </View>
                <View style={styles.valueStyle}><Button title='What value' onPress={whatValue} /></View>
            </View>
            <View style={styles.topBar}>
                {/*Go Back and the ADD TO-DO*/}
                <View style={styles.cancelButton}><Button title="Cancel" onPress={() => navigation.navigate("home")} color='white' /></View>
                <View style={styles.addButton}><Button title="Add" onPress={() => navigation.navigate("home")} color='white' /></View>
            </View>

        </View>
    )
}

export default AddToDo


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    topBar: {
        flex: .3,
        flexDirection: 'row',
        backgroundColor: 'green',

    },
    addButton: {
        flex: 1,
        height: 40,
        justifyContent: 'flex-end',
        backgroundColor: 'grey',
        borderWidth: 1,
        borderBlockColor: 'green'
    },
    cancelButton: {
        flex: 1,
        height: 40,
        justifyContent: 'flex-end',
        backgroundColor: 'grey'
    },
    mainContent: {
        flex: 4,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    selection: {
        flex: .1,
        backgroundColor: 'grey'
    },
    valueStyle: {
        flex: .4
    }

})