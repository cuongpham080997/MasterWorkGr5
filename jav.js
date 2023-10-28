// const toggle = document.getElementById('change');
// toggle.addEventListener('click', function () {
//   this.classlist.toggle('bi-brightness-high');
//   if(this.classList.toggle('bi-moon')){

//   }else{}
// });

const toggle = document.getElementById('toggleDarkk');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high')){
    }else{
    }
});