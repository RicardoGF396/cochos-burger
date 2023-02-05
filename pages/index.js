import Layout from 'layout/Layout'
import useQuiosco from 'hooks/useQuiosco'

export default function Home() {

  const {categoriaActual} = useQuiosco()  
  return (
    <div>
      <Layout pagina={categoriaActual?.nombre} productos={categoriaActual?.productos}>

      </Layout>
    </div>
  )
}