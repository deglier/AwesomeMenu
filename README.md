# AwesomeMenu
Menu que muda a cor de fundo da barra de menu com uma cor diferente pra cada item do menu em evento de hover

**Linguagens:** CSS / HTML / JavaScript(jQuery).

Um valor é passado pelo atributo `data-bg` presente em cada tag `<a>` com a finalidade de muda o **brackground-color** da tag `<nav class="menu">` quando há evento de **hover** sobre um item do menu.
######Demo [aqui](http://codepen.io/deglier/pen/WQaPjK).
####Como funciona:
#####HTML:
```html
<nav class="menu">
    <a href='#' data-bg="rgb(166,5,32)">item do menu</a>
</nav>
```
Onde `data-bg` armazena o **brackground-color**.

#####JavaScript
```javascript
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
```

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">AwesomeMenu</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/deglier" property="cc:attributionName" rel="cc:attributionURL">Deglier Amorim</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons - Atribuição 4.0 Internacional</a>.
