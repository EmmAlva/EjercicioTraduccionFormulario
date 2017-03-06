function traduccion(){
	var titulo = document.getElementById("form-signin-heading");
	var correo = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var recordar = document.getElementsByTagName("span")[0];//por qué colocar [0]?
	var registrar = document.getElementsByClassName("btn btn-lg btn-primary btn-block submit-btn")[0];//por qué colocar [0]?
	
	titulo.innerHTML ="Por favor iniciar sesión";
	correo.placeholder ="Correo electrónico";
	password.placeholder="Constraseña";
	recordar.innerHTML="Recordar datos";
	registrar.innerHTML="Inicar Sesión";

	
}traduccion();

function enviar(){
	var correo = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	var resultado = document.getElementById("resultado");
	/*resultado.innerHTML="<table><tr><td><strong>Datos de Formulario</strong></td></tr>"+
						"<tr><td>El correo electrónico ingresado es: </td></tr>"
						 + "<tr><td>"+ correo + "</td></tr>"+
						 + "<tr><td>La clave ingresada es: </td></tr>"
						 + "<tr><td>"+ password+ "</td></tr></table>" ;*/

	resultado.innerHTML="<strong>Datos de Formulario</strong></br>El correo electrónico ingresado es: </br>"
						 + correo + "</br>La clave ingresada es: </br>"+ password;

}