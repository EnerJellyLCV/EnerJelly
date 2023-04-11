

/* This is a comment */

/* function IMC_calculator(){
    const btn = document.getElementById('IMC_btn')
    const randomColor = Math.floor(Math.random()*16777215).toString(16); 
    btn.style.backgroundColor = "#" + randomColor;
    btn.style.color = 'white';
}
*/

function BMI_calculator(){
    document.getElementById('output_container').innerHTML='';     // This clears the container 'output_container' every time you click butto
    var weight = document.getElementById('weight').value;         // Takes the value of weight inserted in the input field 'weight'
    var height = document.getElementById('height').value;         // Takes the value of height inserted in the input field 'height'
    var BMI = weight/height**2;    
    const strBMI = String(BMI.toFixed(2));    

    if (BMI<=18.5) {                                    // Need to handle multiple cases
        var status = "bajo peso";
    } else if (BMI>18.5 && BMI<=24.9){
        var status = "normal";
    } else if (BMI>24.9 && BMI<=29.9){
        var status = "sobrepeso";

    } else if (BMI>29.9 && BMI<=34.9){
        var status = "obeso";   
    }
    else {
        var status = "extremadamente obeso"
    } 
                 // Calculates the IMC using height and weight
    
    const node = document.createTextNode("Su IMC es igual a "+ strBMI +", que indica que tu estas " + status); // Create a child node where text will be stored 
    const para = document.createElement("p");                     // Creates a <p> element for later use
    para.appendChild(node);                                       // Insert child node into parent node, that is, <p>
    const output = document.getElementById("output_container");   // Access the empty container <div> where <p> will be included 
    output.appendChild(para);                                // Transform variable 'Imc' from float to string. 
                                       // Insert <p> into <div>

    
}

function GETD_calculator(){
    document.getElementById('get_container').innerHTML='';
    const gender = document.querySelector('[name="gender"]:checked').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight2').value; 
    const height = document.getElementById('height2').value;
    const PAd = document.querySelector('[name="PAd"]:checked').value;
    const PANd = document.querySelector('[name="PANd"]:checked').value;
    var bmr      // initialize variable
    if (gender == 'male') {
        var  bmr = 10*weight +6.25*height -5*age + 5 
    } else if (gender == 'female') {
      var  bmr = 10*weight +6.25*height - 5*age - 161
    } 
    var PAdValue  // initialize variable
    if (PAd == 'sedentary'){
        var PAdValue = 275
        }
    else if (PAd == 'moderate'){   
        var PAdValue = 325
    }
    else if (PAd == 'active'){   
        var PAdValue =385
        }
    else if (PAd == 'very active'){   
         var PAdValue = 460
    }

    var PANdValue  // initialize variable
    if (PANd == 'sedentary'){
        var PANdValue = 275
        }
    else if (PANd == 'moderate'){   
        var PANdValue = 325
    }
    else if (PANd == 'active'){   
        var PANdValue =385
        }
    else if (PANd == 'very active'){   
         var PANdValue = 460
        }

       
    // Adapt same code for PAnd (no deportivo)
		 
    var tbm = 0.1*bmr
    var GETD = bmr  + tbm + PAdValue + PANdValue  ;
    var strGETD = String(GETD)
    const node = document.createTextNode("Su GETD es igual a "+ strGETD); // Create a child node where text will be stored 
    const para = document.createElement("p");                     // Creates a <p> element for later use
    para.appendChild(node);                                       // Insert child node into parent node, that is, <p>
    const output = document.getElementById("get_container");   // Access the empty container <div> where <p> will be included 
    output.appendChild(para);                                // Transform variable 'Imc' from float to string. 
                                       // Insert <p> into <div>

 }
 function Clean(){
    document.getElementById('get_container').innerHTML='';
    document.getElementById('height2').value = '';
    document.getElementById('weight2').value = '';
    document.getElementById('age').value = '';
    
    const genders = document.getElementsByName("gender");
    for(var i=0;i<genders.length; i++){
      genders[i].checked = false;
    }
    const PAds = document.getElementsByName("PAd");
    for(var i=0;i<PAds.length; i++){
      PAds[i].checked = false;
    }
    const PANds = document.getElementsByName("PANd");
    for(var i=0;i<PANds.length; i++){
      PANds[i].checked = false;
    }
  }
   
    





