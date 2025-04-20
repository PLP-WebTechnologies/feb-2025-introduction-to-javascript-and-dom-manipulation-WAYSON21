  function changeText() {
    const title = document.getElementById("main-title");
    title.textContent = "Hello, I love javascript!";
  }
  
  function modifyStyles() {
    const title = document.getElementById("main-title");
    title.style.fontSize = "40px";
    title.style.color = "purple";
    title.classList.add("dynamic-style"); 
  }
  
 
  function toggleElement() {
    const container = document.getElementById("new-element-container");
  
   
    if (document.getElementById("dynamic-element")) {
   
      container.removeChild(document.getElementById("dynamic-element"));
    } else {
      
      const newElement = document.createElement("div");
      newElement.id = "dynamic-element";
      newElement.classList.add("new-element");
      newElement.textContent = "This is a new added element. It's like magic!";
      container.appendChild(newElement);
    }
  }
  