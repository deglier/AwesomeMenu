function rainbowMenu(seletorDisparador, seleTorAfetado){
  var elDisparador  = document.querySelectorAll(seletorDisparador);
  var elAfetado     = document.querySelector(seleTorAfetado);
}


$(document).ready(function(){
    $("a").hover(
        function(){
            var cor = $(this).attr("data-bg"),
                estiloHover = {'background-color' : cor};
            $("nav.menu").css(estiloHover);
        }, function(){
            $("nav").css("background-color", "#000");
    });
});
