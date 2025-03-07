import './index.css'
import mifoto from '/src/assets/mifoto2.jpg'
import Planes from '../../Components/Planes'

const Home = () => {
    return (
        <>
            <section className="container">
                <img src={mifoto} alt="desarrollador web" className='miFotografia'/>
                <h1 style={{display:'none'}}> comprar una pagina web, crear una pagina web fácil, quiero desarrollar una web pero no se como, quiero comprar una pagina web para mi negocio o emprendimiento.</h1>
                <p>Hola, soy John Córdova entusiasta Ecuatoriano me dedico a realizar páginas web para cualquier tipo de negocios, uso wordpress para el desarrollo de estas páginas. Por otro lado uso Javascript para el desarrollo de funcionalidades que requieran mayor complejidad.</p>
                <p>¿Qué quieres realizar hoy?</p>
            </section>
            <Planes/>
        </>
    )
}
export default Home