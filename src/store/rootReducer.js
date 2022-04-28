//tüm staleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({ // buraya eklemem tüöm uygulamada kullancabilecğeim anlmaına geliyor.
    cart : cartReducer
    //user : userReducer
})

export default rootReducer;