import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";

function MealsList({items}) {
    function renderMealItem(itemData) {
        return (
            <MealItem title={itemData.item.title}
                      imageUrl={itemData.item.imageUrl}
                      duration={itemData.item.duration}
                      complexity={itemData.item.complexity}
                      affordability={itemData.item.affordability}
                      id={itemData.item.id}/>
        )
    }
    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>

    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});