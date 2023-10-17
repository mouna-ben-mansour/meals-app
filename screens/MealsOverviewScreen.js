import {CATEGORIES, MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId; // alternative const route = useRoute();

    const displayedMeals = MEALS.filter((mealItem)=> {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

    // an alternative to set option dynamically in app.js
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category)=> category.id === categoryId).title;
        navigation.setOptions({title: categoryTitle});
    }, [categoryId, navigation]);

    return <MealsList items={displayedMeals}/>

}
export default MealsOverviewScreen;

