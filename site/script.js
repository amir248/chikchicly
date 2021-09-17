var app6 = new Vue({
  el: '#app-6',
  data: {
    message: localStorage.getItem('name')
  }
});

document.querySelector('#go').addEventListener('click',()=>{
  localStorage.setItem('name', app6.message);
  console.log('clickButton');
  location.reload();
});
if(localStorage.getItem('name')!=null){
    if(window.location.hash=='#hero-webMaster'){
      console.log("ok location.hash(hero-webMaster)");
    }else if(window.location.hash=='#commercial-offer'){
      console.log("ok location.hash(commercial-offer)");
    }else{
      document.querySelector(".priv").style.cssText=`
      flex-direction:column;
      display:flex;
      background:rgba(0,255,0,0.3);
      max-width:100%;
      `;
    }
  }else{
    // prompt("Привет Уважаемый:"+'_'+ localStorage.getItem('name'),' ' );
  }


console.log("prompt");
// let nonePromt=prompt('Пожалуйста, будьте добры представьтесь.', ' ');

let nameUser= localStorage.getItem('name');
document.querySelector("#nameUser").innerHTML=`${localStorage.getItem('name')}`;
document.querySelector("#nameUser2").innerHTML=`${localStorage.getItem('name')}`;
document.querySelector("#nameUser3").innerHTML=`${localStorage.getItem('name')}`;
