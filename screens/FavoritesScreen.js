import {FavoritesContext} from "../store/context/favorites-context";
import {useContext} from "react";
import {MEALS} from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
function FavoritesScreen({navigation}) {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.mealIds);
    // const displayedMeals = MEALS.filter(mealItem => favoriteMealsCtx.mealIds.includes(mealItem.id))
    const displayedMeals = MEALS.filter(mealItem => favoriteMealsIds.includes(mealItem.id))

    if (displayedMeals.length === 0) {
        return  <View style={styles.rootContainer}>
            <Text style={styles.text}>NO DATA</Text>
        </View>
    }
    return  <MealsList items={displayedMeals}/>
}
export default FavoritesScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }
})