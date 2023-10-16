import {StyleSheet, Text, View} from "react-native";

function List({data}) {
    return  data.map((item) => (
             <View key={item} style={styles.listItem}>
                 <Text style={styles.itemText}>{ item }</Text>
             </View>
            )
    );
}
export default List;
const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginVertical: 5,
        marginHorizontal: 12,
        backgroundColor: '#FF8B4C'
    },
    itemText: {
        color: '#212C46',
        textAlign: 'center'
    }
})