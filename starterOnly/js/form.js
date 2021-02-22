import FormIncription from './functions/FormIncription.js'
import { formInscription, formData} from './functions/eltDom.js'

/**
 * Instancie l'objet formulaire "formIncription"
 */
const form = new FormIncription(formData)

/**
 * Empêche la soumission par default
 * Lance la validation du formulaire
 */
formInscription.addEventListener("submit", function(evt) {
  evt.preventDefault();
  form.validate()
}, false);