import { fileUpload } from '../../src/helpers/index.js';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'react-journal-images',
    api_key: '326233166561255',
    api_secret: 'abUZd4xtKK-tRAfbqTxWkkXEalY'
});

describe( 'Pruebas en fileUpload', () => {
    test('Debe de subir el archivo correctamente a cloudinary', async () => {
        // Debe apuntar a una imagen cualquiera
        const imageUrl = 'https://hips.hearstapps.com/hmg-prod/images/2023-chevrolet-blazer-awd-rs-108-6419c17f847ef.jpg?crop=0.696xw:0.520xh;0.0881xw,0.463xh&resize=1200:*'
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'blazerrs.jpg');

        const url = await fileUpload( file );

        // Dado que sabemos que si devuelve un string, pues esta bien
        // y en caso de que devuelva un null la prueba fallaría
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1].split('.')[0];
        console.log(imageId);
        console.log(segments[ segments.length - 1]);
        const cloudinaryResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image' // es opcional pero nos aseguramos de que se borre una imagen
        });
        // console.log(cloudinaryResp);
    });

    test('Debe de retornar null', async () => {
        const file = new File([], 'blazerrs.jpg');
        const url = await fileUpload( file );
        console.log(url);
        expect(url).toBe(null);
    });
} );
