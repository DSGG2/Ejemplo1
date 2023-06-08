var modificar = (listadoNuevo)=>{
    let eNombre = document.getElementById("Pnombre");
    let eC_Unidades = document.getElementById("Ncompras");
    let eT_cliente = document.getElementById("pvnp");
    let eT_entrega = document.getElementById("cau");
    let eT_entrega = document.getElementById("dad");
    let eT_entrega = document.getElementById("de");
    let eCorreo = document.getElementById("email");
    let nombre=eNombre.value;        
    let c_unidades = eC_Unidades.value;
    let t_cliente = eT_cliente.value;
    let t_entrega = eT_entrega.checked;
    let correo = eCorreo.value;
    let indice = eBtnEditarUp.value;
    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].c_unidades = c_unidades;
    listadoNuevo[indice].t_cliente=t_cliente
    listadoNuevo[indice].t_entrega=t_entrega
    listadoNuevo[indice].correo=correo
    localStorage.setItem('personas',JSON.stringify(listadoNuevo));
    //Cargar la tabla de nuevo
    cargarTabla(listadoNuevo)
}
var eliminar = (listadoNuevo)=>{
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    lista = listadoNuevo.filter((p)=>p.id!=indice)
    lista=lista.map((p,index)=>{return{...p,'id':index}})
    console.log(lista)
    localStorage.setItem('personas',JSON.stringify(lista));
    cargarTabla(lista)
}
var cargarTabla = (listadoNuevo)=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eC_Unidades = document.getElementById("c_unidades");
    let eT_cliente = document.getElementById("t_cliente");
    let eT_entrega = document.getElementById("t_entrega");
    let eCorreo = document.getElementById("correo");
    render = "<table>"
    render+="<tr><th>Nombre</th><th>Cantidad_Unidades</th><th>Tipo_cliente<th>Tipo_Entrega</th><th>Correo</th></tr>"
    for (let i = 0; i <listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.c_unidades+"</td>"
        render+="<td>"+element.t_cliente+"</td>"
        render+="<td>"+element.t_entrega+"</td>"
        render+="<td>"+element.correo+"</td>"
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
        
    }
    render += "</table>";
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i); 
        var eBtn2 = document.getElementById("btnEliminar"+i);
        let element = listadoNuevo[i]
        eBtn.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eC_Unidades.value = element.c_unidades;
            eT_cliente.value = element.t_cliente;
            eT_entrega.value = element.t_entrega;
            eCorreo.value = element.correo;
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
             
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo))
        })
        eBtn2.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eC_Unidades.value = element.c_unidades;
            eT_cliente.value = element.t_cliente;
            eT_entrega.value = element.t_entrega;
            eCorreo.value = element.correo;
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar;
            let eBtnEliminarUp = document.getElementById('btnEliminar');
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo))
       
            
        })
    }
}

var registrar = ()=>{
    let eNombre = document.getElementById("nombre");
    let eC_Unidades = document.getElementById("c_unidades");
    let eT_cliente = document.getElementById("t_cliente");
    let eT_entrega = document.getElementById("t_entrega");
    let eCorreo = document.getElementById("correo");
    let eComentario=document.getElementById("comentario");
    let nombre = eNombre.value;
    let c_unidades = eC_Unidades.value;
    let t_cliente = eT_cliente.value;
    let t_entrega = eT_entrega.value;
    let correo = eCorreo.value;
    let comentario = eComentario.value;
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);
    if(listadoAntiguo==null){
        let persona = {
            "id": 0,
            "nombre":nombre,
            "c_unidades":c_unidades,
            "t_cliente":t_cliente,
            "t_entrega":t_entrega,
            "correo":correo,
            "comentario":comentario
        }
        listadoNuevo = [persona]
    }else{
        //listadoAntiguo.push(persona)
        let persona = {
            "id": listadoAntiguo.length,
            "nombre":nombre,
            "c_unidades":c_unidades,
            "t_cliente":t_cliente,
            "t_entrega":t_entrega,
            "correo":correo,
            "comentario":comentario
        }
        listadoNuevo = [...listadoAntiguo,persona]
    }
    //console.log(persona)
    localStorage.setItem("personas",JSON.stringify(listadoNuevo));
    //eContenedorTabla.innerHTML = ""+listadoNuevo.length;
    //tabla
    cargarTabla(listadoNuevo)
   }
   var cargarDatos=()=>{
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo= JSON.parse(listadoPersonas);
    cargarTabla(listadoAntiguo)
   }
   document.getElementById("btn").addEventListener("click",registrar);
addEventListener('load',cargarDatos)
