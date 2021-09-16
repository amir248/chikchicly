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
  console.log('getItemOfnull');
let nanePromt=promt('Пожалуйста, будьте добры представьтесь.', '');
}
let nameUser= localStorage.getItem('name');
document.querySelectorAll([#nameUser]).innerHTML=`${localStorage.getItem('name')}`;
