const buttons = document.querySelectorAll('.button');

/*console.log(`${buttons}`);
[object NodeList] because
The template literal converts the NodeList to a string using its toString() method:*/

console.log(buttons); // NodeList(3) [button, button, button]

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch(e.target.id){
      case "grey" :
        console.log("grey");
        body.style.background = e.target.id;
        break;
        case "blue" :
          console.log("B");
          body.style.background = e.target.id;
          break;
          case "white" :
            console.log("W");
            body.style.background = e.target.id;
            break;
            case "yellow" :
              console.log("Y");
              body.style.background = e.target.id;
        break;
    }
  });
});

console.log('ayan');
