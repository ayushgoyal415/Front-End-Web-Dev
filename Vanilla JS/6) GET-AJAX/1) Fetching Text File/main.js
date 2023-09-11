const grab = s => document.querySelector(s);
/*
    * XHR readyStates

    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
*/

grab("#ready-states").addEventListener("click", ready_states);
grab("#get-text").addEventListener("click", get_text);

function ready_states() {
  // xhr is an object with various functions and properties
  const xhr = new XMLHttpRequest();
  console.log(`before .open() : ${xhr.readyState}`);

  // open receives 3 args -> http request type, url/file, async(boolean)
  xhr.open("GET", "sample.txt", true);
  console.log(`after .open() : ${xhr.readyState}`);

  //. onprogress executes when readyState is in request processing stage
  xhr.onprogress = function () {
    console.log(`on-progress : ${this.readyState}`);
  };

  //. onload executes only when readyState becomes 4
  xhr.onload = function () {
    console.log(`on-load : ${this.readyState}`);
  };

  //. onreadystatechange executes when the ready state changes
  xhr.onreadystatechange = function () {
    console.log(`Ready state on ready state change : ${this.readyState}`);
  };

  // Sends the http request
  xhr.send();
}

function get_text() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "sample.txt", true);

  xhr.onload = function () {
    //. Checking status code before loading the text file
    if (this.status === 200) {
      const div = document.createElement("div");
      div.style.marginTop = "10px";
      div.innerHTML = this.responseText;
      document.body.appendChild(div);
    }
  };

  //. To handle error
  xhr.onerror = function () {
    console.log("Request Error...");
  };

  xhr.send();
}
