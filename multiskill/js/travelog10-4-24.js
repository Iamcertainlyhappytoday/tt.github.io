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
  let answers ={a:'cherrysunrise',
    a1:'This contrast caught my attention.  The forest did it naturally. Sakura is larger, more \
    open as it gets larger too but must be capable in a forest of commanding the space to look \
    like that.',
   b:'fieldreflect',
    b1:'The amount of water by irrigation was going to catch my eye as education the next few days. \
    Prior to that it was obvious but a lot of rain had fell. ',
   c:'ratsday',
   c1:'The taller character is more ready to see.',
   d:'gateway',
   d1:'The world has different architects to Britain. Skyscrapers perhaps not but the environment still \
   looks different. Japan is like a developping country the amount of farming land being cleared so \
   far but that will change the next few days with fields like everywhere on a local scale of cultivation \
   I think, water shimmering.',
   e:'planeapproach',
   e1:" I had figured the village of skyscrapers hotels would make for no contact with the real world but \
   maybe most people are here for airport leaving the next day more than arrivals. The skyline is striking \
   but perhaps is why so much old land it is is more open to development. I had thought bamboo shoots being eaten \
   was a sustenance thing but don't know, perhaps a delicacy.   "}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'firstbambu':
        msg2=' : '+ answers.a1;
        break;
    case 'greenbetween':
        msg2=' : '+ answers['b1'];
        break;
    case 'arthotel1':
        msg2=' : '+ answers['c1'];
        break;
    case 'skywingforever':
        msg2 =' : '+ answers['d1'];
        break;
    case 'lightdarktrain':
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
  
