/*
JSON : js object notation

bentuknya mirip banget dengan objek di js tetapi belum tentu valid itu objek js.

tetapi server biasanya tidak mengirim dalam bentuk objek tetapi berbentuk string

*/

/*
const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;

console.log(responseFromServer); // output string
// maka perlu di parse dengan fungsi JSON builtin
// fyi JSON selalu dobel quote, tidak bs single quote atau backtic

const parseResponse = JSON.parse(responseFromServer);
console.log(parseResponse);
// kalo sudah diparse ke objek baru bs dipanggil objeknya
console.log(parseResponse.name);
console.log(parseResponse.age);
console.log(parseResponse.location);

// untuk mengkonversi objek JS ke JSON, menggunakan JSON.stringify()

const dataClient = {nama: 'jokonto77', usia: 69};
const dataToSend = JSON.stringify(dataClient);
console.log(dataToSend);
*/

/*
AJAX

API : adalah url yang dapat membuat request.
API seperti website tetapi hanya utk machine.

metodnya dapat merekues ke komputer utk mendapatkan informasi
*/

 const DOG_URL = "https://dog.ceo/api/breeds/image/random";
 const dogDisplay = document.getElementById('dog-target');

 /*
 function addDog(){
    const asu = fetch(DOG_URL);
    // console.log(asu);
    asu.then(function (response){
      // const proccesingPromise = response.text();
      const processingAnotherPromise = response.json();
      // return proccesingPromise;
      console.log(processingAnotherPromise);
      return processingAnotherPromise;
    })
    .then(function(processedResponse){
      // const dogObj = JSON.parse(processedResponse);
      const img = document.createElement('img');
     // img.src = dogObj.message;
     img.src = processedResponse.message;
      img.alt = 'cute dog';
      dogDisplay.appendChild(img);
    }).catch(function(error){
      alert('it is error !')
    });
    }
    document.getElementById('dog-btn').addEventListener('click', addDog);
    
    */
 /*
 menggunakan response.text
 
 function addDog() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
    const processingPromise = response.text();
    return processingPromise;
  })
    .then(function (processedResponse) {
    const dogObject = JSON.parse(processedResponse);
    const img = document.createElement("img");
    img.src = dogObject.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  });
}
  */

// bedanya adalah ketika kita menggunakan response.text(),
// kita harus melakukan JSON.parse
// ketika response yang diambil adalah response.json(), kita
// tidak perlu lagi melakukan parsing dan langsung memanfaatkannya

// selain kode diatas, kita dpat menggunakan async await alih alih
// menggunakan banyak chaining .then dan .then

async function addDog() {
  const janji = await fetch(DOG_URL);
  const prosesRespon = await janji.json();
  const img = document.createElement('img');
  img.src = prosesRespon.message;
  img.alt = 'kyut dog';
  dogDisplay.appendChild(img);
}
document.getElementById('dog-btn').addEventListener('click', addDog);

// keyword await hanya bisa digunakan di dalam fungsi async.
// jadi berikan keyword async dulu ke fungsi yang akan diberi await
// await = tell your code to wait or pause until they finished that job
// contoh :

/*
function getName(){
  return 'brian';
}
console.log(`a promise ${getName()}`);
*/
// output : a promise brian
// hanya string biasa

// sedangkan jika fungsi getName diberi async akan return promise
async function getname(){
  return 'brian';
}
console.log(`output : ${getName()}`)
// output : output : [object Promise]