import useQuiosco from "hooks/useQuiosco";
import Image from "next/image";
import Categoria from "./Categoria";


function Header() {
  const {categorias} = useQuiosco()
  
  return (
    <>
      <div className="flex gap-x-8 justify-center">
        <Image width="150" height={100} src="/Logo.svg" alt="Logo" />
        <Image width={980} height={180} src="/Banner.png" alt="banner" />
      </div>
      <div className="flex justify-center">
      <div className="grid grid-cols-6 mt-10 w-full gap-x-4 bg-white">
      {categorias.map(categoria => (
        <Categoria key={categoria.nombre} categoria={categoria} />
      ))}
      </div>
      </div>
      
    </>
  );
}

export default Header;
