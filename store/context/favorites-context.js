import {createContext, useState} from "react";

// context object it must be exported so that we can use it in other files later
export const FavoritesContext = createContext({
    mealIds: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});
// functional component / can be later be wrapped around our app, our component that should be able to interact with this context.
function FavoritesContextProvider({children}) {
    const [favoriteMealIds,setFavoriteMealIds] = useState([]);

    function addFavorite (id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds,id])
    }

    function removeFavorite (id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
    }

    const value = {
        mealIds: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
export default FavoritesContextProvider;