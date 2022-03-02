const id = document.getElementById('id')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})
const fetchData = async () =>{
  try{
const res = await fetchData('carritocompras.json')
const data = await res.json()
console.log(data)
  }catch (error){
    console.log(error)
  }

}
const menu = [
    {
      id: 1,
      titulo: "Super Taco",
      categoria: "Combos Personales",
      precio: 118.00,
      img: "./imagenes/Supertaco.jpeg",
      desc: `10 pulgadas rellenas de pollo, papas fritas, cebolla, jamon, queso craft, salsas y aderezo.`,
    },
    {
      id: 2,
      titulo: "Hamburguesa",
      categoria: "Combos Personales",
      precio: 118.00,
      img: "./imagenes/Hamburguesa.jpeg",
      desc: `Hamburguesa de pollo o res, con papas fritas.`,
    },
    {
      id: 3,
      titulo: "Nachos",
      categoria: "Combos Personales",
      precio: 85.00,
      img: "./imagenes/Nachos.jpeg",
      desc: `Delicioso nachos de pollo, con queso rayado y escabeche.`,
    },
    {
      id: 4,
      titulo: "Cubetazo",
      categoria: "Combos Personales",
      precio: 495.00,
      img: "./imagenes/Cubetazo.jpeg",
      desc: `5 piernas de pollo.`,
    },
    
    
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.titulo} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.titulo}</h4>
                <h4 class="price">L.${item.precio}</h4>
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
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.categoria)) {
          values.push(item.categoria);
        }
        return values;
      },
      ["Todos los articulos"]
    );
    const categoryBtns = categories
      .map(function (categoria) {
        return `<button type="button" class="filter-btn" data-id=${categoria}>
            ${categoria}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        console.log(e.currentTarget.dataset);
        const categoria = e.currentTarget.dataset.id;
        const menuCategoria = menu.filter(function (menuItem) {
          console.log(menuItem.categoria);
          if (menuItem.categoria === categoria) {
            return menuItem;
          }
        });
        if (categoria === "Todos los articulos") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategoria);
        }
      });
    });
  }
  const pintarCards = data => {
    console.log(data)
    data.forEach(producto => {
      templateCard.querySelector('h5').textContent = producto.titulo
      templateCard.querySelector('p').textContent = producto.precio

      const clone = templateCard.clonenode(true)
      fragment.appendChild(clone)
  })
  items.appendChild(fragment)
  }