// Getting the ul#categories element
const categoriesList = document.getElementById('categories');
// Getting all li.item items
const categoryItems = categoriesList.querySelectorAll('li.item');
// Виведення кількості категорій
console.log(`Кількість категорій: ${categoryItems.length}`);

// Ітерація по кожній категорії
categoryItems.forEach(categoryItem => {
    // Отримання тексту заголовка категорії (тегу <h2>)
    const categoryTitle = categoryItem.querySelector('h2').textContent;

    // Отримання кількості елементів у категорії (усіх <li> вкладених у неї)
    const categoryList = categoryItem.querySelector('ul');
    const categoryItemsCount = categoryList.querySelectorAll('li').length;

    // Виведення в консоль інформації про категорію
    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів у категорії ${categoryTitle}: ${categoryItemsCount}`);
})