document.getElementById('fname-btn').addEventListener('click', function() {
    document.querySelector('.fname').classList.add('hide')
    document.querySelector('.lname').classList.remove('hide')
    document.querySelector('.lname').classList.add('show')

})

document.getElementById('lname-btn').addEventListener('click', function() {
    document.querySelector('.lname').classList.add('hide')
    document.querySelector('.email').classList.remove('hide')
    document.querySelector('.email').classList.add('show')
})

