document.getElementById('fname-btn').addEventListener('click', () => transition('fname'))
document.getElementById('lname-btn').addEventListener('click', () => transition('lname'))

function transition(el) {
    switch(el) {
        case 'lname': 
            document.querySelector('.lname').classList.add('hide')
            document.querySelector('.email').classList.remove('hide')
            document.querySelector('.email').classList.add('show')
            break;
        case 'fname':
            document.querySelector('.fname').classList.add('hide')
            document.querySelector('.lname').classList.remove('hide')
            document.querySelector('.lname').classList.add('show')
            break;
         default:
            return null
    }   
}