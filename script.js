const ajax = new XMLHttpRequest();

function onerror() {
  randomExcuseDisp.innerHTML = "There is an Error in displaying the content";
}
// First Card

const randomExcuseDisp = document.getElementById("random-excuse");
const randomExcuseBtn = document.getElementById("random-excuse-btn");

randomExcuseBtn.addEventListener("click", function () {
  const url = "https://excuser.herokuapp.com/v1/excuse";

  ajax.open("GET", url, true);

  ajax.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      randomExcuseDisp.innerHTML = `${data[0].excuse}`;
    } else {
      this.onerror = onerror();
    }
  };

  ajax.send();
});

// Second Card
const particularExcuse = document.getElementById('particular-excuse');
const particularBtn = document.getElementById('particular-id');

particularBtn.addEventListener("click", function() {
  let randomID = prompt("Enter the id you want excuse for", "1");
  let url = "https://excuser.herokuapp.com/v1/excuse/id/" + parseInt(randomID);

  ajax.open("GET", url, true);
  ajax.onreadystatechange = function () {
    if(this.status == 200 && this.readyState === 4) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      particularExcuse.innerHTML = `${data.excuse}`;
    }
    else {
      this.onerror = onerror();
    }
  };

  ajax.send();
});

// Third Card
let nrandomExcuse = document.getElementById('nrandom-excuse');
const nrandomBtn = document.getElementById('nrandom-btn');

nrandomBtn.addEventListener("click", function() {
  let n = prompt("Enter the number of jokes you want to display", "1");
  let url = `https://excuser.herokuapp.com/v1/excuse/${n}`;

  ajax.open("GET", url, true);
  ajax.onreadystatechange = function () {
    if(this.status == 200 && this.readyState === 4) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      for(let i=0;i<n;i++) {
        nrandomExcuse.innerHTML += `<p class="card-text">${data[i].excuse}</p>`
      }
    }
    else {
      this.onerror = onerror();
    }
  };

  ajax.send();
});

// Fourth Card
const specificDisp = document.getElementById('specific-category');
const specificBtn = document.getElementById('specific-btn');

specificBtn.addEventListener("click", function() {
  let category = prompt("Enter the category", "office");
  let url = `https://excuser.herokuapp.com/v1/excuse/${category}`;

  ajax.open("GET", url, true);

  ajax.onreadystatechange = function () {
    if(this.status == 200 && this.readyState === 4) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      specificDisp.innerHTML = `${data[0].excuse}`;
    }
    else {
      this.onerror = onerror();
    }
  };

  ajax.send();
});