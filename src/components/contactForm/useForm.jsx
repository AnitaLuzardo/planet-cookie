import {useState} from "react";
import emailjs from '@emailjs/browser';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null); // es quien guarda la respuesta

  //Hook personalizado va retornar cualquier tipo de estructura de dato en JavaScript 
  //en este caso retorna un objeto

  const handleChange = (e) => {
    const{name, value} = e.target
    setForm({
      ...form,
      [name]: value //refactorizacion de codigo
      // [e.target.name]: e.target.value
    })
  }; //para que detecte el cambio de los valores

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form))
  }; //donde se hacen las validaciones que se muestran en el front

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form)); //Validamos que el formulario no tenga errores

    if(Object.keys(errors).length === 0) {
      emailjs.sendForm('service_uq5wzh8', 'template_rpghgif', e.target, 'OkvLQcE4Ih-vVw5yq')
      .then(response => console.log('Respuesta', response))
      .catch(error => console.log('ERROR', error))

      .then(()=> {
        setResponse(true);
        setForm(initialForm);
        setTimeout(()=> setResponse(false), 5000)
      })
    } else{
      return;
    }
  }

  return{
    form, 
    errors, 
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}