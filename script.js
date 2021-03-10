$(document).ready(()=>{
    $('#documentacao').on('click',()=>{
        $('#pagina').load('documentacao.html');
    });
    $('#suporte').on('click',()=>{
         $('#pagina').load('suporte.html');
    });

    /*$.get('suporte.html',data =>{
       // $( '#pagina').html(data);
    })ou post*/

    $('#competencia').on('change',(e)=>{

       let competencia =  $(e.target).val();
        $.ajax({
            type:'GET',
            url:'app.php',
            data:`competencia=${competencia}`,
            dataType:'json',
            success:dados=>{
                $('#numeroVendas').html(dados.numerovendas);
                $('#totalVendas').html(dados.totalvendas);
            },
            error:erro=>{console.log(erro)},
        });
    });


});
