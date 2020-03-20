/**
 * 
 * 
 * @author Javier Lopera Jiménez
 * 
 */


$(function () {
   
    let $seccion = $("#sectionAnnadidos");

    let $botonParrafos = $("#creaParrafos");
    let $botonTitulos = $("#creaTitulos");
    let $botonAnularComportamiento = $("#anulaRaton");

    let arrayColores = ["yellow","pink","silver"]

    let numeroParrafo = 0;
    let numeroTitulo = 0;

    function crearParrafo (contenido) {

        let $nuevoParrafo = $("<p>"+contenido+"</p>").appendTo($seccion);

        if(contenido != undefined){
            $nuevoParrafo.text(contenido);
            $nuevoParrafo.css({
                "font-weight" : "bold"
            })
        }
        else{
            $nuevoParrafo.css({
                "background-color": arrayColores[parseInt(Math.random()*3)],
                "font-weight" : "bold"
            })
            $nuevoParrafo.text("Parrafo-"+numeroParrafo);
            numeroParrafo++
        }

        $nuevoParrafo.mouseenter(function() {
            $nuevoParrafo.css({
                "border": "solid 1px black",
            })
        }).mouseleave(function() {
            $nuevoParrafo.css({
                "border": "none",
            })
        }).dblclick(function() {
            $nuevoParrafo.css({
                "color": "red",
            })
        })

        return $nuevoParrafo;

    }

    function crearTitulos (){

        for (let i = 0; i < $("input").val(); i++) {
            let $nuevoTitulo = $("<h1>Titulo-"+numeroTitulo+"</h1>").appendTo($seccion);
            numeroTitulo++;
            $nuevoTitulo.mousemove(function() {
                $nuevoTitulo.css({
                    "background-color": arrayColores[parseInt(Math.random()*3)],
                    "font-weight" : "bold"
                })
            }).hide("fast").show("fast")
        }

    }

    $botonAnularComportamiento.click(function () {
        $("#sectionAnnadidos > h1").off();
    })

    $seccion.before(crearParrafo("Javier").fantasma());
    $seccion.before(crearParrafo("Lopera").fantasma());
    $seccion.before(crearParrafo("Jiménez").fantasma());


    $botonParrafos.click(function () {
        $seccion.append(crearParrafo());
    });

    $botonTitulos.click(function () {
        $seccion.append(crearTitulos());
    })
})

