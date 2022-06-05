import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"

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
            <ProductCard product={ product }> 
                <ProductCard.Image />
                <ProductCard.Title title="Primer Producto" />
                <ProductCard.Buttons />
            </ProductCard>

            {/* Segunda Forma */}
            <ProductCard product={ product }> 
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>
        </div>
    </div>
  )
}
