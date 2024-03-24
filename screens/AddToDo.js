import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";


function AddToDo(props) {
    const navigation = useNavigation()
    const [dropDownValues, setDropDownValues] = useState([])
    const [openSelection, setOpenSelection] = useState(false);
    const [valueSelection, setValueSelection] = useState(null);
    const [itemsSelection, setItemsSelection] = useState([
        { label: 'Cleaning', value: 'clean' },
        { label: 'Task', value: 'task' },
        { label: 'Reminder', value: 'reminder' },
        { label: 'Organization', value: 'organization' }
    ]);

    //Drop Down Priorit
    const [openPriority, setOpenPriority] = useState(false);
    const [valuePriority, setValuePriority] = useState(null);
    const [itemsPriority, setItemsPriority] = useState([
        { label: 'Low', value: 'low' },
        { label: 'Mid', value: 'mid' },
        { label: 'High', value: 'high' }
    ])
    //Drop Down Status
    const [openStatus, setOpenStatus] = useState(false);
    const [valueStatus, setValueStatus] = useState(null);
    const [itemsStatus, setItemsStatus] = useState([
        { label: 'Not Done', value: 'not' },
        { label: 'In Progress', value: 'inProgress' },
        { label: 'Done', value: 'done' }
    ])
    function addValues() {
        //Sets the array to the values the user picks
        setDropDownValues([valueSelection, valuePriority, valueStatus])
        //console.log(typeof (valueStatus))
        console.log(dropDownValues.forEach((item, i) => {
            console.log(item)
            console.log(i)
        }))
    }
    function whatValue() {
        //the dropdown picker values are strings
        console.log(dropDownValues)

    }
    function addToDoTask() {
        props.AddToDo(dropDownValues)
    }
    function submit() {
        navigation.navigate({
            name: 'home',
            params: { updateList: dropDownValues },
            merge: true,
        })
    }

    return (
        <View style={styles.container}>

            <View style={styles.mainContent}>
                {/*Main component for the To-Do, Have a list of item to add*/}
                <View style={styles.selection}>
                    <Text>Selection</Text>
                    <DropDownPicker
                        open={openSelection}
                        value={valueSelection}
                        items={itemsSelection}
                        setOpen={setOpenSelection}
                        setValue={setValueSelection}
                        setItems={setItemsSelection}
                    />
                </View>
                <View style={styles.priority}>
                    {/*Drop Down for priority*/}
                    <Text>Priority</Text>
                    <DropDownPicker
                        open={openPriority}
                        value={valuePriority}
                        items={itemsPriority}
                        setOpen={setOpenPriority}
                        setValue={setValuePriority}
                        setItems={setItemsPriority}
                    />
                </View>
                <View style={styles.status}>
                    {/**Drop Down for STATUS*/}
                    <Text>Status</Text>
                    <DropDownPicker
                        open={openStatus}
                        value={valueStatus}
                        items={itemsStatus}
                        setOpen={setOpenStatus}
                        setValue={setValueStatus}
                        setItems={setItemsStatus}

                    />
                </View>
                <View><Button title='ADD all data' onPress={addValues} /></View>
                <View style={styles.valueStyle}><Button title='What value' onPress={whatValue} /></View>
            </View>
            <View style={styles.topBar}>
                {/*Go Back and the ADD TO-DO*/}
                <View style={styles.cancelButton}><Button title="Cancel" onPress={submit} color='white' /></View>
                <View style={styles.addButton}><Button title="Add" onPress={submit} color='white' /></View>
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
        flex: .2,
        zIndex: 10,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    priority: {
        zIndex: 9,
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    status: {
        zIndex: 8,
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    valueStyle: {
        flex: .1,
        justifyContent: 'flex-end',
        backgroundColor: 'orange'

    }

})