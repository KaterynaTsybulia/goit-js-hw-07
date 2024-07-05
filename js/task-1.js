// Завдання 1


const ctgList = document.getElementById('categories');

const ctgItems = ctgList.querySelectorAll('li.item');

console.log(`Number of categories: ${ctgItems.length}`);

ctgItems.forEach(ctg => {
    const ctgName = ctg.querySelector('h2').textContent;
    const ctgElements = ctg.querySelectorAll('ul li').length;

    console.log(`Category: ${ctgName}`);
    console.log(`Elements: ${ctgElements}`);
});
