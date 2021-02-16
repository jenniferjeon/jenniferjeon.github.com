(function(){
    'use strict'
    // declaration of clothing articles as variables
    const outfit1 = document.querySelector('#outfit1');
    const outfit2 = document.querySelector('#outfit2');
    const outfit3 = document.querySelector('#outfit3');
    const outfit4 = document.querySelector('#outfit4');

    const outfit1overlay = document.querySelector('#outfit1overlay');
    const outfit1close = document.querySelector('#close1');

    const outfit2overlay = document.querySelector('#outfit2overlay');
    const outfit2close = document.querySelector('#close2');

    const outfit3overlay = document.querySelector('#outfit3overlay');
    const outfit3close = document.querySelector('#close3');

    const outfit4overlay = document.querySelector('#outfit4overlay');
    const outfit4close = document.querySelector('#close4');


    outfit1.addEventListener('click', function(){
        //event.preventDefault();
        outfit1overlay.style.display="block";
        
    });

    outfit1close.addEventListener('click', function(){
        event.preventDefault();
        outfit1overlay.style.display="none";

    });

    outfit2.addEventListener('click', function(){
        //event.preventDefault();
        outfit2overlay.style.display="block";
        
    });

    outfit2close.addEventListener('click', function(){
        event.preventDefault();
        outfit2overlay.style.display="none";

    });


    outfit3.addEventListener('click', function(){
        //event.preventDefault();
        outfit3overlay.style.display="block";
        
    });

    outfit3close.addEventListener('click', function(){
        event.preventDefault();
        outfit3overlay.style.display="none";
    });
    
    outfit4.addEventListener('click', function(){
        //event.preventDefault();
        outfit4overlay.style.display="block";
    
    });

    outfit4close.addEventListener('click', function(){
        event.preventDefault();
        outfit4overlay.style.display="none";
    });

})();