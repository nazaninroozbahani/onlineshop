import {combineReducers, createStore} from "redux";
import LaptopsReducer from "./laptops/LaptopsReducer";
import LaptopDetailReducer from "./laptopDetail/LaptopDetailReducer";
import CartReducer from "./cart/CartReducer";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
    laptops: LaptopsReducer,
    laptopDetail: LaptopDetailReducer,
    cart: CartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist : ['laptops', 'laptopDetail']
}

const persistedReducer = persistReducer(persistConfig, reducer);

// const Store = createStore (reducer);

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)