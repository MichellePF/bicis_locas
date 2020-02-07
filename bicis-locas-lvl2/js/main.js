function validateForm(){

	// FUNCION QUE CREA EL SPAN
	function alertar(mensaje, padre){
		var span = padre.parentNode.children[2];
		if(!span){
			span = document.createElement('span');
		}
		span.innerHTML = mensaje;
		padre.parentNode.appendChild(span);
	}
	// FUNCION PARA LIMPIAR SPAN
	function limpiar(padre){
		var span = padre.parentNode.children[2];
		if(!span){return;}
		padre.parentNode.removeChild(span);
	}

	// VALIDACION DE NOMBRE
	var nombre = document.getElementById("name");
	if(nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value)){
		alertar('El campo nombre es obligatorio', nombre);
	} else if(!(/^([A-Za-z])*$/.test(nombre.value))){
		alertar("El valor " + nombre.value + " debe contener solo letras", nombre);
		
	} else if(nombre.value[0] !=nombre.value[0].toUpperCase()){
		alertar('Debe inicar nombre con mayúscula', nombre);

	}else {
		limpiar(nombre);
	}


	// VALIDACION DE APELLIDO
	var apellido = document.getElementById("lastname");
	if(apellido.value == null || apellido.value.length == 0 || /^\s+$/.test(apellido.value)){
		alertar('El campo apellido es obligatorio', apellido);
	}
	else if(!(/^([A-Za-z])*$/.test(apellido.value))){
		alertar("El valor " + apellido.value + " debe contener solo letras", apellido);
	}
	else if(apellido.value[0] != apellido.value[0].toUpperCase()){
		alertar('Debe inicar apellido con mayúscula', apellido);
	}else {
		limpiar(apellido);
	}



	// VALIDACION DE CORREO
	var correo = document.getElementById("input-email");
	if (correo.value == null || correo.value.length == 0 || /^\s+$/.test(correo.value)){
		alertar('El campo correo es obligatorio', correo)
	}
	
	if( !(/^\w+@\w+\.\w+$/.test(correo.value)) ){
		alertar('tu email no es válido' + ' Ej:' + ' ejemplo@domain.com', correo);
	}else {
		limpiar(correo);
	}



	
	// VALIDACION DE CONTRASEÑA
	var contraseña = document.getElementById("input-password");
	if(contraseña.value == null || contraseña.value.length == 0 || /^\s+$/.test(contraseña.value)){
		alertar('el campo contraseña es obligatorio', contraseña);
		
	}
	else if (contraseña.value.length < 6){
		alertar('tu contraseña debe contener 6 caracteres mínimo', contraseña);
	}
	else if (contraseña.value == 'password' || contraseña.value == 123456 || contraseña.value == 0987654){
		alertar('tu contraseña no es válida', contraseña);
	}else {
		limpiar(contraseña);
	}




	// VALIDACION DE SELECCION
	var seleccion = document.getElementsByTagName("select")[0];
	if(seleccion.value == 0){
		var span = seleccion.parentNode.children[1];
		if(!span){
			span = document.createElement('span');
		}
		span.innerHTML = 'Este campo es obligatorio';
		seleccion.parentNode.appendChild(span);
	}else {
		var span = seleccion.parentNode.children[1];
		if(!span){return;}
		seleccion.parentNode.removeChild(span);
		
	}
}