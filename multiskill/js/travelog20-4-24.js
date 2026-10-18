let showerLoc=document.querySelector('body');
let pp=document.querySelector('#pp');
let pq = document.getElementById('photosays');
let ph = document.querySelector('#photointro h3')
let msg='';
ph.setAttribute('style',"color: darkviolet; size: 1.5rem;");

showerLoc.addEventListener('mouseover', shower, false);
function shower(e){  
        pp.innerHTML=e.target.alt+ '<br>'+
          e.target.tagName +'<br>'+'class ='+ e.target.classList
        + ' id = ' + e.target.id;
        
}
function galeria(e) {
    if (!e.target.closest('.item')) return;
   let  hero = document.querySelector('div[data-pos="0"]');   
    let target = e.target.parentElement;
    [target.dataset.pos,hero.dataset.pos] = [hero.dataset.pos,target.dataset.pos];
    /*alter();*/pq.innerHTML=e.target.alt;
  msg=e.target.alt;
  
    altdetails();
}  
let galerialoc = document.getElementById('galeria');  
galerialoc.addEventListener('click',galeria,false);

function altdetails(){
  let answers ={a:'waves1',
    a1:'Learning to paint the sea, it is a pattern really that works and so many different ones can do  it.',
   b:'Thecastle',
    b1:'Gorgeous art and climbing and opportunities if you are fit. However this castle is less of a walk and still a good \
            view. Again the pattern is the idea, slightly less illustrative.',
   c:'waves2',
   c1:'Joining the first image to make an endless collage.',
   d:'waves3',
   d1:'Slightly angry, maybe moving anyhow I hope.',
   e:'waves4',
   e1:'As long as I feel movement then the pattern is to keep as a reference. '}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'waves1':
        msg2=' : '+ answers.a1;
        break;
    case 'Thecastle':
        msg2=' : '+ answers['b1'];
        break;
    case 'waves2':
        msg2=' : '+ answers['c1'];
        break;
    case 'waves3':
        msg2 =' : '+ answers['d1'];
        break;
    case 'waves4':
        msg2 =' : '+ answers['e1'];
        break;
    default:
        pq.textContent='balls : ';
        break;
                /*pq.textContent=answers.x;
                */
   }
   pq.innerHTML+=msg2;
   pq.setAttribute('style', "color: blue;");
   document.querySelector('#photointro h3').textContent='';
  }
  let addera= document.querySelector('.highlightb');
  addera.setAttribute('className', 'yellow');
  
