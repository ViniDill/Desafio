export interface ProductProps {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string;
  }
  
  export interface IProductService {
    getProducts: (page: number, rows: number, sortBy: string, orderBy: string) => Promise<ProductProps[]>;
    getProductById: (id: number) => Promise<ProductProps>;
  }