# From the [Codevolution](https://youtube.com/codevolution) Youtube [Next.js Tutorial Series](https://youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH)

It is the best tutorial series on Next.js by far and is over 70 videos long.

## Topics covered include

- Project Stucture
- Routing
- Routing with Pages
- Nested Routes
- Dynamic Routes
- Nested Dynamic Routes
- Catch All Routes
- Link Component Navigation
- Navigating Programmatically
- Custom 404 Pages
- Pre-rendering and Data Fetching
  - Types of Pre-Rendering
    - Static Generation
      - with and without data
      - Incremental Static Generation
      - Dynamic Paramters when fetching data
    - Server-side Rendering
      - Data fetching
    - Client-side Data Fetching
    - Combining pre-rendering with client-side data fetching
- Static Generation
- Static Generation with g etStaticProps
- Pages vs Components
- Inspecting Static Generation Builds
- SSG with Dynamic Parameters
- SSG with getStaticPaths
- Inspecting getStaticPath Builds
- Fetching Paths for getStaticPaths
- getStaticPaths fallbacks
- Incremental Static Regeneration
- Inspecting ISR Builds
- Server-side Rendering
- SSR with getServerSideProps
- SSR with Dynamic Parameters
- Inspecting SSR Builds
- Client-side Data Fetching
- SWR for Client-side Data Fetching
- Pre-rendering and Client side Data Fetching
- API routes
- API GET Requests
- API POST Requests
- Dynamic API Routes
- API DELETE Requests
- Catch All API Routes
- APIs and Pre-rendering
- Styling
- Global Styles
- Component Level Styles
- Sass Support
- CSS in JS
- App Layout
- The Head Component
- The Image Component
- Absolute Imports and Module Paths
- Static HTML Exporting
- TypeScript Support
- Redirects
- Environmental Variables
- Authentication in Next.js
- NextAuth Setup
- Sign In and Sign Out
- Client-side Authentication
- Securing Pages Client-Side
- NextAuth Providers
- Server-side Authentication
- Securing Pages Server-side
- Securing API Routes
- Connecting to a Database
- Callbacks
- Deployig Next.js Apps to Vercel

---

## Supplemental Notes

### Difference between rendering methods in React and Next

By default, Next JS pre-renders every page in the application. This means that it generates HTML for each page in advance insead of having it all done by client-side JavaScript

In a React app, the JavaScript is loaded which then executes to load the HTMl elements onto the DOM. We just have a div tag with Id tag equal to root. Once the javascript for the page is loaded, it will exceute in the browser, create the different DOM nodes and mount them onto the root div element. This process is called Hydration.

In a Next app, the pages are pre-rendered automatically by default, meaning the HTML is already generated with the necessary data and then sent to the browser. The JS then loads and makes the page interactive.

### Why pre-render?

1. Pre-rendering improves performance
   1. In a react app, you need to wait for the JavaScript to be executed
   2. Perhaps fetch data from an external API and then render the UI
   3. There is a lag time for the user
   4. With a pre-rendered page, the HTMl is already generated and loads faster
2. Pre-rendering helps with SEO
   1. This isn't as big of an issue with sites that are built behind a login screen, but if you're building something like a blog or an e-commerce site, then SEO is a concern.
   2. With a react app, if the search engine hits your page, it only sees a div tag with id equal to root.
   3. If search engines hit a pre-rendered page, all the content is present in the source code which will help with crawlers that are indexing the page.
   4. If SEO is of concern for app, then pre-rendering is what you want

### Pre-Rendering in Next JS

NextJs supports two forms of pre-rendering

1. Static Generation - Done by default in Next apps when we build for production
   1. Static generation is a method of pre-rendering where the HTMl pages are generated at buildtime
   2. The HTML with all the dats that makesup the content of the web page are gnerwated in advance when you build your applicaiton
   3. Pages can be built once, cahced by a CDN and served to the client almost instantly
   4. Great for blogs, e-commerce, product pages, documentation, and marketing pages
2. Server-side Rendersing

---

#### Original Next.js README info

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
