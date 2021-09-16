var app6 = new Vue({
  el: '#app-6',
  data: {
    message: ' ...'
  }
})
document.querySelector('#go').addEventListener('click',()=>{
  localStorage.setItem('name', app6.message);
  console.log('clickButton');
});
alert("Привет Уважаемый:" localStorage.getItem('name') );
