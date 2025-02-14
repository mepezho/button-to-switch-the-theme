//выбираем кнопку
const btn = document.querySelector(".btn-toggle");
//отслеживаем щелчок по кнопке
btn.addEventListener("click", function(){
//переключение темы при нажатии на кнопку
document.body.classList.toggle("dark.css");
});