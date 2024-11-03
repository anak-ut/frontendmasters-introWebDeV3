/*
JSON : js object notation

bentuknya mirip banget dengan objek di js tetapi belum tentu valid itu objek js.

tetapi server biasanya tidak mengirim dalam bentuk objek tetapi berbentuk string

*/

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