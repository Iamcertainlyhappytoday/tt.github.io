

let entryBLast;
let fileble= [];
let filebleStore=[];
let capture=document.querySelector('#tablearea');
let tbody=document.querySelector('#tablearea tbody');
let entryB=document.querySelector('#entryB');
let entryE=document.querySelector('#entryE');
let arrB=document.getElementById('entryArr');
let entryTa=document.getElementById('tablenew');
let arrBa=document.getElementById('entryArra');  //new
let entryTaa=document.getElementById('tablenew')        //new
let demo2=document.querySelector('#demo2');
demo2.setAttribute('class','hide');
let demo3=document.querySelector('#demo3');
let demo4=document.querySelector('#demo4');
demo4.setAttribute('class', 'hideno')
let demo5=document.querySelector('#demo5');
let demo6=document.querySelector('#demo6');
entryB.addEventListener('click', namenter);
let entryBa=document.querySelector('#entryBa');//new
entryBa.addEventListener('click', namenter);//new
entryE.addEventListener('click',newEdition);
let entryEa=document.querySelector('#entryEa');//new
entryEa.addEventListener('click',newEditiona);//new
let togitt=document.getElementById('togit');
togitt.addEventListener('click', togit);        //new
let togitta=document.getElementById('togita');      //new
togitta.addEventListener('click', togit);
arrB.addEventListener('click', fileblll);  
entryE.setAttribute('class','hide');
arrBa.addEventListener('click', fileblll);  
entryEa.setAttribute('class','hide');
let imageFile=[/*of course you cannot save the image with the wrong format*/
        {name:'rei', img:'hotdimg/rei.JPG', alt:'rei'},
        {name:'hirano', img:'hotdimg/hirano.JPG', alt:'hirano'},
        {name:'stairwell', img:'hotdimg/stairwell.JPG', alt:'stairwell'},
        {name:'reiandkomoro', img:'hotdimg/reiandkomoro.JPG', alt:'reiandkomoro'},
        {name:'airdrop', img:'hotdimg/airdrop.JPG', alt:'airdrop'},
        {name:'brazil', img:'hotdimg/brazil.JPG', alt:'brazil'},
        {name:'cannes', img:'hotdimg/cannes.JPG', alt:'cannes'},
        {name:'canaille', img:'hotdimg/canaille.JPG', alt:'canaille'},
        {name:'chippingandcracking', img:'hotdimg/chippingandcracking.JPG', alt:'chippingandcracking'},
        {name:'cygnets', img:'hotdimg/cygnets.JPG', alt:'cygnets'},
        {name:'field', img:'hotdimg/field.JPG', alt:'field'},
        {name:'kinnanamor', img:'hotdimg/kinnanamor.JPG', alt:'kinnanamor'},
        {name:'laigueglia', img:'hotdimg/laigueglia.JPG', alt:'laigueglia'},
        {name:'meetingpath', img:'hotdimg/meetingpath.JPG', alt:'meetingpath'},
        {name:'openjunction', img:'hotdimg/openjunction.JPG', alt:'openjunction'},
        {name:'raneshut', img:'hotdimg/raneshut.JPG', alt:'raneshut'},
        {name:'startledsquirrel', img:'hotdimg/startledsquirrel.JPG', alt:'startledsquirrel'},
        {name:'stellamarz', img:'hotdimg/stellamarz.JPG', alt:'stellamarz'},
        {name:'theduel', img:'hotdimg/theduel.JPG', alt:'theduel'},
        {name:'ventimiglia', img:'hotdimg/ventimiglia.JPG', alt:'ventimiglia'},
        {name:'villeneuve', img:'hotdimg/villeneuve.JPG', alt:'villeneuve'},
        {name:'voltaggio', img:'hotdimg/voltaggio.JPG', alt:'voltaggio'},
        {name:'wierdtrees', img:'hotdimg/wierdtrees.JPG', alt:'wierdtrees'},
        {name:'envau', img:'hotdimg/envau.JPG', alt:'envau'},
        {name:'envauposter', img:'hotdimg/envauposter.JPG', alt:'envauposter'},
        {name:'thecastle', img:'hotdimg/thecastle.JPG', alt:'thecastle'},
        {name:'waves1', img:'hotdimg/waves1.JPG', alt:'waves1'},
        {name:'waves2', img:'hotdimg/waves2.JPG', alt:'waves2'},
        {name:'hebrideanshore', img:'hotdimg/hebrideanshore.JPG', alt:'hebrideanshore'},
        {name:'albacross', img:'hotdimg/albacross.JPG', alt:'albacross'},
        {name:'tadthetooth', img:'hotdimg/tadthetooth.JPG', alt:'tadthetooth'},
        {name:'thekingreturns', img:'hotdimg/thekingreturns.JPG', alt:'thekingreturns'},
        {name:'marybean', img:'hotdimg/marybean.JPG', alt:'marybean'},
        {name:'tailorstale', img:'hotdimg/tailorstale.JPG', alt:'tailorstale'},
        {name:'froggattdreaming', img:'hotdimg/froggattdreaming.JPG', alt:'froggattdreaming'},
        {name:'curbarautumn', img:'hotdimg/curbarautumn.JPG', alt:'curbarautumn'},
        {name:'curbartrees', img:'hotdimg/curbartrees.JPG', alt:'curbartrees'},
        {name:'stanageskyline', img:'hotdimg/stanageskyline.JPG', alt:'stanageskyline'},
        {name:'stanagegreen', img:'hotdimg/stanagegreen.JPG', alt:'stanagegreen'},
        {name:'froggattsky', img:'hotdimg/froggattsky.JPG', alt:'froggattsky'},
        {name:'bentswhite', img:'hotdimg/bentswhite.JPG', alt:'bentswhite'},
        {name:'grenwood', img:'hotdimg/grenwood.JPG', alt:'grenwood'},
        {name:'lotrfight', img:'hotdimg/lotrfight.JPG', alt:'lotrfight'},
        {name:'moorhallres', img:'hotdimg/moorhallres.JPG', alt:'moorhallres'},
        {name:'airdrop1000', img:'hotdimg/airdrop1000.JPG', alt:'airdrop1000'},
        {name:'lookingberis', img:'hotdimg/lookingberis.JPG', alt:'lookingberis'},
        {name:'colwyn', img:'hotdimg/colwyn.JPG', alt:'colwyn'},
        {name:'llangollen', img:'hotdimg/llangollen.JPG', alt:'llangollen'},
        {name:'flank', img:'hotdimg/flank.JPG', alt:'flank'},
        {name:'psmoorcolour', img:'hotdimg/psmoorcolour.JPG', alt:'psmoorcolour'},
        {name:'stabb', img:'hotdimg/stabb.JPG', alt:'stabb'},
        {name:'tweedbreeze', img:'hotdimg/tweedbreeze.JPG', alt:'tweedbreeze'},
        {name:'stabbird', img:'hotdimg/stabbird.JPG', alt:'stabbird'},
        {name:'eastshore', img:'hotdimg/eastshore.JPG', alt:'eastshore'},
        {name:'wavesmove', img:'hotdimg/wavesmove.JPG', alt:'wavesmove'},
        {name:'buccleugh', img:'hotdimg/buccleugh.JPG', alt:'buccleugh'},
        {name:'neepsend', img:'hotdimg/neepsend.JPG', alt:'neepsend'},
        {name:'stagecoach', img:'hotdimg/stagecoach.JPG', alt:'stagecoach'},
        {name:'wavesincoming', img:'hotdimg/wavesincoming.JPG', alt:'wavesincoming'},
        {name:'katerineknows', img:'hotdimg/katerineknows.JPG', alt:'katerineknows'},
        {name:'konstantinepermeke', img:'hotdimg/konstantinepermeke.JPG', alt:'konstantinepermeke'},
        {name:'hummingbird', img:'hotdimg/hummingbird.JPG', alt:'hummingbird'},
        {name:'thelook', img:'hotdimg/thelook.JPG', alt:'thelook'},
        {name:'reedstyle', img:'hotdimg/reedstyle.JPG', alt:'reedstyle'},
        {name:'seals', img:'hotdimg/seals.JPG', alt:'seals'},
        {name:'sealsatplay', img:'hotdimg/sealsatplay.JPG', alt:'sealsatplay'},
        {name:'wolff', img:'hotdimg/wolff.JPG', alt:'wolff'},
        {name:'belledbien', img:'hotdimg/belledbien.JPG', alt:'belledbien'},
        {name:'dinodina', img:'hotdimg/dinodina.JPG', alt:'dinodina'},
        {name:'axethesitters', img:'hotdimg/axethesitters.JPG', alt:'axethesitters'},
        {name:'pecrag', img:'hotdimg/pecrag.JPG', alt:'pecrag'},
        {name:'saunter', img:'hotdimg/saunter.JPG', alt:'saunter'},
        {name:'swalline', img:'hotdimg/swalline.JPG', alt:'swalline'},
        {name:'couplewalk', img:'hotdimg/couplewalk.JPG', alt:'couplewalk'},
        {name:'gtweed', img:'hotdimg/gtweed.JPG', alt:'gtweed'},
        {name:'jay', img:'hotdimg/jay.JPG', alt:'jay'},
        {name:'letsdance', img:'hotdimg/letsdance.JPG', alt:'letsdance'},
        {name:'saeko', img:'hotdimg/saeko.JPG', alt:'saeko'},
        {name:'idfy', img:'hotdimg/idfy.JPG', alt:'idfy'},
        {name:'jaygallery', img:'hotdimg/jaygallery.JPG', alt:'jaygallery'},
        {name:'froggattdetail', img:'hotdimg/froggattdetail.JPG', alt:'froggattdetail'},
        {name:'chainsnow', img:'hotdimg/chainsnow.JPG', alt:'chainsnow'},
        {name:'climbsounds', img:'hotdimg/climbsounds.JPG', alt:'climbsounds'},
        {name:'rosedev', img:'hotdimg/rosedev.JPG', alt:'rosedev'},
        {name:'froggattarrive', img:'hotdimg/froggattarrive.JPG', alt:'froggattarrive'},
        {name:'congocorner', img:'hotdimg/congocorner.JPG', alt:'congocorner'},
        {name:'skyelandview', img:'hotdimg/skyelandview.JPG', alt:'skyelandview'},
        {name:'froggattshadown', img:'hotdimg/froggattshadown.JPG', alt:'froggattshadown'},
        {name:'froggattdreaming2', img:'hotdimg/froggattdreaming2.JPG', alt:'froggattdreaming2'},
        {name:'froggarrive', img:'hotdimg/froggarrive.JPG', alt:'froggarrive'},
        {name:'waves5', img:'hotdimg/waves5.JPG', alt:'waves5'},
        {name:'greenpie', img:'hotdimg/greenpie.JPG', alt:'greenpie'},
        {name:'bwapproach', img:'hotdimg/bwapproach.JPG', alt:'bwapproach'},
        {name:'waterscape', img:'hotdimg/waterscape.JPG', alt:'waterscape'},
        {name:'limestoneframe', img:'hotdimg/limestoneframe.JPG', alt:'limestoneframe'},
        {name:'waveridge', img:'hotdimg/waveridge.JPG', alt:'waveridge'},
        {name:'xwing', img:'hotdimg/xwing.JPG', alt:'xwing'},
        {name:'morrehall', img:'hotdimg/morrehall.JPG', alt:'morrehall'},
        {name:'gwells', img:'hotdimg/gwells.JPG', alt:'gwells'},
        {name:'candyridge', img:'hotdimg/candyridge.JPG', alt:'candyridge'},
        {name:'broomrocks', img:'hotdimg/broomrocks.JPG', alt:'broomrocks'}, 
        {name:'refind', img:'hotdimg/refind.JPG', alt:'refind'},       
        {name:'riverain', img:'hotdimg/riverain.JPG', alt:'riverain'},
        {name:'leopard', img:'hotdimg/leopard.JPG', alt:'leopard'},
        {name:'cragincrop', img:'hotdimg/cragincrop.JPG', alt:'cragincrop'},
        {name:'maneqbw', img:'hotdimg/maneqbw.JPG', alt:'maneqbw'},
        {name:'maneqblue', img:'hotdimg/maneqblue.JPG', alt:'maneqblue'},
        {name:'maneqorange', img:'hotdimg/maneqorange.JPG', alt:'maneqorange'}, 
        {name:'maneqdark', img:'hotdimg/maneqdark.JPG', alt:'maneqdark'}        
                                                                            
];
let startTa= tbody.innerHTML.replace(/,/g, '\/') ;        
let origTa = startTa.replace(/<tr>/g, '');
    origTa = origTa.replace(/<\/tr>/g, ',');
    origTa = origTa.replace(/<td.+>$/g, '');
    origTa = origTa.replace(/\s+/g, '');    
