//document.write("\n<br>");
//  в консоль
//console.log(" ");


//messeger
class Messeger{
	//constructor (){}
	HelloWorld(){
		console.log('Добро пожаловать в месседжер v.012-01');
	}
	ShowMenu(){
		console.log('Меню:\n1-Добавить контакт\n2-Покупки\n3-онлайн-банкинг\n4-настройки\n5-записная книжка\n0-Выход');
	}
	
	Setgs(Me){
		console.log('Меню настроек:\n1-изменить аккаунт\n2-Информация об аккаунте\n0-Выход');
		var SetCh = Number(prompt('Ваш выбор:'));
		switch(SetCh)
		{
			case 1:
			Me.Contreset();
			break;
			case 2:
				Me.ShowContact();
				break;
			default:
			
			break;
		}
		
	}
	
	ShowUpdates()
	{
		console.log('ground control to major tom');
		
	}	
	
}
class Contact {
	constructor(name, number, email, type, balance){
		this.name = name;
		this.number = number;
		this.email = email;
		this.type=type;//0 - сам 1 - контакт 2 - магазин 3 банк
		if (this.type == 0){
		this.balance = 50;
		}
		else {
			this.balance = 5000;
		} 
	}
	Contreset(){
	this.name=prompt('Введите новое имя','name');
	this.number=prompt('Введите новый номер','xxx-xx-xx');
	this.email=prompt('Введите новый email','email@mail');	
	}
	ShowContact(){
		console.log('Имя - '+this.name);
		console.log('Номер - '+this.number);
		console.log('Почта - '+this.email);
		console.log('Баланс - '+this.balance);
	}
	ChangeType(){
		this.type=prompt('Новый тип - ',1);
	}
	Regist(){
		this.name=prompt('Введите имя','name');
		this.number=prompt('Введите номер','xxx-xx-xx');
		this.email=prompt('Введите email','email@mail');	
		this.type=0;
	}
	NewContact(){
		this.name=prompt('Введите имя','name');
		this.number=prompt('Введите номер','xxx-xx-xx');
		this.email=prompt('Введите email','email@mail.com');	
		this.type=1;
	}
	ShowAllContacts(PhoneBook){
			PhoneBook.forEach(function(item, index){
				console.log('Имя-'+item.name);
				console.log('\nпочта'+item.email);
				console.log('\nтелефон'+item.number);
				console.log('\nТип:\n');
				switch (item.type){
					case 1:
					console.log('обычный\n');
					break;
					case 2:
					console.log('Магазин\n');
					break;
					case 3:
					console.log('Банк\n');
					break;
					default:
					console.log('ошибка\n');
					break;	
				}
			});
		
	}
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//ранд
class product {
	constructor(name, price){//type: 0-small  1 - big (+10% shippment)
		this.name = name;
		//this.Snumber = Snumber;
		this.price = price;
		//this.Size = Size;
	}
	ShowProduct(){
		console.log('Имя - '+this.name);
		//console.log('Номер - '+this.Snumber);
		console.log('Цена - '+this.price);
		//console.log('Размер - '+this.Size);
	}
	
}
class StoreClass {
	constructor(name, email){
		this.name = name;
		this.email=email;
		this.inv=[];
		this.balance = 50;
	}
	CheckStore(){
		var name = prompt('Ваш выбор:');
		var count = 0;
		this.inv.forEach(function(item, index){
		if (item.name === name){
count++;
		}
				});	
if (count ==0)				{
	alert('товар не найден в каталоге!\nПроверьте в другой раз');
	
}
else {alert('товар найден в каталоге!');}
				}	
	ShowAll(){
		
		for (var i = 0;i<15;i++){
			console.log(this.inv[i].name+'\n');			
			
		}
	}
	AddBunchOfItems(n){
		var namesforprods = ['Рыба','Кружки','Телефон','Лампы'];
		for (var i = 0; i < n; i++){
			let item = new product(namesforprods[getRandom(0,3)],getRandom(10,100));
			//alert (item.name);
			this.inv.push(item);
		}		
	}
	Buy(Me){
		var SInd=-1;
		var name = prompt('Ваш выбор:');
		
		this.inv.forEach(function(item, index){
		if (item.name == name){
			console.log('товар найден в каталоге!');
			SInd = index;
		}
	
		});	
		if (SInd == -1){alert('товар не найден в каталоге!\nПроверьте в другой раз'); return;}
		alert('Стоимость товара '+this.inv[SInd].price+' у вас только' + Me.balance);
		if (this.inv[SInd].price >= Me.balance){
			alert('Недостаточно средств!');
		}
		else {
			Me.balance -=this.inv[SInd].price;
			alert('Покупка совершена успешно!');
		}
	}
	ShopMenu(Me){
		console.log('Меню:\n1-Показать товары\n2-Найти товар\n3-Купить\n0-Выход');
		var SetCh = Number(prompt('Ваш выбор:'));
		switch(SetCh)
		{
			case 1:
				this.ShowAll();
			break;
			case 2:
				this.CheckStore();
				break;
			case 3:
				this.Buy(Me);
			default:
			
			break;
		}
		
	}
}
class BankClass{
	constructor(name, email){
		this.name = name;
		this.email=email;
		this.balance = 50000;
	}
	
	 SetUpGibs(Me,PhoneBook){
		 var inx;
		var NameOfTaker = prompt('Введите имя получателя');
		PhoneBook.forEach(function(item, index){
		if (item.name === NameOfTaker){
		console.log('Пользователь с таким именем найден!');
		inx = index;}//додел
		});
		this.Gibs(Me,PhoneBook[inx]);
	}
	
	Gibs(FromWho, ToWho){
		var tokens = Number(prompt('Введите количество денег для:'+ToWho.name));		
		if (tokens<=0){
			alert('Недопустимое значение!');
		}
		else {
			FromWho.balance -= tokens;
			ToWho.balance += tokens;
		}
	}
}
let MesMain = new Messeger();
MesMain.HelloWorld();
alert('Пожалуйста, зарегестрируйте аккаунт');
let Me = new Contact('', '', '',0 ,50);
Me.Regist();
var contacts = [];
var choise = 0;
var running = true;
let Bank = new BankClass('EuroTrust','EuroTrust@gmail.com');


let Store = new StoreClass ('EuroOpt','EuroOpt@gmail.com');
Store.AddBunchOfItems(15);
 
while (running){//главный цикл
	MesMain.ShowMenu();
	choise = Number(prompt('Ваш выбор:'));

	switch(choise){
			case 1:
				let sampleCont = new Contact('', '', '',0 ,50);
				sampleCont.NewContact();
				contacts.push(sampleCont);				
				break;
			case 2:
				Store.ShopMenu(Me);
				
				break;
			case 3:
				Bank.SetUpGibs(Me,contacts);
				
				
				break;
			case 4:
				MesMain.Setgs(Me);
				break;	
			case 5:
				Me.ShowAllContacts(contacts);
				
				break;
			case 0:
				console.log('Выключение...');
				running = false;
				break;
			default:
			alert('проверьте ввод');
				break;	
		}
	
//	break;
}




//let Me = new Contact('Me', '2223366', 'hotmail@com', 0,50);

//Me.Contreset();
//Me.ShowContact();