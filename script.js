class Usuario {
    constructor(username, email, contraseña){
        this.username = username,
        this.email = email, 
        this.contraseña = contraseña
        
    }
}

const usuarios = []

const form = document.getElementById("idForm")
const usuariocreado = document.getElementById("usuarios")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    let username = document.getElementById("inlineFormInputGroupUsername").value
    let email = document.getElementById("inputEmail4").value
    let contraseña = document.getElementById("inputPassword4").value

    const usuario = new Usuario(username, email, contraseña)

    usuarios.push(usuario)
    console.log(usuarios)

    form.reset()
})
