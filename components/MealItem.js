import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function MealItem ({ title, imageUrl, duration, complexity, affordability, onPress}) {
    return (
        <View style={styles.itemContainer }>
            <Pressable onPress={onPress} android_ripple={{color: '#ccc'}}>
                <View style={styles.innerContainer}>
                    <View >
                        <Image style={styles.mealImage} source={{uri: imageUrl}}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>
                            <Icon name="timer-outline" size={18} color="black" /> { duration } min
                        </Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
export default MealItem;

const styles = StyleSheet.create( {
    itemContainer: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8
    },
    title: {
        margin: 8,
        textAlign: 'center',
        fontSize: 18,
    },
    duration: {
        width: 150,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 18,
        padding: 8,
        borderRadius: 50,
        margin: 15,
        backgroundColor: '#FBB72C',
        color: 'white'
    },
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
    mealImage: {
        width: '100%',
        height: 200
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    }
})