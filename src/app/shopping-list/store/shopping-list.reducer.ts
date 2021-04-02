import * as ShoppingListActions from './shopping-list.action';
const initialState = {
    ingredients: []
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient) {
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
    }
}