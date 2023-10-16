import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
    <>
        <StatusBar style="dark" />
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                title: 'All Categories',
                headerStyle: { backgroundColor: "#FF8B4C"},
                contentStyle: { backgroundColor: "#F9D5A7"} }}>
                <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
                              // set option dynamically
                  // options={({route, navigation}) => {
                  //   const catId = route.params.categoryId;
                  //   return { title: catId} }}
                />
                <Stack.Screen name="MealDetails" component={MealDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </>
    );
}

const styles = StyleSheet.create({
  container: {

  },
});
