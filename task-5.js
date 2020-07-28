//Использование switch, if и методов slice, toUpperCase, toLowerCase
//Напиши скрипт имитирующий оформление заказа в избранную страну.
//Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName . Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'. Поэтому надо перезаписать текст переменной countryName так, чтобы первая буква (свойство [0]) была заглавной (метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).

//Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате
const countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
  // Write code under this line
   case CHINA:
    price = 100;
    country = CHINA;
    break;
   case AUSTRALIA:
     price = 170;
     country = AUSTRALIA;
     break;
   case INDIA:
        price = 80;
        country = INDIA;
        break;
   case JAMAICA:
     price = 120;
     country = JAMAICA;
     break;
   default:
       console.log(NO_DELIVERY);
  }
}
if (price > 0) { // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;}
  else if (countryName === null) {
      message = NO_DELIVERY;
} 

 console.log(message);
 
//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'