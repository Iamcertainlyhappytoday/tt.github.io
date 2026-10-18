let showerLoc=document.querySelector('body');
let pp=document.querySelector('#pp');
let pq = document.getElementById('photosays');
let ph = document.querySelector('#photointro h3')
let msg='';
ph.setAttribute('style',"color: darkviolet; size: 1.5rem;");


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
  let answers ={a:'firstbambu',
    a1:'There was air thick with something like wild forest, dense but only a hint as\
   this is the first day and the first few steps on a side road and in the dark. Jet lag \
   or the like causing a slow exit of the residence . These photos are still on the UK \
   clock, so are 7 hours ahead of the actual time. Funny to think how much that is revealed \
   as artificial to me. It is dark and still the afternoon to me really. Sunset is a little \
   after 5pm as we are slightly further north here early in the year and that is when I \
   went out yet it has been a long day and since we arrived early I in fact can be out late \
   and feel this instead of that the time has flown on ahead. The moon is the same for \
   everyone is it I notice as when we spin to face it, pretty much north or south it is the \
   same amount of earth blocking the sun from it?  ',
   b:'greenbetween',
    b1:'The serious urban structures have old established green patches. On closer look they really\
   are often just carved around old landscapes but I think the trees show that this was not the \
   first time as the forest is bambu here',
   c:'arthotel1',
   c1:'Ratty I luv u. Well more an alien come human species of sci-fi was my first impression. A very \
   good piece of art. Perhaps 8m tall, at Art Hotel, Narita. ',
   d:'skywingforever',
   d1:'Luckily no great cumulous on the journey but pretty much bright non stop cloud. Also on the first \
   which was to Milan a  significant  but not complete covering of cloud. So no view of the Alps. This is \
   Japan leg from Shanghai where cloud started to thin at the Islands themselves. ',
   e:'lightdarktrain',
   e1:'A train moving along a long long viaduct. Lots of transport infrastructure is suspended or \
   elevated here so far, also indicated in photos I have seen. I think this is  showing top level authority \
    in the planning. Significant to that there are so many poles, highly anticapted electrical grid \
    with many services. Very tall compared to uk but perhaps they are not normal ones here so far and they \
   for all the bamboo seem generally to be concrete. Alot of what support infrastructure that might be \
    concrete in the UK is metal, the bridge come flyovers at Narita airport for instance are massive \
    diameter girders. That is planning that makes the jungle vegetation near the airport which I still \
    am near in this Narita Gateway Hotel all the more intense and striking.  '}

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
  
