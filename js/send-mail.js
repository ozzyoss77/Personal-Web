const $form = document.querySelector('#contactForm')
const $buttonMailto = document.querySelector('#send-mail-a')

$form.addEventListener('submit', handleSubmit )

function handleSubmit(event){
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:crhistian.riverin@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}