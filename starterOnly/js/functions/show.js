import { modalContent, closeBtn } from './eltDom.js'
import { messages } from './messages.js'
import { removeSuccess } from './remove.js'
import { clean } from './clean.js'

/**
 * Affiche une erreur
 * @param {object} form le formulaire
 * @param {object} field le champ en question
 * @param {function} removeError nom de l'erreur
 */
export const showError = (form,field, removeError) => {
    removeError()
    const formBox = form.querySelector(`[name=${field.name}]`)
    const elt = formBox.closest('.formData')
    elt.classList.add('error')
    const content = document.createElement('span')
    content.classList.add('error')
    content.classList.add(field.name)
    content.innerHTML = messages[field.message]
    if (field.name === 'accept') {
        const acceptFormbox = elt.querySelector(`[for=${formBox.id}]`)
        acceptFormbox.after(content)
    } else {
        elt.append(content)
    }
}

/**
 * Affiche le message de succés
 * @param {objectForm} form l'objet du formulaire
 */
export const showSuccess = (objectForm) => {
    const modalContentHeight = modalContent.offsetHeight
    modalContent.style.minHeight = modalContentHeight + 'px'
    modalContent.classList.add('success')
    modalContent.innerHTML = `<div class="successBox"><span>${messages.success}</span></div>`

    const buttonClose = document.createElement('button')
    buttonClose.classList.add('btn-submit', 'button')
    buttonClose.classList.add('button')
    buttonClose.textContent = 'Fermer'

    modalContent.append(buttonClose)
    buttonClose.onclick = () => {
        removeSuccess(objectForm.form)
    }

    const boundRemoveSuccess = ()=>{
        removeSuccess(objectForm.form)
        closeBtn.removeEventListener("click", boundRemoveSuccess)
    }
    closeBtn.addEventListener("click", boundRemoveSuccess)
    clean(objectForm.formData)
}
