(function(){

    'use strict';

    var myForm = document.querySelector('#myForm');
    var madlib = document.querySelector('#madlib');


    myForm.addEventListener('submit', function(event) {
        event.preventDefault();


        var name = document.querySelector('#name').value;
        var job = document.querySelector('#job').value;
        var adverb = document.querySelector('#adverb').value;
        var adjective1 = document.querySelector('#adjective1').value;
        var adjective2 = document.querySelector('#adjective2').value;
        var company = document.querySelector('#company').value;

        if (name && job && adverb && adjective1 && adjective2 && company) {
            var myText = `Dear ${name}, Thank you so much for applying for the ${job} position. While we enjoyed getting to know you ${adverb}, with your ${adjective1} qualifications, we decided to move forward with a ${adjective2} candidate. We wish you the best in your future endeavors.
            Best,
            ${company}`;
        }
        else {
            var myText = "Please enter the correct words so that I can reject you properly";
        }
        var formData = document.querySelectorAll("input[type=text]");
        for (var eachField of formData) {
            eachField.value = "";
        }
    madlib.innerHTML = myText;
    });


 
})();