import { ProductButtons, ProductImg, ProductTitle, ProductCard } from "../components"
import '../styles/custom-styles.css';

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
        <ProductCard className="bg-dark" product={product} >

          <ProductCard.Img className="custom-image" />

          <ProductCard.Title className="text-white" />

          <ProductCard.Buttons className="custom-buttons" />

        </ProductCard>


        <ProductCard className="bg-dark" product={product} >

          <ProductImg className="custom-image" />

          <ProductTitle className="text-white" />

          <ProductButtons className="custom-buttons" />

        </ProductCard>

        <ProductCard
          style={{
            backgroundColor: '#70D1F8'
          }}
          product={product} >

          <ProductImg />

          <ProductTitle style={{
            fontWeight: 'bold',
            color: 'white'
          }} />

          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'center'
          }} />

        </ProductCard>
      </div>
    </div>
  )
}
