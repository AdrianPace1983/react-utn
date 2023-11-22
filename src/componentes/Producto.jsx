import './Producto.css';

export default function Producto  (){
const imagen = "imagenes/freidora.webp";
    const titulo = "Freidora";
    const precio_anterior = 45000;
    const precio_actual = 35000;
    const envio_gratis = true;

    return(
    <div className='producto'>
        <img src={imagen} alt="" />
        <div className='producto-info'>
            <h2>{titulo}</h2>
            <p>
                <del className='precio-anterior'>
                    ${precio_anterior}
                </del>
                <br />
                <span className='precio-actual'>
                    ${precio_actual}
                </span>
            </p>
            <p className='envio-gratis'>
                Envío gratis full {envio_gratis}
            </p>
        </div>
    </div>
    )
}

//-
//const imagen = "imagenes/potter_lego.webp";
//const título: string
//const precio_anterior: number
//const precio_actual: number
//const envio_gratis: boolean

// - Botón de "Comprar": HTML_Element
//const imagen = "imagenes/potter_lego.webp";
//const título = "Lego Harry Potter";
//const precio_anterior = 45000;
//const precio_actual = 35000;
//const envio_gratis = true;
//const titulo = "Lego Harry Potter";


