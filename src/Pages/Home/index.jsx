import './index.css'
import mifoto from '/src/assets/mifoto2.jpg'
import tienda from '/src/assets/tienda.svg'
import portafolioweb from '/src/assets/portafolioweb.svg'

const Home = () => {
    return (
        <>
            <section className="container">
                <img src={mifoto} alt="desarrollador web" className='miFotografia'/>
                <h1>Hola, soy John Córdova y desarrollo pagínas web que se ajusten a tus requerimientos empresariales y emprendimientos</h1>
            </section>
            <h2>¿Qué quieres que realizar hoy?</h2>
            <section className='containerPlans'>
                <article className="webPlans">
                    <div className="">
                        <img src={tienda} alt=""/>
                    </div>
                    <div className=""></div>
                </article>
                <article className="webPlans">
                    <div className="">
                        <img src={portafolioweb} alt=""/>
                    </div>
                    <div className=""></div>
                </article>
            </section>
        </>
    )
}
export default Home