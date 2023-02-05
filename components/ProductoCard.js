import useQuiosco from 'hooks/useQuiosco'
import Image from 'next/image'
import React from 'react'

function ProductoCard({producto}) {

  const {handleSetProducto, handleChangeModal} = useQuiosco()

  const {nombre, precio, descripcion, imagen} = producto

  return (
    <div className='p-8 flex items-center justify-center gap-x-4 bg-white rounded-xl'>
        <Image width={94} height={94} src={`${imagen}.svg`} alt={nombre} />
        <div className='px-3 w-3/4 '>
            <h2 className='font-semibold text-3xl'>{nombre}</h2>
        <p>{descripcion}</p>
        <h3 className='font-medium text-2xl'>${precio}.00</h3>
        <button 
        onClick={() => {
          handleSetProducto(producto)
          handleChangeModal()
          }}
        className='bg-[#FFA30C] hover:bg-[#cc881b] font-semibold px-8 rounded-lg py-2 text-white outline-none mt-2'>Seleccionar</button>
        </div>
    </div>
  )
}

export default ProductoCard