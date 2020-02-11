let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'cat1.png') {
      myImage.setAttribute ('src','cat.jpg');
      alert('Meow!');
    } else {
      myImage.setAttribute ('src','cat1.png');
      alert('Meow!');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Name your new cat!');
    if(!myName || myName === null) {
        setUserName();
      } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'My cat name is ' + myName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'My cat name is ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }