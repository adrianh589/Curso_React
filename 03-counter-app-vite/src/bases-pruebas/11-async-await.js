
export const getImagen = async () => {

    try {
        const apiKey = 'unLwuXey2rvmDPsQIBXr8gkIZewcGWv7';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const {url} = data.images.original;
        return url;

    } catch (error) {
        console.log(error);
        return 'No se encontró la imagen'
    }
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
