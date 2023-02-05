import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "layout/AdminLayout"
import Orden from 'components/Orden'

export default function Admin() {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const {data, error, isLoading} = useSWR('/api/ordenes',fetcher, {refreshInterval: 500})

    console.log(data);
    console.log(error);
    console.log(isLoading);
  return (
    <AdminLayout pagina={'Admin'}>
        <h1 className="font-bold text-3xl">Panel de administración</h1>
        <p className='mb-6'>Administra tus ordenes</p>
        {data && data.length ? data.map(orden => 
            <Orden key={orden.id} orden={orden} />
        ) : <p>No hay ordenes pendientes </p> }
    </AdminLayout>
  )
}
