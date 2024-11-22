import emailjs from 'emailjs-com'
import apiKeys from 'apiKeys'

const sendEmail = e => {
    e.preventDefault()

    emailjs
    .sendForm('service_oq5e2tn', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    .then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
}

const form = document.querySelector('.form')
form.addEventListener('submit', sendEmail)