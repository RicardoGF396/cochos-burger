import Pasos from "components/Pasos";
import useQuiosco from "hooks/useQuiosco";
import Head from "next/head";
import { useEffect, useCallback } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Total() {

    const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco()

    //Me permite ejecutar esta función unicamente cuando Pedido cambie.
    //Esto se hace debido a problemas que surgen en el useEffect ya que necesitamos que esta funcion
    //la vea el boton de confirmar
    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3
    }, [pedido, nombre])

    useEffect(() => {
        comprobarPedido
    }, [pedido, comprobarPedido])

  return (
    <>
      <Head>
        <title>Cochos - Total </title>
        <meta name="description" content="Cochos Burger" />
      </Head>
      <div className="p-12">
        <h1 className="font-bold text-3xl">Total</h1>
        <p>Confirma tu pedido a continuación</p>
      </div>

      <div className="px-12 ">
        <form
        onSubmit={colocarOrden}
        >
          <label
            htmlFor="nombre"
            className="block text-slate-800 font-bold outline-none"
          >
            Nombre completo
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-50 w-full lg:w-1/3 p-2 rounded-md border"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <div className="mt-10">
            <p className="text-2xl">
              Total a pagar {""}
              <span className="font-bold"> ${total}.00 </span>{" "}
            </p>
          </div>
          <div className="mt-5">
            <input
              type="submit"
              className={`${
                comprobarPedido() ? "bg-gray-300" : "bg-orange-500" 
                } w-full lg:w-auto px-5 py-2 rounded font-bold text-white cursor-pointer`}
              value="Confirmar pedido"
              disabled={comprobarPedido()}
            />
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Pasos />
    </>
  );
}
