// Elementos
const cardscocktails = document.getElementById("cardscocktails");
let arraydecocktails=[]
let cocktail=[];
const cargarcockteles=async()=>{

  let cocktel = JSON.parse(localStorage.getItem("cockteles")) || [];




  try {
    const res = await fetch("http://localhost:3000/apicocktails/cocktails/all");
    const data = await res.json();
   
    data.cocktails.forEach(element => {
   let cocktail= new Cocktail(element.idCocktail,element.nameCocktail,element.videoCocktail,element.nameCategory,element.isAlcoholic,element.nameGlass,element.instructions,element.imageCocktail,element.ingredientsCocktail);
   arraydecocktails.push(cocktail);
    });
   
  } catch (error) {
    console.log(error);
  }

showPopularCocktails(arraydecocktails)
}









// Mostras 12 cocteles aleatorios al comienzo y no pueden estar repetidos
const showPopularCocktails = (cocktails) => {
  let arraydedoce=[]
    
  for (let i = 0; i <12; i++) {
    let random=Math.floor(Math.random()*cocktails.length)
    j=0;
    arraydedoce.forEach(element => {
      if (element==cocktails[random]) {
        j++
      }
    });
    
    if (j==0) {
      arraydedoce.push(cocktails[random])

    } else {
      i--
    }
    
  }
   

  console.log(arraydedoce)
  let fragment= document.createDocumentFragment()
  arraydedoce.forEach(onecocktail => {
    
    let cocktail = document.createElement("ARTICLE");
    cocktail.classList.add("cocktail");
    cocktail.title = onecocktail.idCocktail;


    let mainimgcocktail = document.createElement("IMG");
    mainimgcocktail.classList.add("cocktail__main-img");
    mainimgcocktail.src = onecocktail.imageCocktail
    cocktail.appendChild(mainimgcocktail);


    let maincocktail = document.createElement("MAIN");
    maincocktail.classList.add("cocktail__content");


    let mainnamecocktail = document.createElement("H3");
    mainnamecocktail.classList.add("cocktail__title");



    let headercocktail = document.createElement("HEADER");
    headercocktail.classList.add("cocktail__header");
    maincocktail.appendChild(headercocktail);


    let divcocktail = document.createElement("DIV");
    divcocktail.classList.add("cocktail__div");
    headercocktail.appendChild(divcocktail);



    let mainnamecategory = document.createElement("P");
    mainnamecategory.classList.add("cocktail__text");
    mainnamecategory.innerHTML = `<span class="cocktail__subtitle">Categoría: &nbsp</span>
     ${onecocktail.nameCategory.substring(0, 20)}`;
    divcocktail.appendChild(mainnamecategory);



    let mainnameglass = document.createElement("P");
    mainnameglass.classList.add("cocktail__text");
    mainnameglass.innerHTML = `<span class="cocktail__subtitle">Tipo Vaso: &nbsp</span>
     ${ onecocktail.nameGlass.substring(0, 15)}`; 
    divcocktail.appendChild(mainnameglass);



      // Cocktail alcohólico o no
      let mainnamealcoholic = document.createElement("P");
      mainnamealcoholic.classList.add("cocktail__text");
      mainnamealcoholic.innerHTML = `<span class="cocktail__subtitle">Con Acohol: &nbsp</span>
      ${onecocktail.isAlcoholic}`;
      divcocktail.appendChild(mainnamealcoholic);

          // Imagen del cocktail
    let imgcocktail = document.createElement("IMG");
    imgcocktail.classList.add("cocktail__img");
    imgcocktail.src =  onecocktail.imageCocktail ;
    imgcocktail.alt =  onecocktail.imageCocktail ;
    headercocktail.appendChild(imgcocktail);


     // Instrucciones preparación Cocktail
     let maininstructions = document.createElement("P");
     maininstructions.classList.add(
       "cocktail__text",
       "cocktail__text--instructions"
     );
     maininstructions.innerHTML = `<div class="cocktail__subtitle cocktail__subtitle--header">Preparación</div>
   ${onecocktail.instructions.substring(0, 175)}`;
     maincocktail.appendChild(maininstructions);
 
     // Div ingredientes
     let divsingredientcocktail = document.createElement("DIV");
     divsingredientcocktail.classList.add(
       "cocktail__text",
       "cocktail__text--ingredients"
     );
     divsingredientcocktail.innerHTML = `<div class="cocktail__subtitle cocktail__subtitle--header">Ingredientes</div>`;
     maincocktail.appendChild(divsingredientcocktail);

   onecocktail.ingredientsCocktail.forEach((ingredient) => {
      let pingredient = document.createElement("P");
      pingredient.classList.add(
        "cocktail__text",
        "cocktail__text--ingredientsp"
      );
      pingredient.textContent = ingredient.measure + " - " +  ingredient.name ;
      divsingredientcocktail.appendChild(pingredient);
    });  

   
    cocktail.appendChild(maincocktail);
    fragment.appendChild(cocktail); 



  })
  cardscocktails.appendChild(fragment); 
  
   

 /*    if ( si cocktail esta en el localStorage ) {
      mainnamecocktail.classList.add("cocktail__votes");
      mainnamecocktail.textContent =
         dato.substring(0, 18) +
        " - " +
          dato votos del localStorage, recuerda que tenemos el id del Cocktail guardado en el title  +
        " votos";
    } else {
      mainnamecocktail.textContent =  dato .substring(0, 25);
    } */
  /*   maincocktail.appendChild(mainnamecocktail); */

  
  }
  
;
document.addEventListener("DOMContentLoaded",cargarcockteles)


const aniadirfavoritos=async(event)=>{
if (event.target.nodeName="img") {
  let img= event.target
 let id=img.parentElement.title
 console.log(id)
  
    const res = await fetch(" http://localhost:3000/apicocktails/cocktails/"+id);
    const data = await res.json();
   

/*    if ( si cocktail esta en el localStorage ) {
      mainnamecocktail.classList.add("cocktail__votes");
      mainnamecocktail.textContent =
         dato.substring(0, 18) +
        " - " +
          dato votos del localStorage, recuerda que tenemos el id del Cocktail guardado en el title  +
        " votos";
    } else {
      mainnamecocktail.textContent =  dato .substring(0, 25);
    } */
  /*    maincocktail.appendChild(mainnamecocktail);  */
    let info=data[0]

console.log(info)

    let cocktail = {
      imageCocktail:info.imageCocktail,
      nameCocktail: info.nameCocktail,
      nameCategory:info.nameCategory,
      nameGlass: info.nameGlass,
      votos: 1,
      
    };


    let cocktel = JSON.parse(localStorage.getItem("cockteles")) || [];
    let i=0
    cocktel.forEach(element => {
      if (element.nameCategory==cocktail.nameCategory) {
      cocktail.votos++;  
      element.votos++;
        
      }


    });


    console.log(cocktel)

  
  if (cocktail.votos==1) {
  cocktel.push(cocktail)
  }



  localStorage.setItem("cockteles", JSON.stringify(cocktel));



    
    



    

 
}
}

cardscocktails.addEventListener("click",aniadirfavoritos)

