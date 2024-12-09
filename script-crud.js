// encontrar o botão de adicionar tarefa
const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAddTarefa = document.querySelector('.app__form-add-task');

btnAdicionarTarefa.addEventListener('click', () => {
    formAddTarefa.classList.toggle('hidden')
})