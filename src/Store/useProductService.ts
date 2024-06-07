import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  setProducts: (products: Product[]) => void;
  setLoading: (loading: boolean) => void;
}

const useProductService = create<ProductState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        loading: true,
        setProducts: (products) => set(() => ({ products })),
        setLoading: (loading) => set(() => ({ loading })),
      }),
      { name: "productService" }
    )
  )
);

export default useProductService;