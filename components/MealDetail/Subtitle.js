import {StyleSheet, Text, View} from "react-native";

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}
export default Subtitle;
const styles = StyleSheet.create({
    subtitle: {
        margin: 12,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212C46'
    },
    subtitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#212C46',
        borderBottomWidth: 2
    },
})