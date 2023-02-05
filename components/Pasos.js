import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Total", url: "/total" },
];

const Pasos = () => {

  const router = useRouter();

    const calcularProgreso = () => {
        let valor
        if(router.pathname === "/") {
            valor = 2
        } else if(router.pathname === "/resumen"){
            valor = 50
        } else {
            valor = 100
        }
        return valor
    }

  return (
    <>
      <div className="fixed bottom-0 right-0 left-0 pt-10 bg-white border">
        <div className="flex justify-between mx-28">
          {pasos.map((paso) => (
            <button
              onClick={() => {
                router.push(paso.url);
              }}
              className="text-2xl font-bold"
              key={paso.paso}
            >
              {paso.nombre}
            </button>
          ))}
        </div>
        <div className="bg-gray-200 rounded-full mb-10 mt-4 mx-28">
          <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center"
          style={{width:`${calcularProgreso()}%`}}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Pasos;

/* 

*/
