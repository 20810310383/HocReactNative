import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    // default: display: flex => colunm
    container: {
        marginTop: 50,
        borderWidth: 1,
        borderColor: "red",
        flex: 1,

        justifyContent: "center",
        flexDirection: "column",
        // alignItems: "center",

        // justifyContent: "center",
        // flexDirection: "row",
        // alignItems: "center",
    },
    item1: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "violet",
        // height: 250,
        width: 60,
        flex: 4
    },
    item2: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "green",
        // height: 300,
        width: 30,
        flex: 1
    },
    item3: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "orange",
        // height: 100,
        flex: 1,
        width: 100
    },
    item4: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "gray"
    },
})
const Flexbox = () => {

    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>Item 2</Text>
            </View>
            <View style={styles.item3}>
                <Text>Item 3</Text>
            </View>
            <View style={styles.item4}>
                <Text>Item 4</Text>
            </View>
        </View>
    )
}

export default Flexbox