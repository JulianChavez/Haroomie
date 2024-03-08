import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BottomBar from '../HomeContainer/BottomBar';
import { useNavigation } from '@react-navigation/native';

function Home(props) {
    const navigation = useNavigation()
    //Data of TO-DO task from users
    const [toDoTask, setToDoTask] = useState([]);

    function addToDoTask(enteredToDoTask) {
        //When use adds ToDo Task from ToDo Screen
        setToDoTask(currentTask => [...currentTask, { text: enteredToDoTask, id: Math.random().toString() }]);
    }


    return (
        <View style={styles.container}>
            <View style={styles.lastestUpdateUsers}>
                <Text>latest updates</Text>
            </View>
            <View style={styles.taskToDo}>
                <View style={styles.toDoTop}>
                    <View style={styles.toDoButton} ><Button color='white' title="Add To-Do" onPress={() => navigation.navigate("AddToDo")} /></View>
                </View>
                <View style={styles.toDoMain}>
                    <Text> Task to do from apartment</Text>
                </View>
            </View>
            <View style={styles.BottomBarContainer}>
                <BottomBar />
            </View>
        </View >

    )
}

export default Home



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomBarContainer: {
        flex: .5,
        backgroundColor: 'green',
        justifyContent: 'center',
        width: '100%',
        height: 2,
        alignItems: 'center'
    },
    lastestUpdateUsers: {
        flex: 1,
        padding: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: "red",
    },
    taskToDo: {
        flex: 4,
        justifyContent: 'center',
        padding: 1,
        width: '100%',
        backgroundColor: 'grey'
    },
    toDoTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    toDoMain: {
        flex: 4,
    },
    toDoButton: {
        height: 40,
        backgroundColor: '#345a45',
        borderWidth: 1,
        borderColor: '#345a45'
    }
});
