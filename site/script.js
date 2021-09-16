var app6 = new Vue({
  el: '#app-6',
  data: {
    message: localStorage.getItem('name')
  }
})
document.querySelector('#go').addEventListener('click',()=>{
  localStorage.setItem('name', app6.message);
  console.log('clickButton');
});
if(localStorage.getItem('name')!=null){
alert("Привет Уважаемый:"+'_'+ localStorage.getItem('name') );
}else{
  console.log('getItemOfnull');
}
let nameUser= localStorage.getItem('name');
document.querySelector('#nameUser').innerHTML= nameUser;
