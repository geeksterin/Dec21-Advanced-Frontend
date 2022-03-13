Mar-12

1. React Router:
-> Provides routing for react application. By default, react does not have any routing. 

-> npm install react-router-dom

Docs - https://reactrouter.com/docs/en/v6/getting-started/tutorial

-> Material UI
-> It is a UI Library built specifically for React apps.
->https://mui.com/getting-started/installation/


-> npm install @mui/material @emotion/react @emotion/styled

For icons -> 
npm install @mui/icons-material

CSS Flexbox - https://css-tricks.com/snippets/css/a-guide-to-flexbox/


Commonly:
-> Arrays
-> String maipulation
-> Linked List (Traversal, search, loop detection, merging or swapping).
-> Stacks and Queues.

Approach 1:
Query Parameter -> 

http://localhost:3000/detail?movie_id=12345 
https://www.youtube.com/results?search_query=mobiles
http://localhost:3000/detail?id=tt0133093
http://localhost:3000/detail?id=tt10838180


let [searchParams, setSearchParams] = useSearchParams();
const value = searchParams.get('key');
{value}



Approach 2:
Path Parameter -> 
https://www.instagram.com/yush.dev/
https://github.com/aayusharyan
http://localhost:3000/detail/tt0133093

const params = useParams();
{parms.key}

const {key} = useParams();
{key}