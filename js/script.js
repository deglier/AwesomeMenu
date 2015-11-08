$(document).ready(function(){
   $('.home').hover(
       function(){
           //entrada
           $('.menu').addClass('home-hover');
       },
       function(){
           //saida
           $('.menu').removeClass('home-hover');
       }); 
    
   $('.port').hover(
       function(){
           //entrada
           $('.menu').addClass('port-hover');
       },
       function(){
           //saida
           $('.menu').removeClass('port-hover');
       })
   
   $('.blog').hover(
       function(){
           //entrada
           $('.menu').addClass('blog-hover');
       },
       function(){
           //saida
           $('.menu').removeClass('blog-hover');
       })
   
   $('.contato').hover(
       function(){
           //entrada
           $('.menu').addClass('contato-hover');
       },
       function(){
           //saida
           $('.menu').removeClass('contato-hover');
       })

});