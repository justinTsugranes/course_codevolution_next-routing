import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
  }
  return (
    <>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/product'>
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Home

/*

### Routing Summary

Next.js uses a file based routing system.

- Page Based Routing System - Pages are associated with a route based on their file name.

- Nested Routes are a nested folder structure where files will be automatically routed in the same way in the URL.

- Dynamic Routes can be created by adding square brackets to a page name.

- Catch All Routes - add three dots (like a spread operator) inside square brackets to create a catch all route. They're helpful if you want different URLs for the same page layout or even when you're working with pages where some of the route parameters are optional.

To navigate to other routes (pages), we wrap the heading for those pages in a Link (capital 'L' to distinguish from plain HTMl and JavsScript) component and have the href point to the corresponding internal page via '/PAGE'

Place Order Button: first, we add the button and give it a click handler. Next, we define the handler through a const. Within, the order body, we're assuming the order was placed successfully and log 'placing your order'. Then, the user should be programmatically navigated to the products page.

To do this, at the top, we import useRouter from next/router.

Within the component, we make const router = useRouter. Within this object, we can access the push method, passing in the route as the argument.

In this example, we're navigating to /product. So, we import next/router and define a router const.

We're currenly only trying to navigate back to the product argument, but we can navigate to nested routes, dynamic routes, and catch-all routes.

If you want to replace the history instead of pushing the route onto the stack, you can use router.replace. The behavior is similar ot the link component with the prop set to True.

Remember - you use the 'useRouter' hook's _router.push_ method to navigate programmatically

*/
