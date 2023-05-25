var registrar =()=>{
    let eNombre = document.getElementById("");
    let eApellido = document.getElementById("");
    let Nombre=eNombre.value;
    let apellido=eApellido.value;
    console.log();
    console.log();
    let persona={"nombre":Nombre,"apellido":apellido}
    let Listadoperosna=localStorage.getItem("persona");
    let listadoantiguo=JSON.parse(Listadoperosna);
    if(listadoantiguo==null){
            listadonuevo=[persona]
    }
    else{
        //listadoantiguo.push(persona)
        listadonuevo=[...listadoantiguo,persona]
    }
    console.log(persona)
    console.log(listadoantiguo)
    console.log(listadonuevo)
    localStorage.setItem("persona",JSON.stringify(listanuevo));
}

document.getElementById("btn").addEventListener("click",registrar);