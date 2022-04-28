import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems,
    y:5 //burada birden fazla değerler elemanlar olabilir
}
//Eğer redux sepet elemanlarının değiştiğini şu şekilde anlıyor: diyorki eğer referansı değiştiyse ben anlarım ki sepet değişti. sen ilgili sepet state'inin refransı değiştirirsen ben sağasola bildirirm diyor
export default function cartReducer(state = initialState, { type, payload }) { //sepetin son halini tuttuğumuz yer neye göre dömnderidğim aksiyona göre
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {
                product.quantity++;
                return {
                    ...state //spread operatörü new'ledim gibi düşün ayırıyorum içini aslında yep yeni bir obje oluşturuyorum burada
                }
            } else {
                return {
                    ...state,//yukarıda başka stateler varsa eğer onlar için tek tek ayırıyoruz initialAtate', mesela x:1, y:5 vs
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }] //...state.cartItems=> usta array kaldırıldı
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((c) => c.product.id !== payload.id)
            }
        default:
            return state;
    }
}