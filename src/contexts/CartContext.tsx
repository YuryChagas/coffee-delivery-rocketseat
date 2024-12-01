import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/home/components/coffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee{
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffeeToCart: (Coffee: CartItem) => void;
  cartQuantity: number;
  changeCartitemQuantity: ( cartItemId: number, type: 'increase' | 'decrease') => void;
  removeCartItem:(cartId: number) => void;
  cartItemsTotal: number,
  clearCart: () => void;
}

export const CartContext = createContext({ }  as CartContextType);

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if(storedCartItems) {
      return JSON.parse(storedCartItems)
    } else {
      return []
    }
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  },0)

  function addCoffeeToCart(coffee: CartItem){
    const coffeeAlreadyExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    )

    const newCart = produce(cartItems, ( draft ) => {
      if (coffeeAlreadyExistInCart < 0 ) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart)
  }

  function changeCartitemQuantity( cartItemId: number, type: 'increase' | 'decrease'){
      const newCart = produce( cartItems, (draft) => {
        const coffeeEexistsInCart = cartItems.findIndex((cartItem) => 
          cartItem.id === cartItemId
        );

        if (coffeeEexistsInCart >= 0) {
          const item = draft[coffeeEexistsInCart];
          draft[coffeeEexistsInCart].quantity =
            type === 'increase' ? item.quantity + 1 : item.quantity - 1;
        }
      })

      setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number,) {
    const newCart = produce(cartItems, (draft) =>{
      const coffeeEexistsInCart = cartItems.findIndex((cartItem) => 
        cartItem.id === cartItemId
      );

      if(coffeeEexistsInCart >= 0) {
        draft.splice(coffeeEexistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems])

  function clearCart() {
    setCartItems([])
  }

  return(
    <CartContext.Provider value={{cartItems, clearCart, cartQuantity,cartItemsTotal, addCoffeeToCart, removeCartItem, changeCartitemQuantity}}>
      {children}
    </CartContext.Provider>
  )
}