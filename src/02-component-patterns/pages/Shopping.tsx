import { ProductButtons, ProductImg, ProductTitle, ProductCard } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';

export const Shopping = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

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

        {products.map((product) => (
          <ProductCard
            key={product.id}
            className="bg-dark" product={product}
            onChange={onProductCountChange}
            value={shoppingCart[product.id] ? shoppingCart[product.id].count : 0}
          >

            <ProductImg className="custom-image" />

            <ProductTitle className="text-white" />

            <ProductButtons className="custom-buttons" />

          </ProductCard>
        ))}

      </div>

      <div className="shopping-card">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            style={{
              width: '100px',
            }}
            className="bg-dark" product={product}
            onChange={onProductCountChange}
            value={product.count}
          >

            <ProductImg className="custom-image" />

            <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }} />

          </ProductCard>))}

      </div>
    </div>
  )
}
