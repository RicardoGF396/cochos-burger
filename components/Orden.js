import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

export default function Orden({ orden }) {
  const { id, nombre, total, pedido } = orden;

  const completarOrden = async () => {
    try{
        const data = await axios.post(`/api/ordenes/${id}`)
        toast.success('Orden lista')
        console.log(data);
    }catch(e){
        toast.error('Hubo un error')
        console.log(e);
    }
  }

  return (
    <div className="border p-10 mb-4 rounded-lg bg-white space-y-5">
      <h3 className="text-2xl font-bold"> Orden: {id} </h3>
      <p className="text-lg font-bold">Cliente {nombre} </p>
      <div>
        {pedido.map((platillo) => (
          <div
            key={platillo.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={60}
                height={200}
                src={`/${platillo.imagen}.svg`}
                alt={platillo.nombre}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">
                {platillo.nombre}
              </h4>
              <p className="tex-lg font-bold">Cantidad: {platillo.cantidad} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-black">
          Total a pagar: ${total}.00
        </p>
        <button
            onClick={() => completarOrden()}
         className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 rounded-lg font-bold md:mt-0 py-3 px-10">
          Completar orden
        </button>
      </div>
    </div>
  );
}
