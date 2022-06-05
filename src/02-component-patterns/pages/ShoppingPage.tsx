import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
    
        <hr />

        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>
            {/* Primera  Forma */}
            <ProductCard 
                product={ product } 
                className="bg-dark text-white"
            > 
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title title="Primer Producto" className="text-bold" />
                <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>

            {/* Segunda Forma */}
            <ProductCard 
                product={ product }
                className="bg-dark text-white"
            > 
                <ProductImage className="custom-image" />
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>

            <ProductCard 
                product={ product }
                style={{ 
                    backgroundColor: 'gray'
                 }}
            > 
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>
        </div>
    </div>
  )
}
