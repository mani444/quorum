import Axios from "../axios/Axios";

export default class NetworkManager {
  static listProducts() {
    return Axios.get("products");
  }
  //   static AddProducts(data) {
  //     return Axios.post('products', data);
  //   }
}
