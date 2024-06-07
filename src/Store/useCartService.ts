import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (productId: number, quantity: number) => void;
}

const useCartService = create<CartState>()(
  devtools((set) => ({
    items: [],
    addItem: (productId, quantity) =>
      set((state) => ({
        items: [
          ...state.items,
          { productId, quantity }
        ]
      })),
  }))
);

export default useCartService;