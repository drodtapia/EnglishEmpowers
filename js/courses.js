$(document).ready(function() {
    var hash = window.location.hash;
    if (hash) {
      $('#myTab a[href="' + hash + '"]').tab('show');
      // Scroll suave hacia el elemento correspondiente al hash con ajuste para el título
      var targetOffset = $(hash).offset().top - 60; // Ajuste para el título
      $('html, body').animate({
          scrollTop: targetOffset
      }, 500);
    }

    $('#myTab a').on('click', function (e) {
      e.preventDefault();
      $(this).tab('show');
      history.replaceState(null, null, this.hash);
      // Scroll suave hacia el elemento correspondiente al hash con ajuste para el título
      var target = $(this.hash);
      if (target.length) {
        var targetOffset = target.offset().top - 60; // Ajuste para el título
        $('html, body').animate({
          scrollTop: targetOffset
        }, 500);
      }
    });
    
    $("[data-toggle='tooltip']").tooltip();
    
});


    