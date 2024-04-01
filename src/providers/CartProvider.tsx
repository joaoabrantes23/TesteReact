import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "@/types";
import { randomUUID } from "expo-crypto";

type CartType = {
    items: CartItem[];
    addItem: (product: Product, size: CartItem['size']) => void;
    // updateQuantaity: (itemId: string, amount: -1 | 1) => void;
};

export const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {},
    // updateQuantaity: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem['size']) => {
        //if already in cart, increase quantity

        const newCartItem: CartItem = {
            id: randomUUID(), // generate
            product,
            product_id: product.id,
            size,
            quantity: 1,
        };

        setItems([newCartItem, ...items]);
    };

    //update quantity
    // const updateQuantaity: (itemId: string, amount: -1 | 1) => {
        
    // };

    console.log(items);
    
  return (
    <CartContext.Provider
        value={{ items, addItem }}>
            {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
