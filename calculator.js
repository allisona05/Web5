// Дожидаемся полной загрузки DOM перед инициализацией обработчиков событий
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const resultElement = document.getElementById('result');

    // Регулярное выражение для проверки ввода только цифр
    const quantityPattern = /^[1-9][0-9]*$/;

    // Обработчик отправки формы
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        const quantity = quantityInput.value.trim();
        const productPrice = productSelect.value;

        // Проверка корректности ввода количества товара
        if (!quantityPattern.test(quantity)) {
            resultElement.innerText = "Ошибка: введите корректное количество (целое положительное число).";
            return;
        }

        // Подсчет стоимости заказа
        const total = quantity * productPrice;
        resultElement.innerText = "Стоимость заказа: " + total + " руб.";
    });
});
