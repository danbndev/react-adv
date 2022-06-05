import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';

import { Product, ProductContextProps } from '../interfaces/product.interface';

import styles from '../styles/styles.module.css';


// Contexto
export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;


export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties
}

export const ProductCard = ({ children, product, className, style } : Props ) => {

    const { counter, increasedBy } = useProduct();

    return (    
        // El value es la información que se va a compartir en todos los objetos
        <Provider value={{ 
            counter, 
            increasedBy, 
            product
         }}>
            <div className={ `${ styles.productCard } ${ className }` } style={ style }>

                { children }


                {/* <ProductImage img={ product.img } />

                <ProductTitle title={product.title} />

                <ProductButtons counter={counter} increasedBy={increasedBy} /> */}

            </div>
        </Provider>
  )
}
