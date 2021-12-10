import { ProductButtons, ProductImg, ProductTitle, ProductCard } from "../components"
import { products } from "../data/products";
import '../styles/custom-styles.css';

const product = products[0];

export const Shopping = () => {

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <ProductCard
        key={product.id}
        className="bg-dark"
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >

        {({
          reset,
          count,
          isMaxCountReached,
          maxCount,
          increaseBy,
        }) =>
          <>
            <ProductImg className="custom-image" />

            <ProductTitle className="text-white" />

            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>

            <button onClick={() => increaseBy(-2)}>-2</button>

            {!isMaxCountReached
              && <button onClick={() => increaseBy(2)}>+2</button>}

            <span
              style={{
                marginLeft: '5px',
                color: 'white',
              }}
            >{`${count} of ${maxCount}`}</span>
          </>
        }

      </ProductCard>

    </div>
  )
}
