import Header from "components/Header";
import ProductoCard from "components/ProductoCard";
import Head from "next/head";
import ModalProducto from "components/ModalProducto";
import Pasos from "components/Pasos";
import Modal from "react-modal";
import useQuiosco from "hooks/useQuiosco";
import { ToastContainer } from "react-toastify";
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

export default function Layout({ productos, pagina }) {
  const { modal } = useQuiosco();

  return (
    <>
      <Head>
        <title>Cochos - {pagina} </title>
        <meta name="description" content="Cochos Burger" />
      </Head>

      <div className="">
        <nav className="w-[100%] py-6">
          <Header />
        </nav>
        <main className="px-8">
          <h2 className="font-bold text-4xl">{pagina}</h2>
          <p className="mt-3">Elige y personaliza tu pedido a continuación</p>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {productos?.map((producto) => (
              <ProductoCard producto={producto} key={producto.id} />
            ))}
          </div>
        </main>
        {modal && (
          <Modal isOpen={modal} style={customStyles}>
            <ModalProducto />
          </Modal>
        )}
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
