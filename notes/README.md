# Supplemental Notes

## Notes that don't belong in the code

### Difference between rendering methods in React and Next

By default, Next JS pre-renders every page in the application. This means that it generates HTML for each page in advance insead of having it all done by client-side JavaScript

In a React app, the JavaScript is loaded which then executes to load the HTMl elements onto the DOM. We just have a div tag with Id tag equal to root. Once the javascript for the page is loaded, it will exceute in the browser, create the different DOM nodes and mount them onto the root div element. This process is called Hydration.

In a Next app, the pages are pre-rendered automatically by default, meaning the HTML is already generated with the necessary data and then sent to the browser. The JS then loads and makes the page interactive.

#### Why pre-render?

1. Pre-rendering improves performance
   1. In a react app, you need to wait for the JavaScript to be executed
   2. Perhaps fetch data from an external API and then render the UI
   3. There is a lag time for the user
   4. With a pre-rendered page, the HTMl is already generated and loads faster
2. Pre-rendering helps with SEO
   1. This isn't as big of an issue with sites that are built behind a login screen, but if you're building a blog or an e-commerce site, then SEO is a concern.
   2. With a react app, if the search engine hits your page, it only sees a div tag with id equal to root.
   3. If search engines hit a pre-rendered page, all the content is present in the source code which will help with crawlers that are indexing the page.
   4. If SEO is of concern for app, then pre-rendering is what you want

#### How do you pre-render?
