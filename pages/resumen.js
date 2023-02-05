import Pasos from "components/Pasos";
import Head from "next/head";
import useQuiosco from "hooks/useQuiosco";
import ResumenProducto from "components/ResumenProducto";
import Modal from "react-modal";
import ModalProducto from "components/ModalProducto";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  //Se pone __next debido a que es el archivo principal que usa Vite JS para rendizar la página
Modal.setAppElement("#__next");

export default function Resumen() {

    const {pedido, modal} = useQuiosco()

  return (
    <>
      <Head>
        <title>Cochos - Resumen </title>
        <meta name="description" content="Cochos Burger" />
      </Head>

      <div className="p-12">
        <h1 className="font-bold text-3xl">Resumen</h1>
        <p>Revisa tu pedido</p>
        <div className="mt-12">
            {pedido.length === 0 ?
            (<div className="w-full text-center mt-32">
                <h3 className="font-bold text-3xl">No hay productos agregados</h3>
            </div>) :

            (pedido.map(producto => (
                <ResumenProducto producto={producto} key={producto.id} />
            )))

            }
        </div>
      </div>
      {modal && (
          <Modal isOpen={modal} style={customStyles}>
            <ModalProducto />
          </Modal>
        )}
      <Pasos />
    </>
  );
}
