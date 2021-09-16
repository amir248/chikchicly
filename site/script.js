var app6 = new Vue({
  el: '#app-6',
  data: {
    message: localStorage.getItem('name')
  }
})
document.querySelector('#go').addEventListener('click',()=>{
  localStorage.setItem('name', app6.message);
  console.log('clickButton');
  location.reload();
});
if(localStorage.getItem('name')!=null){
alert("Привет Уважаемый:"+'_'+ localStorage.getItem('name') );
}else{

let nonePromt=promt('Пожалуйста, будьте добры представьтесь.', newUser);
console.log('getItemOfnull'+"__"+ ${nonePromt});

}
let nameUser= localStorage.getItem('name');
document.querySelector("#nameUser").innerHTML=`${localStorage.getItem('name')}`;
document.querySelector("#nameUser2").innerHTML=`${localStorage.getItem('name')}`;
document.querySelector("#nameUser3").innerHTML=`${localStorage.getItem('name')}`;
