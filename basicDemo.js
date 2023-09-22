const SERVER_URL = "http://localhost:8080/api/cars"

const car = fetch(SERVER_URL)
                    .then(response =>{ 
                        console.log("hej")
                        return response.json()
                    })