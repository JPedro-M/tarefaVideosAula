const modalOverley = document.querySelector('.modal-overley')
const imagem = document.querySelectorAll('.imagens')

for (let imagens of imagem) {
    imagens.addEventListener("click", function(){
    const imagemId = imagens.getAttribute("id")
    modalOverley.classList.add('active')
    modalOverley.querySelector("img").src = `/img/${imagemId}.jpg`
})    
}

document.querySelector(".close-modal").addEventListener("click", function(){modalOverley.classList.remove('active')})

