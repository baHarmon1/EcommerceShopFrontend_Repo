import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,
        productDetailsReducer,
        productDeleteReducer,
        productCreateReducer
    } from './reducers/productReducers'
import { userUpdateProfileReducer,
        userDetailsReducer,
        userLoginReducer,
        userRegisterReducer,
        userListReducer,
        userDeleteReducer,
        userUpdateReducer,
    } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userUpdateProfile: userUpdateProfileReducer,
    cart: cartReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    

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