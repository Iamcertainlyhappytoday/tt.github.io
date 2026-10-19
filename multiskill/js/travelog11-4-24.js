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
  let answers ={a:'wildarrival',
    a1:'Well, I swam in that today, the sticks in the photo make it look pretty scary perhaps. The \
    whole vista is strong water to me. This is a decent and dignified place but it has taken time \
    and shaped the people you would think.',
   b:'colorsea1',
    b1:'The view at the end of my bike ride across another bay. It looks massive but I think perhaps is \
    not so many miles. Amazingly built up but only right on the shore but by that principle the development \
    is not limited.',
   c:'sunarrives',
   c1:'The sun is up it feels like a minute after the light was lacking in the morning but calling it the \
   start of the day. Darkness was sudden too last night on arrival. Considering how necessary I needed it \
   to be the setting up of somewhere to stay it was a good thing too arrive just as darkness fell. Kureru is \
   it?',
   d:'promontorysparkle',
   d1:'I have sea terms on my mind. An ithsymus, a finger of land into the sea but from a different direction \
   rather than feature it is a bluff. Seriously featured like this is it a promontory?',
   e:'sunsoon',
   e1:'The sun seemed to be there but I did not really know where. One minute later it had decided. It is \
   like my coming to the Pacific or the Pacific coming being there. '}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'wildarrival':
        msg2=' : '+ answers.a1;
        break;
    case 'colorsea1':
        msg2=' : '+ answers['b1'];
        break;
    case 'sunarrives':
        msg2=' : '+ answers['c1'];
        break;
    case 'promontorysparkle':
        msg2 =' : '+ answers['d1'];
        break;
    case 'sunsoon':
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
  
