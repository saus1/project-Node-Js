console.log("inciando servidor")
console.log(process.argv)
const args = process.argv.slice(2);
const productosApi = await obtener_pjs()


switch(productosApi){
               //console.log("Toma un dato")
    case "GET":
        console.log("GET");
        if(Array.isArray(productosApi)){
            console.log(`Recibimos ${productosApi} satisfactoriamente`)
        }else{
            console.log("Comando GET incompleto")
        }

        break;
    case "POST":
        console.log("POST");
        if(args[1]){
            console.log(`Recibimos ${args[1]} satisfactoriamente`)
        }else{
            console.log("Comando POST incompleto")
        }
        break;
    case "PUT":
        console.log("PUT");
        if(args[1]){
            console.log(`Editamos dato con id: ${args[1]} satisfactoriamente`)
        }else{
            console.log("Comando PUT incompleto, el id es necesario")
        }
        break;
    case "DELETE":
        console.log("DELETE");
        if(args[1]){
            console.log(`Eliminamos dato con id: ${args[1]} satisfactoriamente`)
        }else{
            console.log("Comando DELETE incompleto, el id es necesario")
        }
        break;
    default:
        console.log("Comando incompleto o invalido")
}

async function obtener_pjs() {
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character", {method: "GET"});
        if(response.ok){
            const data = await response.json();
            const primeros_pjs = data.results.slice(0,5)
            //console.log("Dentro del fetch",primeros_pjs)
            return primeros_pjs
        }
    }catch (error){
        console.log(error)
    }
}


console.log("Por fuera de la función",productosApi)







