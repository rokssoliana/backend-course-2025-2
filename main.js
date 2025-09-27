// Константи для варіанту 3
const currency = "JPY";
const exact_date = "20240127";
// Створюємо базовий URL сервера НБУ
const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

// Додаємо параметри
url.searchParams.append("valcode", currency);
url.searchParams.append("date", exact_date);
url.searchParams.append("json", ""); // json просто як параметр без значення

// Виводимо URL у консоль
console.log(url.toString());
