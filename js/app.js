const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", e => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();     
        console.log(data);        
        banderillas(data);
        formularioCliente(data);
        filtroPaises(data);
    } catch (error) {
        console.log(error);
    }
}

const banderillas = data => {
    let elementos = '';
    data.forEach(item => {
        elementos += `
        <article class="card">
        <img src="${item.flags.png}" alt="" class="img-fluid">
        <div class="card-content">
            <h3>${item.name.official}</h3>
            <p>
            <b>Capital: </b>
            ${item.capital}
            </p>
            <p>
                <b>Population: </b>
                ${item.population}
            </p>
            <p>
            <b>Language:</b> ${ item.languages ? Object.values(item.languages).join(', ') : "No disponible" }           

            
            </p>
            <p>
                <b>Región: </b>
                ${item.region}
            </p>

        </div>      
        
    </article>        `
    });

    banderas.innerHTML = elementos;
}

/*
<div class="card-content">
${item.languages[Object.keys(item.languages)[0]]}
            <h3>${item.name}</h3>
            <p>
                <b>Population: </b>
                ${item.population}
            </p>
            <p>
                <b>Capital: </b>
                ${item.capital}
            </p>
            <p>
                <b>Región: </b>
                ${item.region}
            </p>
        </div> */

