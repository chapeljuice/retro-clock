// elements
let colonElement = document.querySelectorAll( '.colon' )[0];
let numberFirst = document.querySelectorAll( '.number.first' )[0];
let numberSecond = document.querySelectorAll( '.number.second' )[0];
let numberThird = document.querySelectorAll( '.number.third' )[0];
let numberFourth = document.querySelectorAll( '.number.fourth' )[0];

// blinking colon
let colonBlinking = true;

// updates the clock every half a second
let timer = setInterval( () => updateTime(), 500 );

// updates time
let updateTime = () => {
  // handles blinking colon
  colonBlinking = !colonBlinking;
  if ( colonBlinking ) {
      colonElement.classList.add( 'blinking' );
  } else {
      colonElement.classList.remove( 'blinking' );
  }
  
  // get & format time
  let newDate = new Date();
  let currentMinutes = newDate.getMinutes();
  let currentHours = newDate.getHours();
  if ( currentHours > 12 ) {
    currentHours -= 12;
  }
  if ( currentHours < 10 ) {
    currentHours = '0' + currentHours;
  }
  if ( currentMinutes < 10 ) {
    currentMinutes = '0' + currentMinutes;
  }
  let currentTime = currentHours + currentMinutes;

  // get each digit of time
  let firstTime = currentTime.charAt(0);
  let secondTime = currentTime.charAt(1);
  let thirdTime = currentTime.charAt(2);
  let fourthTime = currentTime.charAt(3);
  
  // set appropriate classes on each element
  numberFirst.className = 'number first time-' + firstTime;
  numberSecond.className = 'number second time-' + secondTime;
  numberThird.className = 'number third time-' + thirdTime;
  numberFourth.className = 'number fourth time-' + fourthTime;
}

// call function to update the time
updateTime();
