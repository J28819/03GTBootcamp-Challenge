// Globals
var generateBtn = document.querySelector("#generate");
let alternativemsg = "Becasue Security is important please try again using one of this options Numbers, LowerCase Letters, UpperCase Letters or Symbols and protect your information and equipment."

// for future this will be good to add an admin page and make changes the configuration server side for new symbols, different lenguages,  kanji signs etc...
// Declare Objects to create an easy way to add or remove chain of different characters
var confirmsMsg = [{
                "message": "Do you want to add Numbers" ,
                "DataType": "0123456789"
              },
              {
                "message": "Do you want to add LowerCase letters" ,
                "DataType": "abcdefghijklmnopqrstuvwxyz",
              },
              {
                "message": "Do you want to add UpperCase letters" ,
                "DataType": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
              },
              {
                "message": "Do you want Symbols" ,
                "DataType": "!@#%^&*()_+=~@",
              }
            ]

// this function will lead the prompts in base of the configuration objects in Prompts 
function writePassword() {

  function generatePassword(passwordResult, passLenght) {
    //generateBtn.innerHTML = "Password Ready!"
    var GenPassword = ""
    var mixerpass = ""
    
      //var charachterstochose = passwordResult;
      console.log("this are the charachters to chose: " + passwordResult)
      console.log("this is the numbers of charachters: " + passLenght)
    
    
      if (passwordResult === "") {
        var nothingtyped = confirm('Please select minimum one of the different types of charachters, \nDo you wanto to try again?')
        if (nothingtyped){
          writePassword()
        }else {
         mixerpass = alternativemsg
         return(mixerpass)
          
        }
        }else {
          var maxchar = passwordResult.length;
          for ( var ii = 0; ii < passLenght; ii++ ) {
            var random = Math.floor(Math.random() * maxchar);
            GenPassword = GenPassword + passwordResult.charAt(random);
          
              
         }
         console.log(GenPassword);
         console.log(typeof(GenPassword));
         //Mix the charachters for doubble unique sequence.
         mixerpass = GenPassword.split('').sort(function(){return 0.5-Math.random()}).join('');
          
        // return password to be written into the front end
          return(mixerpass);
        }
        
      }
      
  
  var passwordResult = "";
  
  var passLenght = prompt("Please write the number of charachters in your password between 8 and 128");
  
  console.log()
  if (passLenght > 8 && passLenght < 128) {
    
      confirmsMsg.forEach(element => { 
        var confirmResult = confirm(element.message)
        if (confirmResult) {
          passwordResult += element.DataType
          
        }   
      }
      );

   
      
   }else {
    alert("Please write a valid number between 8 and 128");
    writePassword()
    }

  

  // call generatePassword function and passing arguments for password structure
  var password = generatePassword(passwordResult, passLenght);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  if (password !== alternativemsg) {
    generateBtn.innerHTML = "Well Done!"
    setTimeout(function(){
      generateBtn.innerHTML = "Generate a new Password"
      
    }, 3000)
  }else {
    generateBtn.innerHTML = "Try Again!!"
    setTimeout(function(){
      generateBtn.innerHTML = "Generate Password"
      
    }, 3000)
  }
  
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);document.getElementById("generate").innerHTML = "Processing..."
generateBtn.addEventListener("click",  writePassword)

