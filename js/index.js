$(function(){
    $("[data-toggle='tooltip']").tooltip(); //Importante comilla interior distinta a la exterior
    $("[data-toggle='popover']").popover();
    // <button class="btn btn-new" type="button" data-bs-toggle="collapse" data-bs-target="#costo" aria-expanded="false" aria-controls="costo">¿Cuánto Cuesta?</button>
    $('.carousel').carousel({
      interval: 5000 
    });
    $('#loginModal').on('show.bs.modal', function (e){
      console.log('El modal Inicio de Sesión se está mostrando');
    });
    $('#loginModal').on('shown.bs.modal', function (e){
      console.log('El modal se Inicio de Sesión mostro');
    });
    $('#loginModal').on('hide.bs.modal', function (e){
      console.log('El modal Inicio de Sesión se oculta');
    });
    $('#loginModal').on('hidden.bs.modal', function (e){
      console.log('El modal se Inicio de Sesión ocultó');
    });
    //Activación de botones
    // $('#costoBtn').prop('disabled', true);
    // $('#costoBtn').prop('disabled', false);
    // Cambiar/Agregar clase
    // $('#costoBtn').removeClass('btn-new')
    // $('#costoBtn').addClass('btn-login')
});