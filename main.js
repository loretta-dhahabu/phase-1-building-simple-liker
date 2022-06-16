// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modalError = document.getElementById( "modal" );
modalError.classList.add( "hidden" );

let clickHearts = document.querySelectorAll( ".like-glyph" );
clickHearts.forEach( ( heart ) =>
{
  heart.addEventListener( "click", () => 
  {
    mimicServerCall()
      .then( () =>
      {
        if ( heart.innerText !== FULL_HEART )
        {
          heart.classList.add( "activated-heart" )
          heart.innerText === FULL_HEART;
        }
        else
        {
          heart.classList.remove( "activated-heart" )
          heart.innerText === EMPTY_HEART;
        }

      } )
      .catch( ( error ) =>
      {
        modalError.classList.remove( "hidden" )
        modalError.querySelector( "h2" ).innerText = error
        setTimeout( () =>
        {
          modalError.classList.add( "hidden" )
        }, 3000 )
      } )
  } )
})

  

// let callbackFn = mimicServerCall(); 

      
     

  





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
