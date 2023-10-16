import {View, Text, StyleSheet,Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailsScreen({route}) {
    const mealId = route.params.mealId;
    const displayedMeal = MEALS.find((mealItem)=> mealItem.id === mealId)

    return (
        <View>
            <Image style={styles.mealImage} source={{uri: displayedMeal.imageUrl}}/>
            <Text>{ displayedMeal.title }</Text>
            <MealDetails duration={displayedMeal.duration} complexity={displayedMeal.complexity} affordability={displayedMeal.affordability}/>
            <Text>Ingredients</Text>
            { displayedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}>{ ingredient }</Text>
            ))}
            <Text>Steps</Text>
            { displayedMeal.steps.map((step) => (
                <Text key={step}>{ step }</Text>
            ))}
        </View>
    )
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
    mealImage: {
        width: '100%',
        height: 200
    },
})