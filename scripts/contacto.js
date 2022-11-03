import countItemsInCart from "./utilities/countItemsInCart.js"
import footer from "./components/footer.js"

countItemsInCart()
footer()

/* console.log("javascript conectado correctamente");
const btn = document.getElementById('btn');
		btn.addEventListener('click',function(e){
			e.preventDefault()
            console.log("holi");
			function mandarEmail(){
					Email.send({
				Host : "smtp.gmail.com",
				Username : "revelesmaria4@gmail.com",
				Password : "password",
				To : 'revelesmaria4@gmail.com',
				From : document.getElementById("email").value,
				Subject : "Nueva hoja de contacto",
				Body : "Nombre: " + document.getElementById("nombre").value
						+ "<br> Email: " + document.getElementById("email").value
						+ "<br> no de teléfono: " + document.getElementById("telefono").value
						+ "<br> mensaje: " + document.getElementById("mensaje").value
			}).then(
			message => alert("Mensaje mandado exitosamente")
			);
		}
			
		})
 */
/* -----	FUNCION SENDEMAIL (MANDAR CORREO)	------- */

/* function sendEmail() {
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : document.getElementById("email").value,
    Subject : "Cliente de Guiedani quiere contactarte",
    Body : document.getElementById("mensaje").value,
}).then(
  message => alert("Tu mensaje se mandó correctamente. En breve recibiras nuestra respuesta")
);

} */