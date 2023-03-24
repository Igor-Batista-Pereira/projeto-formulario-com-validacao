const formulario = document.querySelectorAll('.item')
const submit = document.getElementById('submit')
const errorMessage = document.querySelectorAll('.msg-obrigatorio')

formulario.forEach(function(input, index){
    input.addEventListener('change', function(){
        if(input.value !== ""){
            input.classList.remove('invalido')
            input.classList.add('valido')
            errorMessage[index].classList.remove('mostrar')
        }else{
            input.classList.remove('valido')
            input.classList.add('invalido')
            errorMessage[index].classList.add('mostrar')
        }
    })
})

submit.addEventListener('click', function(click){
    click.preventDefault()

    formulario.forEach(function(input,index){
        if(input.value !== ""){
            input.classList.remove('invalido')
            input.classList.add('valid')
            errorMessage[index].classList.remove('mostrar')
        }else{
            input.classList.remove('valido')
            input.classList.add('invalido')
            errorMessage[index].classList.add('mostrar')
        }
    })
})