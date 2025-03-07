import './index.css'
import mifoto from '/src/assets/mifoto2.jpg'
import Planes from '../../Components/Planes'

const Home = () => {
    return (
        <>
            <section className="container">
                <img src={mifoto} alt="desarrollador web" className='miFotografia'/>
                <h1>Hola, soy John Córdova y desarrollo pagínas web que se ajusten a tus requerimientos empresariales y emprendimientos</h1>
            </section>
            <h2>¿Qué quieres realizar hoy?</h2>
            <Planes/>
        </>
    )
}
export default Home