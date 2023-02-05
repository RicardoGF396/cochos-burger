import useQuiosco from 'hooks/useQuiosco'
import Image from 'next/image'

function Categoria({categoria}) {
  
    const {categoriaActual, handleClickCategoria} = useQuiosco() 
    const {nombre, icono, id} = categoria

  return (
    <div onClick={() => handleClickCategoria(id)} className={`${categoriaActual?.id == id ? 'bg-[#ffc96b88]' : ''} text-center flex flex-col items-center justify-center py-8 cursor-pointer transition-all duration-300`}>
        <Image width={94} height={94} src={`${icono}.svg`} alt="category-image" />
        <h3 className='text-lg font-medium'>{nombre}</h3>
    </div>
  )
}

export default Categoria