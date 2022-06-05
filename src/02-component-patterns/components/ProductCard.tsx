import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import { ProductContextProps, ProductCardProps } from '../interfaces/product.interface';

import styles from '../styles/styles.module.css';


// Contexto
export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ children, product } : ProductCardProps ) => {

    const { counter, increasedBy } = useProduct();

    return (    
        // El value es la información que se va a compartir en todos los objetos
        <Provider value={{ 
            counter, 
            increasedBy, 
            product
         }}>
            <div className={ styles.productCard }>

                { children }


                {/* <ProductImage img={ product.img } />

                <ProductTitle title={product.title} />

                <ProductButtons counter={counter} increasedBy={increasedBy} /> */}

            </div>
        </Provider>
  )
}
