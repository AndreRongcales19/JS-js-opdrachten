// opdr 1a 
const jsonData = `
{
    "firstname": "Judeska",
    "email": "judeska@example.com"
}
`;
const objData = JSON.parse(jsonData); 
console.log("Voornam: ", objData.firstname);
console.log("Email : ", objData.email); 

// opdr 1b 
const jsonData2 = `{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
}`; 
const objData2 = JSON.parse(jsonData2);
console.log("Voornaam: ", objData2.firstname);
console.log("Achternaam: ", objData2.lastname); 

// opdr 2 
const jsonData3 = `{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
}`;
const objData3 = JSON.parse(jsonData3);
console.log("Titel: ", objData3.title);
console.log("Content: ", objData3.content);
console.log("publishedAt: ", objData3.publishedAt); 

// opdr 3 
const jsonData4 = `
{
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    }
  }`;
const objData4 = JSON.parse(jsonData4);
console.log("Email: ", objData4.email);
console.log("Username: ", objData4.username);
console.log("city: ", objData4.city);
console.log("company name: ", objData4.company);

