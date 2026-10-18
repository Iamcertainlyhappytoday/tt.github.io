
  //mouse identifier 
  

 //color changer
const box = document.querySelector('#box');
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});
/*    
 [document.querySelector('#yellow'), document.querySelector('#buttonaboutt') ].forEach(item => {
  item.addEventListener('mouseover', event1 => {
item.style="background-color: yellow; color: darkblue;"
    //handle click
  })
}) */
//big div selector
/*let vw= document.getElementById('yellow');
  vw.addEventListener("mouseover", v) 
function v() {    
      vw.style="background-color :violet";    
  };
  vw.addEventListener("mouseout", w)
  function w() {
    vw.style="background-color:khaki" ;
    
  };*/
//unknow use
/*let clr2 =document.querySelector('.buttonabout');*/
  
//another unknown function
/*let yellow= document.querySelector('.yellow');
changeStyle('yellow', 'yellow');*/
let addera= document.querySelector('.highlightb');
addera.setAttribute('className', 'yellow');
