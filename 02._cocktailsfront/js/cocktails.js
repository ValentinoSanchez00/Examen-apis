// Select categorias
const select_categories = document.getElementById("select_categories");

// Select autores
const select_glasses = document.getElementById("select_glasses");
const tablacocktail_body = document.getElementById("tablacocktail_body");

// Botón crear libro
const btn_allcocktails = document.getElementById("btn_allcocktails");

// Modal
const modal_container = document.getElementById("modal_container");

const btn_newcocktail = document.getElementById("btn_newcocktail");
const btn_modal_aniadir = document.getElementById("btn_modal_aniadir");
const btn_modal_cancelar = document.getElementById("btn_modal_cancelar");

const modal_input_title = document.getElementById("modal_input_title");
const modal_select_glass = document.getElementById("modal_select_glass");
const modal_select_category = document.getElementById("modal_select_category");
const modal_input_content = document.getElementById("modal_input_content");

let arrayCategorias=[];
let arrayTipoVaso=[];
let arrayTodos=[];
const cargarcockteles=async()=>{
    cargarCategorias()
    cargarVasos()
    cargarTodos()
}


const cargarCategorias=async()=>{
    try {
      const res = await fetch("http://localhost:3000/apicocktails/categories");
      const data = await res.json();
     
      data.categoriesdata.forEach(element => {
     
     arrayCategorias.push(element)
      });
     
    } catch (error) {
      console.log(error);
    }
  
    console.log(arrayCategorias)
    arrayCategorias.forEach(categoria => {
      
        
let option=document.createElement("option")
option.classList.add("select__option")
option.style.color="grey"
option.value=categoria.nameCategory
option.textContent=categoria.nameCategory

select_categories.append(option)


    });

  
  }

  const cargarVasos=async()=>{
    try {
        const res = await fetch("http://localhost:3000/apicocktails/glasses");
        const data = await res.json();
      
         data.glassesdata.forEach(element => {
       
       arrayTipoVaso.push(element)
        }); 
       
      } catch (error) {
        console.log(error);
      }
      console.log(arrayTipoVaso)

      arrayTipoVaso.forEach(tipoVaso => {
      
        
        let option=document.createElement("option")
        option.classList.add("select__option")
        option.style.color="grey"
        option.value=tipoVaso.nameGlass
        option.textContent=tipoVaso.nameGlass
        
        select_glasses.append(option)
        
        
            });
        }


const cargarTodos=async()=>{

    try {
        const res = await fetch("http://localhost:3000/apicocktails/cocktails/all");
        const data = await res.json();
       
        data.cocktails.forEach(element => {
       
       arrayTodos.push(element);
        });
       
      } catch (error) {
        console.log(error);
      }

      console.log(arrayTodos)
}

const cargarAllCocktails=()=>{
    tablacocktail_body.innerHTML="";
    arrayTodos.forEach(cocktail => {
        let tr= document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")

        td1.textContent=cocktail.nameCocktail
        td2.textContent=cocktail.nameCategory
        td3.textContent=cocktail.nameGlass

        tr.append(td1)
        tr.append(td2)
        tr.append(td3)

        tablacocktail_body.append(tr)




    });



}

const mostrarporCategoria=async()=>{
tablacocktail_body.innerHTML="";
let categoria=select_categories.value
try {
    const res = await fetch("http://localhost:3000/apicocktails/cocktails/categories/"+categoria);
    const data = await res.json();
  data.forEach(cocktail => {
        let tr= document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")

        td1.textContent=cocktail.nameCocktail
        td2.textContent=cocktail.nameCategory
        td3.textContent=cocktail.nameGlass

        tr.append(td1)
        tr.append(td2)
        tr.append(td3)

        tablacocktail_body.append(tr)




    });
    
   
  } catch (error) {
    console.log(error);
  }

}
const mostrarporVaso=async()=>{
    tablacocktail_body.innerHTML="";
    let vaso=select_glasses.value
    try {
        const res = await fetch("http://localhost:3000/apicocktails/cocktails/glasses/"+vaso);
        const data = await res.json();
      data.forEach(cocktail => {
            let tr= document.createElement("tr")
            let td1=document.createElement("td")
            let td2=document.createElement("td")
            let td3=document.createElement("td")
    
            td1.textContent=cocktail.nameCocktail
            td2.textContent=cocktail.nameCategory
            td3.textContent=cocktail.nameGlass
    
            tr.append(td1)
            tr.append(td2)
            tr.append(td3)
    
            tablacocktail_body.append(tr)
    
    
    
    
        });
        
       
      } catch (error) {
        console.log(error);
      }
    
    
    
    
    }

const insertarCocktel=async()=>{
let nombre = modal_input_title.value
let categoria= modal_select_category.value
let vaso=modal_select_glass.value

let insercion={
  "nameCategory": categoria,
  "nameCocktail": nombre,
  "nameGlass": vaso,
}
const res = await fetch("http://localhost:3000/apicocktails/cocktails/"+insercion);
console.log(res);

modal_container.style.top="-1250px"


}


const mostrarpantalla=async()=>{
  modal_container.style.top="0"
 

  try {
    const res = await fetch("http://localhost:3000/apicocktails/categories");
    const data = await res.json();
   
    data.categoriesdata.forEach(element => {
   
   arrayCategorias.push(element)
    });
   
  } catch (error) {
    console.log(error);
  }

  console.log(arrayCategorias)
  arrayCategorias.forEach(categoria => {
    
      
let option=document.createElement("option")
option.classList.add("select__option")
option.style.color="grey"
option.value=categoria.nameCategory
option.textContent=categoria.nameCategory

modal_select_category.append(option)


  });


  try {
    const res = await fetch("http://localhost:3000/apicocktails/glasses");
    const data = await res.json();
  
     data.glassesdata.forEach(element => {
   
   arrayTipoVaso.push(element)
    }); 
   
  } catch (error) {
    console.log(error);
  }
  console.log(arrayTipoVaso)

  arrayTipoVaso.forEach(tipoVaso => {
  
    
    let option=document.createElement("option")
    option.classList.add("select__option")
    option.style.color="grey"
    option.value=tipoVaso.nameGlass
    option.textContent=tipoVaso.nameGlass
    
  
    modal_select_glass.append(option)
    
        });






}








  document.addEventListener("DOMContentLoaded",cargarcockteles)
  btn_allcocktails.addEventListener("click",cargarAllCocktails)
  select_categories.addEventListener("change",mostrarporCategoria)
  select_glasses.addEventListener("change",mostrarporVaso)
  btn_newcocktail.addEventListener("click",mostrarpantalla)




  btn_modal_cancelar.addEventListener("click",()=>{ modal_container.style.top="-1250px"})
  btn_modal_aniadir.addEventListener("click",insertarCocktel)



