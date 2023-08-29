import axios from "axios";
export const fetchProducts = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/benirvingplt/products/products');
      return response.data
    } catch (error) {
      console.error('Error fetching users:', error);
    }
};