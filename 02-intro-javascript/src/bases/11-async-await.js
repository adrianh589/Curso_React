
// Forma tradicional (confusa)
/*const getImagenPromesa = () => new Promise( resolve => {
 resolve('https://kjhbfasdhkjfsdljk.com');
} );

getImagenPromesa().then(console.log);*/


/* Forma recortada y facil de leer
* el async puede transformar una función a promesa
* */
const getImagen = async () => {

    const apiKey = 'unLwuXey2rvmDPsQIBXr8gkIZewcGWv7';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const data = resp.json();

    console.log(data);

    data.then( resp => {
        const { url } = resp.data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } );
}

getImagen();





/*

peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);*/
