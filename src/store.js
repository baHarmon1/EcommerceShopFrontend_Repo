import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import { userUpdateProfileReducer, userDetailsReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItem') ?
        JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
    cart: {cartItems: cartItemsFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store