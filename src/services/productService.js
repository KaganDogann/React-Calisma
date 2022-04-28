import axios from "axios";

export default class ProductService {
    getProducts() {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    }
    
    getProductById(postId) {
       // console.log("getProductById çalıştı");
       // console.log(postId);
        return axios.get("https://jsonplaceholder.typicode.com/posts/"+postId);
    }
}