"use strict"

function changePlaceholder() {
  let radioButtons= document.querySelectorAll(".search-form__radio-input");
  let textInput = document.querySelector(".search-form__text-input");

  let placeholders = {
    vin: "Введите VIN автомобиля",
    car_brand: "Введите марку автомобиля",
    product_name: "Введите название товара",
    article: "Введите артикул товара",
  }

  for (let radioButton of radioButtons) {
    radioButton.addEventListener("click", () => {
      textInput.placeholder = placeholders[radioButton.value];
    })
  }
}

changePlaceholder()
