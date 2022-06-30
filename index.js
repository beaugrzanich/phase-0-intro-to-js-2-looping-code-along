// Code your solutions in this file
/*beforeEach( () => {
    spy = sinon.spy( console, 'log' );
  } );

  afterEach( () => {
    spy.restore();
  } );
*/
//const names = ["Guadalupe", "Ollie", "Aki"];

    function writeCards(names, suprise) {
        const messages = []
      for (let i = 0; i < names.length; i++) {
         messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      }
      return messages
    }
    writeCards(names);

  function countDown(i){

    let countdown = i;
    while (countdown >= 0) {
        console.log(countdown--);
    
    }
  }