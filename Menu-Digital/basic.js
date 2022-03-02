const menu = [
    {
        id: 1,
        titulo: "Super Taco",
        categoria: "Combos Personales",
        precio: 118.00,
        img: "./imagenes/Supertaco.jpeg",
        desc: `10 pulgadas rellenas de pollo, papas fritas, cebolla, jamon, queso craft, salsas y aderezo`,
      },
    {
        id: 2,
        titulo: "Hamburguesa",
        categoria: "Combos Personales",
        precio: 118.00,
        img: "./imagenes/Hamburguesa.jpeg",
        desc: `Hamburguesa de pollo o res, con papas fritas`,
      },

  ];
  
  const sectionCenter = document.querySelector(".section-center");
  
  window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.titulo} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.titulo}</h4>
                <h4 class="price">$${item.precio}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  });