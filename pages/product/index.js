// Use the Link component to navigate to different routes
// For internal routes, you only need to use an /PAGE href. For external routes, you still use a typical HTML href
import Link from 'next/link'

function ProductList({ productId = 4 }) {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h2>
        <Link href='/product/1'>
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href='/product/2'>
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href='/product/3'>
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h2>
    </>
  )
}

export default ProductList
