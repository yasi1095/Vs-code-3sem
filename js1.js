fetch("http://localhost:8080/api/cars")
    .then(res => res.json())
    .then(cars => {
        const tableRows = cars.map(car => `
            <tr>
                <td>${car.id}</td>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.pricePrDay}</td>
                <td>${car.bestDiscount}</td>
            </tr>
        `);

        const rowsAsStr = tableRows.join("");
        //document.getElementById("tbody").innerHTML = rowsAsStr; // Remember XSS
        console.log(rowsAsStr);
    });
