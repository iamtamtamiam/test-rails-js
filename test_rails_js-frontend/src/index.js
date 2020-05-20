console.log("testing...")

const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/users`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));