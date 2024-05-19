import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect desde la biblioteca de React.
import "../assets/Styles/products.css"; // Importa el archivo CSS para aplicar estilos al componente.

const Product = ({ name, description, brand, model, image, price }) => { 
  // Declara un componente funcional llamado Product que recibe props: name, description, brand, model, image y price.

  const [comprado, setComprado] = useState(false); 
  // Declara una variable de estado 'comprado' con su función actualizadora 'setComprado', inicializada en 'false'.

  const handCompra = () => { 
    // Define una función llamada 'handCompra' que se ejecuta al hacer clic en el botón.
    setComprado(true); 
    // Cambia el estado 'comprado' a 'true' cuando se llama esta función.
  };

  useEffect(() => { 
    // Utiliza el hook useEffect para ejecutar un efecto secundario después del renderizado.
    if (comprado) { 
      // Comprueba si 'comprado' es true.
      console.log(`${brand} - ${model} ha sido comprado.`); 
      // Imprime un mensaje en la consola indicando que el producto ha sido comprado.
    }
  }, [comprado]); 
  // El efecto se ejecuta solo cuando el estado 'comprado' cambia.

  return ( 
    
    <div className={`product-card ${comprado ? 'comprado' : ''}`}> 
      {/* Define un contenedor div con las clases 'product-card' y, condicionalmente, 'comprado' si el estado 'comprado' es true. */}
      <img src={image} alt={`${brand} - ${model}`} /> 
      {/* Muestra una imagen del producto con la URL especificada y un texto alternativo combinando la marca y el modelo. */}
      <h2>{brand} - {model}</h2> 
      {/* Muestra el título del producto combinando la marca y el modelo. */}
      {comprado ? (<h1 className="vendido">VENDIDO</h1>) : (<p>{description}</p>)} 
      {/* Si el producto está comprado, muestra un título "VENDIDO" con la clase 'vendido'; de lo contrario, muestra la descripción del producto. */}
      {comprado ? (<p>Precio: $0 COP </p>) : (<p id='precio'>Precio: ${price} COP</p>)} 
      {/* Si el producto está comprado, muestra el precio como $0 COP; de lo contrario, muestra el precio real del producto con el id 'precio'. */}
      <button onClick={handCompra} disabled={comprado}>{comprado ? 'VENDIDO' : 'Comprar'}</button> 
      {/* Muestra un botón que, al hacer clic, ejecuta la función 'handCompra'. El botón está deshabilitado si el producto está comprado y cambia su texto según el estado 'comprado'. */}
    </div>
  );
};

export default Product; 

