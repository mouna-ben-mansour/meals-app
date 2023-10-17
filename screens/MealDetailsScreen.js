import {View, Text, StyleSheet, Image, ScrollView, Button} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useContext, useLayoutEffect} from "react";
import IconButton from "../components/IconButton";
import {FavoritesContext} from "../store/context/favorites-context";
import meal from "../models/meal";

function MealDetailsScreen({route, navigation}) {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const mealId = route.params.mealId;
    const displayedMeal = MEALS.find((mealItem)=> mealItem.id === mealId);

    const mealIsFavorite = favoriteMealsCtx.mealIds.includes(mealId);

    function headerButtonPressHandler() {
      if (mealIsFavorite) {
          favoriteMealsCtx.removeFavorite(mealId);
      } else {
          favoriteMealsCtx.addFavorite(mealId)
      }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star':'star-outline'} color='black' onPress={headerButtonPressHandler}/>
                // <Button title='Tap me' onPress={headerButtonPressHandler}/>
            }
        })
    }, [navigation, headerButtonPressHandler]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.mealImage} source={{uri: displayedMeal.imageUrl}}/>
            <Text style={styles.title}>{ displayedMeal.title }</Text>
            <MealDetails duration={displayedMeal.duration} complexity={displayedMeal.complexity} affordability={displayedMeal.affordability}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={displayedMeal.ingredients}></List>

                    <Subtitle>Steps</Subtitle>
                    <List data={displayedMeal.steps}></List>
                </View>
            </View>
        </ScrollView>
    )
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom:30
    },
    mealImage: {
        width: '100%',
        height: 350
    },
    title: {
        margin: 15,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})