import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

function MealItem ({ title, imageUrl, duration, onPress}) {
    return (
        <View>
            <Pressable onPress={onPress} android_ripple={{color: '#ccc'}}>
                <View style={styles.itemContainer }>
                    <Image style={styles.mealImage} source={{uri: imageUrl}}/>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.duration}> { duration } min</Text>
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
        backgroundColor: '#1F2027'
    },
    title: {
        color: 'white',
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
    }
})