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

 function addDog(){
    const asu = fetch(DOG_URL);
    console.log(asu);
    asu.then(function (response){
        const processPromise = response.text();
        return processPromise;
    })
    .then(function (proccedResponse){
        const dogObject = JSON.parse(proccedResponse);
        const img = document.createElement('img');
        img.src = dogObject.message;
        img.alt = 'anjenk';
        dogDisplay.innerHTML = '';
        console.log(dogDisplay);
        dogDisplay.append(img);
    });
 }

 document.getElementById('dog-btn').addEventListener('click', addDog);