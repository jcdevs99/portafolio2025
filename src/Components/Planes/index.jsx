import './index.css'
import tienda from '/src/assets/tienda.svg'
import portafolioweb from '/src/assets/portafolioweb.svg'
const Planes = () => {
    return (
        <section className='containerPlans'>
        <article className="webPlans">
            <img src={tienda} alt=""/>
            <div className="descriptionPlan">
                <h3 className='title'>Tienda online</h3>
                <div className='description'>
                    <p>Coloca y vende tus productos por internet las 24 horas del día, los 365 días del año.</p>
                    <p>Ajusta costos de envio, añade impuestos, presenta tu producto estrella y ten preparado una landing page para promociones por temporada.</p>
                </div>
                <div>
                    <details>
                        <summary>¿Qué incluye?</summary>
                        <ul className='details'>
                            <li>Dominio <strong>www.tunegocio.com</strong></li>
                            <li>Hosting 10gb</li>
                            <li>Wordpress</li>
                            <li>Certificado SSL</li>
                            <li>Email empresarial <strong>support@tunegocio.com</strong></li>
                            <li>Woocomerce para recibir pagos</li>
                            <li>Protección DDoS</li>
                            <li>Panel de control</li>
                            <li>Ancho de banda ilimitado</li>
                        </ul>
                    </details>
                </div>
            </div>
        </article>
        <article className="webPlans">
            <img src={portafolioweb} alt=""/>
            <div className="descriptionPlan">
                <h3 className='title'>Portafolio web</h3>
                <div className='description'>
                    <p>Coloca y vende tus productos por internet las 24 horas del día, los 365 días del año.</p>
                    <p>Ajusta costos de envio, añade impuestos, presenta tu producto estrella y ten preparado una landing page para promociones por temporada.</p>
                </div>
                <div>
                    <details>
                        <summary>¿Qué incluye?</summary>
                        <p className='details'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus explicabo, ipsam non alias optio voluptas itaque aliquam quod sed reprehenderit dolores tempore, rem suscipit cupiditate atque officia debitis repellendus perferendis.</p>
                    </details>
                </div>
            </div>
        </article>
    </section>
    )
}
export default Planes