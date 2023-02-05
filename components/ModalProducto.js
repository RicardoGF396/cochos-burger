import Image from "next/image";
import useQuiosco from "hooks/useQuiosco";
import { useState, useEffect } from "react";

const ModalProducto = () => {
  const { producto, handleChangeModal, handleAgregarPedido, pedido } =
    useQuiosco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    //Comprobar si el Modal Actual esta en el pedido
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const productoEdicion = pedido.find(
        (pedidoState) => pedidoState.id === producto.id
      );
      setEdicion(true);
      setCantidad(productoEdicion.cantidad);
    }
  }, [producto, pedido]);

  return (
    <div className="md:flex items-center gap-10 w-[650px] ">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={producto.nombre}
          src={`${producto.imagen}.svg`}
        />
      </div>
      <div className="md:w-2/3 ">
        <div className="flex justify-end ">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="font-bold text-2xl"> {producto.nombre} </h2>
        <p className=""> {producto.descripcion} </p>
        <p className="font-bold text-3xl my-2"> ${producto.precio}.00 </p>

        <div className="flex items-center">
          <button
            onClick={() => {
              cantidad == 1 ? setCantidad(1) : setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="font-semibold text-2xl mx-4"> {cantidad} </p>
          <button
            onClick={() => {
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={() => handleAgregarPedido({ ...producto, cantidad })}
          className="bg-[#FFA30C] px-8 py-2 text-white font-semibold rounded my-4 "
        >
          {edicion ? 'Guardar cambios' : 'Añadir al pedido'}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
