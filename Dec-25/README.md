Dec-25
1. HTML / CSS Revision.
-> DOM  / BOM / CSSOM

q. What is DOM?
-> Document Object Model
-> It is a global object used to manipulate the webpage.
-> It is a tree like structure with which we can change or edit any node (Element).
-> It contains of Nodes.

-> Attributes are additional properties which are part of your HTML element.
<div id="something" class="" onClick="" >
  <p></p>
</div>

Tag vs Element
-> Tags are anything between <>.
-> Elements contain stuff between the tags.
-> Tags are used to hold the HTML element.
-> Tag is singular. Element can have children also.

Node vs Element.
-> Node we say when we are talking about JS point of vide of DOM tree.
-> Element we saw when we are talking from HTML point of view.

-> What is BOM?
-> Browser Object Model
-> It is window object.
-> Manipulating the browser will be done via BOM.
-> It is parent of DOM.

window.document == document -> true;

-> What is CSSOM?
-> CSS Object Model
-> The tree of document containing the style.
-> All the style properties are stored here.


-> What is a Render Tree?
-> Combination of CSSOM and DOM.

-> What is Rendering?
-> Showing of data on the Viewport.
-> Displaying the document on the Viewport.
-> Rendering includes style.
-> Displaying the Render Tree (parsed) on the viewport.

-> Whenever we load a page. Firstly the HTML document is loaded. After that while parsing, the engine will see the CSS file which will create a CSSOM then the JS file is seen and added to the DOM. Finally they are combined into a Render Tree which is then rendered on the viewport.

-> Why do we write CSS before JS?
-> To show the style first as priority. The UI is more important. For better looks
-> Looks are more important than functionality.

- Marquee -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee


-> HTML5 -> 13 years ago. (22 Jan 2008) -> HTML 5.3
-> Introduction of HTML5 tags.

-> Adding favicon. (The image shown next to the title).

-> Meta
--> It gives additional information about our webpage.
-> It is not mandatory, but good to have.
-> It is used for SEO. -> Search Engine Omptimzation. -> Priority of the search result.
-> It gives a small preview when we share the webpage on any social media or whatever.
-> https://developers.facebook.com/docs/sharing/webmasters/

--> HTML Form.

--> Fieldset -> Used to combine (group) multiple inputs together
--> Legend -> Title of the fieldset.
--> Label -> Used to give label / additional text to the input.

-> ARIA -> Accessible Rich Internet Applications.
-> https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA


-> Different Selectors:
-> type ✔
-> id ✔
-> class ✔
-> universal ✔
-> attribute ✔
-> combinators (Multiple selectors together)
-> pseudo (elements + class)
-> grouping

-> Created a simple password validation (Comparing if both passwords are same).
-> Created a HTML app to show the sum of two numbers. 

-> Margin gives outer space and padding gives inner space.

-> Media Query -> A feature of CSS with which you can give certain conditions which if satisfied by the browser, the given CSS will be applied.


Assignment1:
-> Make your porfolio / landing page responsive.

Assignment2: (Not Mandatory)
-> Make the form responsive.


-> CSS.
--> Selectors / Specificity
--> CSS functions.
--> calc
--> repeat
--> var

--> Media Queries (Making page responsive) / Animation.