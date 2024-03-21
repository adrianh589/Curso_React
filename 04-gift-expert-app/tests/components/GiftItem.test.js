import {screen, render} from "@testing-library/react";
import {GiftItem} from "../../src/components/index.js";

describe('Pruebas en <GiftItem>', () => {

    const title = 'Saitama';
    const url = 'www.saitama.com'

    test('Debe de hacer match con el snapshot', () => {
       const {container} = render(<GiftItem title={title} url={url}/>);
       expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el url y el alt indicado', () =>{
        render(<GiftItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('Debe de mostrar el titulo en el componente', () => {
       render(<GiftItem title={title} url={url} /> );
       expect(screen.getByText(title)).toBeTruthy();
    });
});