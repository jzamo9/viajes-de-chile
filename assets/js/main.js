
$(document).ready(function(){

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
            scrollTop: $(gato).offset().top -80
          },
          1000
          )
        
        })


    $(".btn").click(function(){
        $(this).on(alert("El correo fue enviado correctamente"));
    })
            
        $('.btn').tooltip();


    $(".fa-solid").click(function(){
            $(this).css("background-color", "#c52549");
        })



})