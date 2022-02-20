let result = document.querySelector('.result')
let equal = document.querySelector('equal')

function insert(value) {

    if(result.innerHTML == '0' && value == '0') {
        result.innerHTML = ''
    } 
    if(result.innerHTML == '0' && value != '0' && value != '.') {
        result.innerHTML = '' 
    }
    result.innerHTML += value
}

function confirm() {
    return result.innerHTML = eval(result.innerHTML)
}

function clean() {
    result.innerHTML = '0'
}
