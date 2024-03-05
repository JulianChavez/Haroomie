import { StyleSheet, View, Text } from "react-native"


function TopBar() {
    return (
        <View style={styles.container}>
            <View style={styles.settingContainer}>
                {/*Setings in the bottom bar*/}
                <Text>Setings</Text>
            </View>
            <View style={styles.msgContainer}>
                {/*MSG in the bottom bar*/}
                <Text>MSG</Text>
            </View>
            <View style={styles.profileContainer}>
                {/*Profile in the bottom bar*/}
                <Text>Profile</Text>
            </View>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'

    },
    settingContainer: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: 'white'

    },
    msgContainer: {
        flex: 3,
        borderRightWidth: 1,
        borderRightColor: 'white'
    },
    profileContainer: {
        flex: 1,
    },






})