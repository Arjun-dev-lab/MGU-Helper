const allElements = document.querySelectorAll('*');

allElements.forEach(element => {
  // Check if the element has an inline style and if it sets the 'color' property
  if (element.hasAttribute('style') && element.style.color === 'rgb(255, 255, 0)') {
    // Change the color to rgb(76, 175, 80)
    element.style.color = "rgb(76, 175, 80)";
  }
});


const paths = document.querySelectorAll('path');

// Loop through and remove each <path> element
paths.forEach(path => path.remove());