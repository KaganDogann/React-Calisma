export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"      
                                                    //Sepetle ilgili aksiyonlarımı bu dosyamın içerisinde tutacağım
                                                    //Aksyion Reducer'lara gönderdiğim operasyonlar.. gönderilen aksyion reducer içerisinde ki hangi state var ben onu tetikleyeyim diyor(redux)

export function addToCart(product) {
    return {
        type : ADD_TO_CART, //aksiyona isim verdik. Aksyionuma bir tane isim vermiş oldum
        payload : product //aksiyonşa beraber gönderdiğim state'i etkileyecek olan veri
    }
}

export function removeToCart(product) {
    return {
        type : REMOVE_FROM_CART, //aksiyona isim verdik
        payload : product 
    }
}