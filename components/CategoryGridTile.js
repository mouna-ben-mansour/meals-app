import {Pressable, Text, View, StyleSheet, Platform} from "react-native";

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable onPress={onPress} android_ripple={{color: '#ccc'}}
                       style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer ,{backgroundColor: color}]}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategoryGridTile;

const styles = StyleSheet.create( {
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation:4,
        backgroundColor:'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex:1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex:1,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})