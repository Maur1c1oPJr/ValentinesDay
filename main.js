onload = () =>{
        document.body.classList.remove("container");
};

$(function() {
var duracao = 90000;
var intervalo = 229;

setInterval(function() {
        $('.slider>*:first-child').animate(
                {'margin-top': '-280%'
                }, duracao, 'linear',
                function() {
                $(this).appendTo(this.parentElement).css('margin-top', '0%');
                }
        )
}, intervalo);
}
)

//      Notas de desenvolvimento.
/* 
        A section slider se divide em duas divs na horizontal.
        Essas divs se dividem em varias divs na vertical.
        A section é chamada slider.
        As duas divs principais são as slider-content.
        Atualmente o código rotaciona slider na vertical.
        Com o objetivo de rotacionar os slider content
verticalmente em sentidos opostos, devemos descobrir como rotacionar as divs ao inves da section.
        Ver também como alterar cor de fundo e pétalas.


*/