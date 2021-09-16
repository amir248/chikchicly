var app6 = new Vue({
  el: '#app-6',
  data: {
    message: ' ...'
  }
})
document.querySelector('#go').addEventListener('click',()=>{
  localStorage.setItem('name', "data.message");
  console.log('clickButton');
});
alert( localStorage.getItem('name') );
