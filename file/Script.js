const addUserBtn=document.getElementById('add-user');
const doubleBtn=document.getElementById('double');
const oneBtn=document.getElementById('one-way');
const returnBtn=document.getElementById('return-flight');
const text=document.getElementById('text-field');
const text1=document.getElementById('text-field-1');
const text2=document.getElementById('text-field-2');
const text3=document.getElementById('text-field-3');

const sortBtn=document.getElementById('sort');

var adds=[];
const submitButton=document.getElementById('btn');
let data=[];
let adduser=
 {flight1:{ name:'New Delhi',
 arrival:'Chennai' ,
  money:Math.floor(Math.random()*10000),
  returnd:'24-08-2020',
  departure:'28-08-2020',
  Atime:'12:00AM',
  Dtime:'3:00AM',
  id:'AR-101'},
  flight2:{
    name:'New Delhi',
    arrival:'Pune' ,
  money:Math.floor(Math.random()*10000),
  returnd:'24-08-2020',
  Atime:'12:00AM',
  Dtime:'3:00AM',
  RAtime:'12:00AM',
  DAtime:'3:00AM',
  departure:'28-08-2020',
  id:'AR-102'
  },
  flight3:{
    name:'Mumbai',
    arrival:'Hyderabad' ,
  money:Math.floor(Math.random()*10000),
  returnd:'24-08-2020',
  Atime:'12:00AM',
  Dtime:'3:00AM',
  departure:'2020-08-28',
  id:'AR-102'
  },
  flight4:{
    name:'Mumbai',
    arrival:'Hyderabad' ,
  money:Math.floor(Math.random()*10000),
  returnd:'2020-08-24',
  Atime:'12:00AM',
  Dtime:'3:00AM',
  departure:'2020-08-24',
  id:'AR-102'
  },
  flight5:{ 
    name:'New Delhi',
  arrival:'Mumbai' ,
   money:Math.floor(Math.random()*10000),
   returnd:'24-08-2020',
   departure:'28-08-2020',
   Atime:'12:00AM',
   Dtime:'3:00AM',
   id:'AR-101'},


}
// function addData(obj){
//   // data.push(obj);
  
//   // updateDOM();
//   }




submitButton.addEventListener('click',submitData)

function submitData(){

 
 if(text.value!==''||text1.value!==''||text2.value!==''||text3.value!==''){
 
  
  //console.log('hello')
 for(i in adduser){

  var a=adduser[i].name.toLowerCase();
  
  var b=text.value.toLowerCase();
 
  if(((adduser[i].name.toLowerCase()===text.value.toLowerCase())&&
  ((adduser[i].arrival.toLowerCase()===text1.value.toLowerCase())||
  (adduser[i].return===text2.value)||(adduser[i].return===text3.value))))
 {
  
  data.push(adduser[i]); 
  
  
 }
   else if((adduser[i].name.toLowerCase()===text.value.toLowerCase())&&
  (text2.value==='')&&(text1.value==='')&&(text3.value===''))
 {
 
  
  adds=adduser[i];
  console.log(adds)
  data.push(adduser[i]);
    
  }
 
 }
    
 }else{
  alert('Please fill at least one value')
  
 }
// 
 updateDOM(); 
}

// function addUser(a){

//   //addData(adduser[i])
//    
// 


// }
 function sortByMoney(){
   data=data.sort((a,b)=>{
     return(a.money-b.money)
   })
   updateDOM();

 }





function updateDOM(providedData=data){

  main.innerHTML='<h2>Flights(Press Return for Getting info about return flights)</h2>';

 returnBtn.addEventListener('click',()=>{
    
  console.log(providedData.length)
  providedData.forEach(item => {
 
  
      const element=document.createElement('div');
 
      // var item=providedData;
  
      element.classList.add('person');
     
      // for(i=0;i<providedData.length;i++)
      // {
    
        
    element.innerHTML=` 
    <div style="">
    <h4>Rs.${item.money}</h4>
    <p>${item.id} </p>
    </div>
    <div style="inline-block">
   
    <p>${item.name}</p>
    <p>${item.Dtime}</p>
    
    </div>
    <div class="line"></div>
    <img class="aero" src="./images/rect.png"alt="">
    <div style="inline-block">
    <p>${item.arrival}</p>
    <p>${item.Atime}</p>
    <p>${item.returnd}</p>
    </div>
    
    <div style="inline-block">
   
    <p>${item.arrival}</p>
    <p>${item.Dtime}</p>
    
    </div>
    <div class="line"></div>
    <img class="aero" src="./images/rect.png"alt="">
    <div style="inline-block">
    <p>${item.name}</p>
    <p>${item.Atime}</p>
    <p>${item.returnd}</p>
    </div>
 
    
    <div style="align-self:center">
    <button class="book">Book Now</button>
    </div>`
 

   

  //  }
 
  main.appendChild(element);   

   })
 
  }
  
  )




  oneBtn.addEventListener('click',()=>{
    
    console.log(providedData.length)
    providedData.forEach(item => {

      const element=document.createElement('div');
    
      element.classList.add('person');
    element.innerHTML=` 
    <div style="">
    <h4>Rs.${item.money}</h4>
    <p>${item.id} </p>
    </div>
    <div style="inline-block">
   
    <p>${item.name}</p>
    <p>${item.Dtime}</p>
    
    </div>
    <div class="line"></div>
    <img class="aero" src="./images/rect.png"alt="">
    <div style="inline-block">
    <p>${item.arrival}</p>
    <p>${item.Atime}</p>
    <p>${item.returnd}</p>
    </div>
 
    
    <div style="align-self:center">
    <button class="book">Book Now</button>
    </div>`
    main.appendChild(element);
   
  })
   
    }
    
    )
  

 


providedData.forEach(item => {

      const element=document.createElement('div');
    
      element.classList.add('person');
    element.innerHTML=` 
    <div style="">
    <h4>Rs.${item.money}</h4>
    <p>${item.id} </p>
    </div>
    <div style="inline-block">
   
    <p>${item.name}</p>
    <p>${item.Dtime}</p>
    
    </div>
    <div class="line"></div>
    <img class="aero" src="./images/rect.png"alt="">
    <div style="inline-block">
    <p>${item.arrival}</p>
    <p>${item.Atime}</p>
    <p>${item.returnd}</p>
    </div>
 
    
    <div style="align-self:center">
    <button class="book">Book Now</button>
    </div>`
    main.appendChild(element);
   
  })
}








 sortBtn.addEventListener('click',sortByMoney);