let origParts = origTa.split(',');//array now to get key/values on each line  
for(let j=0; j<origParts.length-1; j++){   
        filebleStore.push({'[]':'','thumb':'','name':'','status':'','description':''});   
        let newParts= origParts[j].replace(/<\/td>/g, ',').trim();//makes each part distinct array
        newParts = newParts.split(',') ;            // console.log(newParts) ;       
        filebleStore[j]['[]']= newParts[0];
        let thumber= filebleStore[j]['name']=newParts[2];        
        let thumbera=  thumber.replace(/<td.*>/,'');  
        if(filebleStore[j]['thumb']= `<a href='hotdimg/${thumbera}.JPG'>img<\a>`){       
            filebleStore[j]['thumb']= `<a href='hotdimg/${thumbera}.JPG' target='_blank'>img<\a>`;
        }/*
        if(filebleStore[j]['thumb']= `<a href='hotdimg/${thumbera}.PNG'>img<\a>`){ 
            filebleStore[j]['thumb']= `<a href='hotdimg/${thumbera}.PNG' target='_blank'>img<\a>`;    
        } */           
        filebleStore[j]['status']=newParts[3];  
        filebleStore[j]['description']=newParts[4];        
}
let arrby=[]
function arrbey(){
    if (arrby.length==1){
        demo4.innerHTML='';
        arrby=[];
    }
}
function fileblll(){
    arrby.push({'[]':'','thumb':'','name':'','status':'','description':''});    
    arrbey();  /*This stops the arrays stacking up each time you press for them
    then below I also make it toggle hidden. It should only be 1 long once as well.*/
    demo4.classList.toggle('display'); 
        for(let i=0; i<filebleStore.length; i++){               
        let finder="{'[]':'"+filebleStore[i]['[]']+
         "'"+",'thumb':'"+filebleStore[i]['thumb']+
        "'"+",'name':'"+ filebleStore[i]['name']+
        "'"+",'status':'"+filebleStore[i]['status']+
        "'"+",'description':'"+filebleStore[i]['description']+
        "'},";   
        demo4.innerHTML+=finder+'<br>';     
        }          
        for(let j=0; j<fileble.length; j++){               
        let finder="{'[]':'"+fileble[j]['[]']+
        "'"+",'thumb':'"+ fileble[j]['thumb']+
        "'"+",'name':'"+ fileble[j]['name']+
        "'"+",'status':'"+fileble[j]['status']+
        "'"+",'description':'"+fileble[j]['description']+
        "'},";   
        demo4.innerHTML+=finder+'<br>';           
        }    
} 
function togit(){
        //demo5.classList.toggle('hide');   
        if(demo5.innerHTML==''){
    demo5.textContent=`${capture.innerHTML}`;
        }
        else{
            demo5.innerHTML='';
        }
}
function namenterprepb4(){//getting the prior table elements live with edit on them
    let tbodyC=document.querySelectorAll('tbody tr');
    let l=tbodyC.length;  
    for(i=0; i<l; i++){ 
        let tbD=tbodyC[i].querySelectorAll('td');
        let ll=tbD.length;
        for(let j=0; j<ll; j++){
            tbD[j].addEventListener('click',edit);
           let k=j;
            switch(k){
                case 0:k='a';
                break;
                case 1:k='b';
                break;
                case 2:k='c';
                break;
                case 3:k='d';
                break;
                case 4:k='e';
                break;
                default:console.log('no valid data switch')
            }
            tbD[j].setAttribute('id',i+k)
        }
    }       
}
namenterprepb4();   
function namenter(){   
    fileble.push({'[]':'',thumb:'',name:'',status:'',description:''});//each time a row is prepped  
    let l=(fileble.length-1); 
    let fsl=filebleStore.length;
    let fsll=l+fsl; //make the 2 stores into 1
    let k=fsll.toString();    
    let entern=document.querySelector('#inputter').value||document.querySelector('#inputtera').value; //new alteration

    if(entern){   
        let grab=imageFile.length;         
        let td=document.createElement('td');              
        td.setAttribute('id', k + 'b'); 
        td.addEventListener('click', edit)      
        for(let i=0; i<grab; i++){    
            if(imageFile[i]['name']==entern){                 
                fileble[l]['thumb']=imageFile[i]['img'];             
                if(imageFile[i]['img']){ 
                    let n= imageFile[i]['img'];                                  
                    let tDatai=document.createElement('img');            
                    tDatai.style= "width:65px; height: 39px";                 
                    tDatai.setAttribute('src',n);                    
                    td.append(tDatai);   
                }       
            }        
        }  
        fileble[l]['name']=entern;
        entryBLast='status of '+ fileble[l]['name'];    
        let tRow=document.createElement('tr');
        let tData=document.createElement('td'); 
        tData.setAttribute('id', k + 'a')
        tData.addEventListener('click', edit) 
        let tData1=document.createElement('td'); 
        tData1.setAttribute('id', k + 'c');
        tData1.addEventListener('click', edit) 
        let td1=tData.textContent=fsll;  
        let td2=tData1.textContent=entern;      
        tRow.append(tData,td, tData1);
        tbody.append(tRow);     
        document.querySelector('#inputter').value='';   
        document.querySelector('#inputtera').value='';  //new
        descenterPrep()
    }   
}
function descenterPrep(){
    document.querySelector('#inputter').placeholder=entryBLast;  
    document.querySelector('#inputtera').placeholder=entryBLast;   //new      
    entryB.removeEventListener('click', namenter);
    entryB.addEventListener('click', descenter);
    entryBa.removeEventListener('click', namenter);         //new
    entryBa.addEventListener('click', descenter);           //new
}
function descenter(){     
    let enterd=document.querySelector('#inputter').value||document.querySelector('#inputtera').value;//new altered
    let l=fileble.length-1;  
    let k=l.toString();     
    if(enterd){ 
    fileble[l]['status']=enterd;
    entryBLast='description of '+fileble[l]['name'];    
    let tData1=document.createElement('td');
    tData1.setAttribute('id', k + 'd');
    tData1.addEventListener('click', edit) 
    let td1=tData1.textContent=enterd;    
    tbody.lastChild.append(tData1);
    document.querySelector('#inputter').value='';
    document.querySelector('#inputtera').value=''; //new
    locenterPrep(); 
    }   
}
function locenterPrep(){
    document.querySelector('#inputter').placeholder=entryBLast;
    document.querySelector('#inputtera').placeholder=entryBLast;
    entryB.removeEventListener('click', descenter);
    entryB.addEventListener('click', locenter);
    entryBa.removeEventListener('click', descenter);            //new
    entryBa.addEventListener('click', locenter);                //new
}
function locenter(){     
    let enterl=document.querySelector('#inputter').value||document.querySelector('#inputtera').value;   //new altered
    let l=fileble.length-1;    
    fileble[l]['description']=enterl; 
    if(enterl){  
    entryBLast='Next Name';
    let tData1=document.createElement('td');
    let k=l.toString()
    tData1.setAttribute('id', k + 'e');   
    tData1.addEventListener('click', edit)  
    //tData1.setAttribute('class', 'tawidth')
    let td1=tData1.textContent=enterl;         
    //tbody1=tbody;
    tbody.lastChild.append(tData1);    
    document.querySelector('#inputter').value='';
    document.querySelector('#inputtera').value='';
    namenterPrep();  
    }  
}
function namenterPrep(){    
    document.querySelector('#inputter').placeholder='Next name';
    document.querySelector('#inputtera').placeholder='Next name';
    entryB.removeEventListener('click',locenter);
    entryB.addEventListener('click', namenter);
    entryBa.removeEventListener('click',locenter);      //new
    entryBa.addEventListener('click', namenter);        //new
    demo2.textContent=tablearea.innerHTML;
}
let editing;
let editArr=[];
let demo=document.querySelector('#demo1');
let ender;
function edit(e){     
    let el=editArr.length-1;
    if(el==0){ 
       //edit();
       return;       
    }
    editing=e.target; 
    ender=editing.getAttribute('id');
    if(ender){
        editOn();
    }
    
}
function editOn(){        
    editArr.push(editing);              
    editing.setAttribute('class', 'red') ;     
    entryB.setAttribute('class', 'hide');    
    entryBa.setAttribute('class', 'hide');     //new 
    editor();
}
function editor(){  //Edit button is revealed   
    entryE.removeAttribute('class', 'hide');     
    entryEa.removeAttribute('class', 'hide');     //new
   
   
    let whatrows=document.querySelectorAll('.row textarea ');    //----new  alteration  
    
    whatrows[0].setAttribute('placeholder', editing.textContent);    
    whatrows[0].value=editing.textContent; 
    whatrows[1].setAttribute('placeholder', editing.textContent);    
    whatrows[1].value=editing.textContent;  
    editing.textContent='please update above' ;//edit button fires newEdition     
}
function childimager(){
    let grab=imageFile.length;  
    let ll=document.querySelectorAll('tr');  
    let l=ll.length;
    let dz=ender.match(/\d+(?=\w)/).toString(); 
    for(let j=0;j<l; j++){
        for(let i=0; i< grab; i++){ 
            if(ll[ Math.floor(dz)+1].children[2].textContent==imageFile[i]['name']){
                // if(imageFile[i]['name']==ll[ Math.floor(dz)+1].children[2].textContent)     
                console.log('has child image'); 
                let tdd=document.createElement('td')
                ll[ Math.floor(dz)+1].children[1].replaceWith(tdd);             
                let n=imageFile[i]['img']
                let newI=document.createElement('img');
                newI.setAttribute('src', n)
                
                newI.style=`"alt: imageFile[i]['name'] ;"`
                newI.style="loading:lazy" ; 
                newI.style= "width:65px; height: 39px";         
                ll[ Math.floor(dz)+1].children[1].append(newI);  
                return;            
            } else   if(ll[ Math.floor(dz)+1].children[2].textContent!==imageFile[i]['name']){   
                let tdd=document.createElement('td')
                ll[ Math.floor(dz)+1].children[1].replaceWith(tdd);      
            }   
        }
    }console.log('does not have a child image')
}   
function imager(){
    let grab=imageFile.length;  
    let ll=document.querySelectorAll('tr');  
    let dz=ender.match(/\d+(?=\w)/).toString(); 
    for(let i=0; i< grab; i++){
        if(ll[ Math.floor(dz)+1].children[2].textContent==imageFile[i]['name']){
           // if(imageFile[i]['name']==ll[ Math.floor(dz)+1].children[2].textContent)     
                console.log('has child image');
                childimager();
                return;                
    }         
    } console.log('does not have child image')  
    childimager();
}
function newEdition(){   
    whatrow=document.querySelector('#inputter').value;
    if(whatrow){
    editing.textContent=whatrow;
    editing.value=whatrow;
    
    }
    newEdEd();
}
function newEditiona(){    
    whatrow=document.querySelector('#inputtera').value;     
    if(whatrow){               
        editing.textContent=whatrow;
        editing.value=whatrow;
        
    }
    newEdEd();   
}     
function newEdEd(){    
    //editing.textContent=whatrow;  
    let ppp=editing.parentElement;       
    let a=ender.match(/(?<!\w)\d+/); 
    let dz=ender.match(/\d+(?=\w)/).toString(); 
    let ll=document.querySelectorAll('tr');     //image check bit   
    if((ender.match(/c$/))){
        imager()
    }
    console.log(ppp.children.length) 
    console.log(dz);
    let pH;
    
    if(ppp.children.length!==5 ){    
        console.log(ll[ Math.floor(dz)+1].children[2].textContent)  
         editing.textContent=  ll[ Math.floor(dz)+1].children[2].textContent ;
        let picupdate ;
        if(ender.match(/a$/)){         
            pH='Status of  '+editing.textContent; //+editArr[dz+1]['Name'];                  
        }else if(ender.match(/c$/)){         
            pH='Status of  '+editing.textContent; //get the image updated if the name changed
        }else if(ender.match(/d$/)){              
                pH= 'Description of ' +editing.textContent//fileble[a]['Name'];                     
        }else if(ender.match(/e$/)){              
                pH= 'Next Name ' //fileble[a]['Name'];                     
        }
    }
     if(ppp.children.length==5 ){  
        let f=filebleStore.length;       
        let r=tbody.querySelectorAll('tr').length ;       
        if (r==f){
            pH='enter new/next details';
        }else{     
        pH=pH;
        }
        console.log('"spaces"')
    }    
    document.querySelector('#inputter').value='';
    document.querySelector('#inputter').placeholder= pH//entryBLast;    
    document.querySelector('#inputtera').value='';          //new
    document.querySelector('#inputtera').placeholder=pH//entryBLast; // new  
    editing.removeAttribute('class', 'red');
    entryE.setAttribute('class', 'hide');
    entryB.removeAttribute('class', 'hide');  
    entryEa.setAttribute('class', 'hide');     //new
    entryBa.removeAttribute('class', 'hide');  //new
    editArr=[] ;
}   

