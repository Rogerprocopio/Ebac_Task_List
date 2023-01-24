const limpar = document.getElementById('newTask');
$('form').on("submit", function(e){
    e.preventDefault();
    const newTask = $('input').val();
    const format = newTask.toUpperCase();

    const tarefas = $(`<li> ${format} </li>`)
    $(tarefas).appendTo('ul');
    $('input').val('');

    $('li').click(function(){
        $(this).addClass('tarefa_completa');
    });
    
});
