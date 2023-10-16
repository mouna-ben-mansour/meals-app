import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
    return    <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#FF8B4C"},
        sceneContainerStyle: { backgroundColor: "#F9D5A7"} ,
        drawerContentStyle: { backgroundColor:'#FF8B4C'},
        drawerInactiveTintColor: "#212C46",
        drawerActiveTintColor: "#212C46",
        drawerActiveBackgroundColor: "#F9D5A7"
    }}>
        <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
          drawerIcon: ({color,size})=> <Ionicons name="list" color={color} size={size}/>
       }}/>
        <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
          drawerIcon: ({color,size})=> <Ionicons name="star" color={color} size={size}/>
       }}/>
     </Drawer.Navigator>;
}
export default function App() {
    return (
    <>
        <StatusBar style="dark" />
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: "#FF8B4C"},
                contentStyle: { backgroundColor: "#F9D5A7"} }}>
                <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{
                    headerShown: false
                }} />
                {/*<Stack.Screen name="MealsCategories" component={CategoriesScreen} />*/}
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
                              // set option dynamically
                  // options={({route, navigation}) => {
                  //   const catId = route.params.categoryId;
                  //   return { title: catId} }}
                />
                <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{ title: 'About the Meal'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    </>
    );
}

const styles = StyleSheet.create({
  container: {

  },
});
