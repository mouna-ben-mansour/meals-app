import {CATEGORIES, MEALS} from "../data/dummy-data";
import {Text, View, StyleSheet, FlatList} from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId; // alternative const route = useRoute();

    const displayedMeals = MEALS.filter((mealItem)=> {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

    function renderMealItem(itemData) {
        function pressHandler() {
           navigation.navigate('MealDetails', { mealId: itemData.item.id })
        }
        return (
            <MealItem title={itemData.item.title}
                      imageUrl={itemData.item.imageUrl}
                      duration={itemData.item.duration}
                      complexity={itemData.item.complexity}
                      affordability={itemData.item.affordability}
                      onPress={pressHandler}/>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       padding: 16
   }
});