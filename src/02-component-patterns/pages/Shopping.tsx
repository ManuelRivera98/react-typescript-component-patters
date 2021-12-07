import { ProductButtons, ProductImg, ProductTitle, ProductCard } from "../components"

const product = {
  id: '1',
  name: 'Coffee Mug',
}

export const Shopping = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product} >

          <ProductCard.Img />

          <ProductCard.Title />

          <ProductCard.Buttons />

        </ProductCard>


        <ProductCard product={product} >

          <ProductImg />

          <ProductTitle />

          <ProductButtons />

        </ProductCard>
      </div>
    </div>
  )
}
