console.log("javascript conectado correctamente");
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