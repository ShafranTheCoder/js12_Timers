'use strict';

window.onload = function () {

    document.onkeydown = function (event) {
        let buttons = document.querySelectorAll('.btn-wrapper button');
        buttons.forEach(function(btn){
            btn.classList.remove('blue');

        });
        if (event.key === 'Enter') {
            enter.classList.add('blue');
        }
        if (event.key === 's') {
            s.classList.add('blue');
        }
        if (event.key === 'e') {
            e.classList.add('blue');
        }
        if (event.key === 'o') {
            o.classList.add('blue');
        }
        if (event.key === 'n') {
            n.classList.add('blue');
        }
        if (event.key === 'l') {
            l.classList.add('blue');
        }
        if (event.key === 'z') {
            z.classList.add('blue');
        }


    }
};