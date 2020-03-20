/**
 * 
 * Plugin para hacer desaparecer y aparecer lentamente un elemento.
 * 
 * @author Javier Lopera Jiménez
 * 
 */

(function () {
    jQuery.fn.fantasma = function () {
        return this.each(function () {

            $(this).fadeOut("slow").fadeIn(2000).css({
                "background": "#C8EEA2"
            });

        });
        

    };
})();