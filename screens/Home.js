import { StyleSheet, Text, View } from 'react-native';
import BottomBar from '../MainComponents/BottomBar';
function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.lastestUpdateUsers}>
                <Text>latest updates</Text>
            </View>
            <View style={styles.taskToDo}>
                <Text> Task to do from apartment</Text>
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
    }
});
