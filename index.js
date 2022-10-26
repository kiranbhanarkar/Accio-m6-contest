let globalIsSubmitted = false

function validate(isSubmitted = false) {
    //getting elements from html
    let fullName = document.getElementById('full-name').value
    let gender = document.getElementById('gender').value
    let swim = document.getElementById('swim').checked
    let dance = document.getElementById('dance').checked
    let read = document.getElementById('read').checked
    let sing = document.getElementById('sing').checked
    let error = false

    if (isSubmitted) {
        ``
        globalIsSubmitted = true
    }

    if (globalIsSubmitted) {
        //for full name
        if (fullName.length >= 5 && fullName.includes(" ")) {
            document.getElementById('full-name-valid').style.display = 'block'
            document.getElementById('full-name-invalid').style.display = 'none'
        } else {
            document.getElementById('full-name-invalid').style.display = 'block'
            document.getElementById('full-name-valid').style.display = 'none'
            error = true
        }

        //for gender
        if (gender != 'none') {
            document.getElementById('gender-valid').style.display = 'block'
            document.getElementById('gender-invalid').style.display = 'none'
        } else {
            document.getElementById('gender-invalid').style.display = 'block'
            document.getElementById('gender-valid').style.display = 'none'
            error = true
        }

        //for hobbies
        if (swim || dance || read || sing) {
            document.getElementById('hobbies-valid').style.display = 'block'
            document.getElementById('hobbies-invalid').style.display = 'none'
        } else {
            document.getElementById('hobbies-invalid').style.display = 'block'
            document.getElementById('hobbies-valid').style.display = 'none'
            error = true
        }

        if (!error && isSubmitted) {
            alert(`Hobbie of ${fullName} (${gender}) are ${swim? 'Swimming': ''} ${dance? 'Dancing':''} ${sing? 'Singing':''} ${read? 'Reading Novels':''}.`)

            document.getElementById('registration-form').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}