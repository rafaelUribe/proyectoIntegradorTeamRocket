console.log("Funcion footer() conectada")
import countItemsInCart from "./utilities/countItemsInCart.js"
import footer from "./components/footer.js"

  function sendMail(){
    var params = {
        name: document.getElementById("validationServerName").value,
        email: document.getElementById("validationServerEmail").value,
        message: document.getElementById("validationServerText").value,
    };
  const serviceID  ="service_zz5zy7b";
  const templateID = "template_n2lqmkn";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
            document.getElementById("validationServerName").value = "";
            document.getElementById("validationServerEmail").value = "";
            document.getElementById("validationServerText").value = "";
            console.log(res);
            alert("tu mensaje se mandó correctamente");
         })
         .catch(err=>console.log(err));
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  
countItemsInCart()
footer()






                        