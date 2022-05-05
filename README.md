# TSDX React User Guide

# Package of test into of NPM

### Damian Perez


##Ejemplo

```
import { ProductCard, ProductImg, ProductTitle, ProductButtons} from 'dp-product-card'

```

```
 <ProductCard
        product={product}
        key={product.id}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}>

        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImg/>
            <ProductTitle/>
            <ProductButtons/>
          </>
        )}
      </ProductCard>
```