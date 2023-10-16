import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MealDetails from "./MealDetails";
function MealItem ({ title, imageUrl, duration, complexity, affordability, onPress}) {
    return (
        <View style={styles.itemContainer }>
            <Pressable onPress={onPress} android_ripple={{color: '#ccc'}}>
                <View style={styles.innerContainer}>
                    <View >
                        <Image style={styles.mealImage} source={{uri: imageUrl}}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
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
    mealImage: {
        width: '100%',
        height: 200
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    }
})