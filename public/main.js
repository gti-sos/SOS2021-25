var editando=false;

function transformarEnEditable(nodo){

    //El nodo recibido es SPAN
    
    if (editando == false) {
    
    var nodoTd = nodo.parentNode; //Nodo TD
    
    var nodoTr = nodoTd.parentNode; //Nodo TR
    
    var nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV
    
    var nodosEnTr = nodoTr.getElementsByTagName('td');
    
    var location = nodosEnTr[0].textContent; var year = nodosEnTr[1].textContent;
    
    var total = nodosEnTr[2].textContent; var protectedhousing = nodosEnTr[3].textContent;
    
    var nuevo = nodosEnTr[4].textContent; var secondhand = nodosEnTr[5].textContent;
    
    var nuevoCodigoHtml = '<td><input type="text" name="location" id="location" value="'+location+'" size="10"></td>'+
    
    '<td><input type="text" name="year" id="year" value="'+year+'" size="5"</td>'+
    
    '<td><input type="text" name="total" id="total" value="'+total+'" size="5"</td>'+
    
    '<td><input type="text" name="protectedhousing" id="protectedhousing" value="'+protectedhousing+'" size="5"</td>'+
    
    '<td><input type="text" name="nuevo" id="nuevo" value="'+nuevo+'" size="5"</td> <td>En edición</td>';
    
     
    
    nodoTr.innerHTML = nuevoCodigoHtml;
    
     
    
    nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
    
    '<form name = "formulario" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
    
    '<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
    
    editando = "true";}
    
    else {alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
    
    }
    
    }
    
     
    
    function capturarEnvio(){
    
    var nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV
    
    nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
    
    '<form name = "formulario" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
    
    '<input type="hidden" name="location" value="'+document.querySelector('#location').value+'">'+
    
    '<input type="hidden" name="year" value="'+document.querySelector('#year').value+'">'+
    
    '<input type="hidden" name="total" value="'+document.querySelector('#total').value+'">'+
    
    '<input type="hidden" name="protectedhousing" value="'+document.querySelector('#protectedhousing').value+'">'+
    
    '<input type="hidden" name="nuevo" value="'+document.querySelector('#nuevo').value+'">'+
    
    '<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
    
    document.formulario.submit();
    
    }
    
     
    
    function anular(){
    
    window.location.reload();
    }