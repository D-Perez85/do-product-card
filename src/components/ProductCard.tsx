import React, { createContext, CSSProperties } from "react";
 import { useProduct } from "../hooks/useProduct";
import { InitialValues, onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";

export const ProductContext =  createContext({} as ProductContextProps); 
const {Provider} = ProductContext; 


export interface ProductCardHandlers {
   count: number,
   maxCount?: number;
   isMaxCountReached: boolean,
   product: Product
   increaseBy : (value : number) => void,
   reset : () => void,
 
}

export interface Props {
  children: ( args: ProductCardHandlers ) => JSX.Element,
  className?: string; 
  product: Product;
  style?: CSSProperties; 
  onChange?: (args: onChangeArgs) => void; 
  value?: number; 
  initialValues?: InitialValues
 }

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy, maxCount,isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues});

    return (
          <Provider value={{counter,increaseBy, product, maxCount}}>
                <div className={`${styles.productCard} ${className}`} style={style}>
                    {children({
                      count: counter,
                      maxCount: initialValues?.maxCount, 
                      isMaxCountReached, 
                      product,
                      increaseBy,
                      reset
                      })
                      }

                </div>
          </Provider>
        );
};
export default ProductCard;
