function validateForm(){
	var nombre = document.getElementById("name").value;
	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
		alert('El campo nombre es obligatorio');
		return;
	}
	else if(/^([0-9])*$/.test(nombre)){
		alert("El valor " + nombre + " no es una letra");
		return;
	}
	else if(nombre[0] !=nombre[0].toUpperCase()){
		alert('Debe inicar nombre con mayúscula');
		return;
	}



	var apellido = document.getElementById("lastname").value;
	if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)){
		alert('El campo apellido es obligatorio');
		return;
	}
	else if(/^([0-9])*$/.test(apellido)){
		alert("El valor " + apellido + " no es una letra");
		return;
	}
	else if(apellido[0] != apellido[0].toUpperCase()){
		alert('Debe inicar apellido con mayúscula');
		return;
	}




	var correo = document.getElementById("input-email").value;
	if (correo == null || correo.length == 0 || /^\s+$/.test(correo)){
		alert('El campo correo es obligatorio');
		return;
	}
	
	if( !(/^\w+@\w+\.\w+$/.test(correo)) ){
		alert('tu email no es válido' + ' Ej:' + ' ejemplo@domain.com');
		return;
	}



	

	var contraseña = document.getElementById("input-password").value;
	if(contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)){
		alert('el campo contraseña es obligatorio');
		return;
		
	}
	else if (contraseña.length < 6){
		alert('tu contraseña debe contener 6 caracteres mínimo');
		return;
	}
	else if (contraseña == 'password' || contraseña == 123456 || contraseña == 0987654){
		alert('tu contraseña no es válida');
		return;
	}




	var seleccion = document.getElementsByTagName("select")[0].value;
	if(seleccion == 0){
		alert('El campo de selección es obligatorio');
		return;
	}
}