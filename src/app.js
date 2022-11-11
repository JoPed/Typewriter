import TypeWriter from "./Typewriter";
import "./scss/TypeWriter.scss";

// **  IIFE: Immediately Invoked Function Expression  */

(function () {

  
  let heading = document.createElement("h1");
  
  
  let headingText = `This is a typewriter demo.`;
  
  heading.innerHTML = `  
  <span class="blinkCursorStart"></span>
  ${headingText}
  <span class="blinkCursorEnd"> </span>
  `;
  
  document.body.appendChild(heading);

  const writer = new TypeWriter(headingText, heading);
  
  writer.init();


})();
