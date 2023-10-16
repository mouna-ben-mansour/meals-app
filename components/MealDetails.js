import {StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MealDetails({ duration, complexity, affordability}) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>
                <Icon name="timer-outline" size={18} color="black" /> { duration } min
            </Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection:'row',
        justifyContent: "center",
        alignItems:'center',
        padding: 8
    },
    detailItem: {
        fontSize: 14,
        marginHorizontal:4
    },
})