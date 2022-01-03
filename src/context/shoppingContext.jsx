import { createContext, useEffect, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
    const isShopping = localStorage.getItem("shopping");

    const initialState = isShopping ? JSON.parse(isShopping) : [];
    const [shopping, setShopping] = useState(initialState);

    if (!isShopping) {
        localStorage.setItem("shopping", JSON.stringify(shopping));
    }

    useEffect(() => {
        localStorage.setItem("shopping", JSON.stringify(shopping));
    }, [shopping]);

    const [showOverlay, setShowOverlay] = useState(false);

    const handleShoppingAdd = (item) => {
        if (shopping.length) {
            const isNewItem = shopping.find((shop) => shop.id === item.id);

            if (isNewItem) {
                isNewItem.amount = isNewItem.amount + 1;
                setShopping(
                    shopping.map((shop) =>
                        shop.id === item.id ? isNewItem : shop
                    )
                );
            } else {
                item.amount = 1;
                setShopping([...shopping, item]);
            }
        } else {
            item.amount = 1;
            setShopping([...shopping, item]);
        }
    };

    const handleShoppingDel = (item) => {
        if (item.amount === 1) {
            setShopping(shopping.filter((shop) => shop.id !== item.id));
        } else {
            item.amount = item.amount - 1;
            setShopping(
                shopping.map((shop) => (shop.id === item.id ? item : shop))
            );
        }
    };

    const totalAll = () => {
        let totalPrice = 0;
        shopping.forEach((element) => {
            totalPrice += element.amount * element.price;
        });
        return totalPrice;
    };

    const store = {
        shopping,
        handleShoppingAdd,
        handleShoppingDel,
        totalAll,
        showOverlay,
        setShowOverlay,
    };

    return (
        <ShoppingContext.Provider value={store}>
            {children}
        </ShoppingContext.Provider>
    );
};
