import apiClient from "../ApiClient";
import { ProductProps, IProductService } from "./IProductService";

class ProductService implements IProductService {
  async getProducts(page: number, rows: number, sortBy: string, orderBy: string): Promise<ProductProps[]> {
    try {
      const response = await apiClient.get<ProductProps[]>('/products', {
        params: {
          page,
          rows,
          sortBy,
          orderBy
        }
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProductById(id: number): Promise<ProductProps> {
    try {
      const response = await apiClient.get<ProductProps>(`/products/${id}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const apiProductService = new ProductService();