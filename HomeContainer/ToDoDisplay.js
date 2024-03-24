import { View, Text, StyleSheet } from 'react-native';

function ToDoDisplay(props) {
    function renderCategories() {
        return props.data.map((item, index) => <Text key={index}>{item.text}</Text>);
    }
    return (
        <View>
            <Text style={styles.toDoItem}>{props.data}</Text>
        </View>

    );
};

export default ToDoDisplay;

const styles = StyleSheet.create({
    toDoItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'

    }

})