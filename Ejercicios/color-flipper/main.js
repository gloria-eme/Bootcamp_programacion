import './style.css'

const COLOR_PALETTE = {
  '#54D569': "Malachite",
  '#AC7478': "Copper Penny",
  '#C9C73E': "Acid Green",
  '#7C8BEB': "Cornflower Blue",
  "#E66B3A": "Burnt Sienna"
};

const addOptionsToColorPicker = () => {
const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);  //con .append añadimos todas las opciones de la vble
  })
}
  

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName =document.querySelector("#color-name");

  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    //almacenamos el codigo de color
    document.body.style.backgroundColor = newColor;
    //le aplicamos el background con el codigo de color seleccionado
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
    //le asignamos al h2 el valor de la clave que hay almacenada en la vvle de colores 
  
  })
}
addOptionsToColorPicker();
addEventListenerToColorPicker();