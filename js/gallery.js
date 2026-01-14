/*Name this external file gallery.js*/

function upDate(previewPic) {
   /* In this function you should 
      1) change the url for the background image of the div with the id = "image" 
      to the source file of the preview image
      
      2) Change the text  of the div with the id = "image" 
      to the alt text of the preview image 
      */
   const div_element = document.querySelector("#image");
   div_element.style.backgroundImage = "url('" + previewPic.src + "')";
   div_element.style.backgroundSize = "cover";
   div_element.innerHTML = previewPic.alt;
   div_element.style.color = "red";
   // p_element.style.borderStyle = "solid";
   // p_element.style.borderColor = "black";
   // p_element.style.borderWidth = "3px";
}

function unDo() {
   /* In this function you should 
  1) Update the url for the background image of the div with the id = "image" 
  back to the orginal-image.  You can use the css code to see what that original URL was
  
  2) Change the text  of the div with the id = "image" 
  back to the original text.  You can use the html code to see what that original text was
  */
   const div_element = document.querySelector("#image");
   div_element.innerHTML = "Hover over an image below to display here.";
   div_element.style.backgroundImage = "url('" + "')";
}

function add_tabfocus(){
   const img_array = document.querySelectorAll(".preview");
   for(let i=0; i<img_array.length; i++){
      img_array[i].setAttribute("tabindex", "0");
      console.log("image" + i)
   }
}
