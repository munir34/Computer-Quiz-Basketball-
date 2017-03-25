var score=0

function checkQuestion1(){
              var checkboxes = document.getElementsByName("question1");
              for(var checkbox of checkboxes){

                  console.log(checkbox.value)
                  console.log(checkbox.checked)
                  
                      if (checkbox.checked){
                          if (checkbox.value=="Charles Barkley"){

                              score=score+33
                              if (score> 100){
                                  score=100
                              }

                               alert( "Correct, "+checkbox.value)

                            alert("score is "+score)

                          } else{

                              score=score -33
                              alert("incorrect")

                              if (score< 0){
                                  score=0
                              }
                              alert("score is"+score)
                          }
                      }
                  }
            }


 function checkQuestion3() {
            // Gather the question3 checkboxes into a pile.
            var checkboxes = document.getElementsByName('question3');

            // Choose the next item from the pile
            for (var checkbox of checkboxes) {
                
                // Ask whether the check box is checked
                if (checkbox.checked)  {
                    // If yes...
                    
                    // Ask whether the value is 'clevlend'
                    if (checkbox.value === 'clevlend') {
                        // If yes...
                        score=score+33
                         if (score> 100){
                              score=100
                          }
                        alert('correct good job')
                        alert('score is'+ score+'%')
                    } else {
                        // If no...
                        score=score-33
                        alert('incorrect try agian')
                        alert('score is'+ score+'%')
                    }
                } else {
                    // If checkbox is not checked...
                    continue;
                }
            }
        }    