 /*
 1.Создать HTML страницу и подключить к ней файл скрипта
2.В файле скрипта создать 2 переменные, которые будут получать данные от пользователя:
◦Первая будет спрашивать "Ваш бюджет?"
◦Вторая "Название вашего магазина?"

3. Создать объект mainList, который будет содержать такие данные:
◦Бюджет
◦Имя магазина
◦Массив товаров shopGoods
◦Объект с сотрудниками employers
◦Свойство open

4. Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?"
и записать ответы в массив shopGoods
5. Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
*/
var budjet = prompt("Ваш бюджет?", "65000");
var shopName = prompt("Название вашего магазина?", "");
var time = 8;

var mainList = {
    shopBudjet: budjet,
    name:  shopName,
    shopGoods: [],
    employers: {},
    open: false
}
/*mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?", "");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?", "");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?", "");*/
alert(mainList.shopBudjet / 30);

for(var i = 0; i < 3; i ++){
    var answer = prompt("Какой тип товаров будем продавать?", "");
   if((typeof(answer))==='string' && (typeof(answer))=== null && answer.length < 50 && (typeof(answer))!= ''){
       console.log('Все верно!');
       mainList.shopGoods[i] = answer;

   }
}
console.log(mainList);

switch (time) {
  case 24:
     alert('Слишком поздно');
  break;
  case  8:
   alert('Время рабочее');
  break;
  case 25:
    alert('Такого не бывает');
  break;
 
}


























