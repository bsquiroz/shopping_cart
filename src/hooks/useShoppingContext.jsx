import { useContext } from "react";
import { ShoppingContext } from "../context/shoppingContext";

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
};
