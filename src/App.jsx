import './App.css'
import { Layout } from './Components/Layout'
import imagen1 from './assets/imgs/WE2.png'

function App() {

  return (
    <>
      <Layout>
        <h1>Promociona lo que vendes y aunmenta la rentabilidad de tu negocio</h1>
        <p>Hoy en día tener tu negocio en una página de facebook o en redes sociales no es suficiente.</p>
        <a href="https://wa.me/593939349490?text=Hola,%20estoy%20interesado%20en%20comprar%20una%página%20web" target='_blank' title='contactar por whatsapp'>contactar</a>
        <p>Enviame un mensaje y cuentame que tipo de negocio tienes en mente.</p>
      </Layout>
      <Layout>
        <img src={imagen1} alt="miniatura ejemploweb" className='imageWebSiteExample'  />
      </Layout>

    </>
  )
}

export default App
