function drop() {
    let dropEle = document.getElementById("dropdown")
    if (dropEle.style.display == "none") {
        dropEle.style.display = "block"
    } else {
        dropEle.style.display = "none"
    }
    
}

// Nav
window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("nav", window.scrollY > 0)
})
//SingUp
function emer() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value
    let pass1 = document.getElementById("pass1").value
    console.log(name, email)
    if (name.length == 0) {
        window.alert("Ploteso fushen e name")
    }
    if (email.length == 0) {
        window.alert("Ploteso fushen e email")
    }
    if (pass.length < 8) {
        window.alert("Pass ka me pak se 8 karaktere")
    }
    if (pass != pass1){
        window.alert("Passwordi nuk perputhet!")
    }
    if (name.length != 0 && email.length != 0 && pass == pass1) {
        window.alert("Ju u bete subscribe")
    }
}
//
function imazhi(){
    let SelektImazh = document.getElementById('foto')
    if(SelektImazh.src.match("/img4.jpg")) {
      SelektImazh.src = '/img3.jpg'
    } else {
        SelektImazh.src = '/img4.jpg'
    }
}
