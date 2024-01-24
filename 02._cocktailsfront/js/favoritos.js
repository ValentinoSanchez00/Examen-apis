const cardsfavorites = document.getElementById("cardsfavorites");
const favorite__btnvaciar = document.getElementById("favorite__btnvaciar");

const showFavorites = () => {
  let cocktelGuardado = JSON.parse(localStorage.getItem("cockteles")) || [];
  
  cocktelGuardado.forEach(favorite => {
    
  // article
  let articlefavorites = document.createElement("ARTICLE");
  articlefavorites.classList.add("cardfavorite");

  // image
  let imagefavorites = document.createElement("IMG");
  imagefavorites.classList.add("favorite__img");
  imagefavorites.src = favorite.imageCocktail;
  imagefavorites.alt = favorite.imageCocktail;
  articlefavorites.appendChild(imagefavorites);

  // section
  let sectionfavorite = document.createElement("SECTION");
  sectionfavorite.classList.add("favorite__section");
  articlefavorites.appendChild(sectionfavorite);
    //  name
    let namefavorite = document.createElement("P");
    namefavorite.classList.add("favorite__text");
    namefavorite.textContent = "Nombre: ";
    namefavorite.innerHTML = `<span class="favorite__subtitle">Nombre: &nbsp</span>
        ${favorite.nameCocktail}`;
    sectionfavorite.appendChild(namefavorite);
     // Categoria
  let namecategory = document.createElement("P");
  namecategory.classList.add("favorite__text");
  namecategory.innerHTML = `<span class="favorite__subtitle">Categoría: &nbsp</span>
  ${favorite.namecategory}`;
  sectionfavorite.appendChild(namecategory);

  // Vaso
  let nameglass = document.createElement("P");
  nameglass.classList.add("favorite__text");
  nameglass.innerHTML = `<span class="favorite__subtitle">Tipo Vaso: &nbsp</span>
  ${favorite.nameGlass}`;
  sectionfavorite.appendChild(nameglass);

  // Votos
  let votes = document.createElement("P");
  votes.classList.add("favorite__text");
  votes.innerHTML = `<span class="favorite__subtitle">Votos: &nbsp</span>
  ${favorite.votos}`;
  sectionfavorite.appendChild(votes);

  //button
  let button = document.createElement("BUTTON");
  button.classList.add("favorite__btnborrar");

  button.textContent = "Eliminar";
  sectionfavorite.appendChild(button);
  

  cardsfavorites.append(articlefavorites)

  });




 
};

const eliminaruno=(event)=>{
if (event.target.nodeName=="BUTTON") {
  let sectionborrar=event.target.parentElement
  let articuloborrar=sectionborrar.parentElement
  console.log(sectionborrar)
  let borrado= {
    imageCocktail:articuloborrar.children[0].src,
    nameCocktail: sectionborrar.children[0].textContent,
    nameCategory:sectionborrar.children[1].textContent,
    nameGlass: sectionborrar.children[2].textContent,
    votos: 1,
    
  };

  console.log(borrado)


}




}

const borrarTodods=()=>{
  let cocktelGuardado = JSON.parse(localStorage.getItem("cockteles")) || [];
  console.log(cocktelGuardado)
  cocktelGuardado=[]
  localStorage.setItem("cockteles", JSON.stringify(cocktelGuardado));
  cardsfavorites.innerHTML="";

}







document.addEventListener("DOMContentLoaded",showFavorites)
cardsfavorites.addEventListener("click",eliminaruno)
favorite__btnvaciar.addEventListener("click",borrarTodods)


