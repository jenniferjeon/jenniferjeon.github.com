(function(){

    'use strict';

    const myForm = document.querySelector('#myForm');
    const madlib = document.querySelector('#madlib');


    myForm.addEventListener('submit', function(event) {
        event.preventDefault();


        const name = document.querySelector('#name').value;
        const job = document.querySelector('#job').value;
        const adverb = document.querySelector('#adverb').value;
        const adjective1 = document.querySelector('#adjective1').value;
        const adjective2 = document.querySelector('#adjective2').value;
        const company = document.querySelector('#company').value;

        if (name && job && adverb && adjective1 && adjective2 && company) {
            let myText = `Dear ${name}, <br> Thank you so much for applying for the ${job} position. While we enjoyed getting to know you ${adverb}, with your ${adjective1} qualifications, we decided to move forward with a ${adjective2} candidate. We wish you the best in your future endeavors.
            <br> Best,
            <br> ${company}`;
            madlib.innerHTML = myText;
            madlib.className = "output";
            document.body.style.backgroundImage = "url('images/background2.svg')";
            document.getElementById('box').style.backgroundColor = "white";
          
        }
        else {
            let myText = "Please enter the correct words so that I can reject you properly";
            madlib.innerHTML = myText;
            
        }

      //  const formData = document.querySelectorAll("input[type=text]");
       /// for (let eachField of formData) {
        //    eachField.value = "";
       // }
    });


 
})();