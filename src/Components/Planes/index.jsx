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
                <p>Coloca y vende tus productos por internet las 24 horas del día, los 365 días del año. Ajusta costos de envió, añade impuestos, presenta tu producto estrella y ten preparado una landing page para promociones por temporada.</p>
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
                        <li>Soporte técnico</li>
                        <li>Chat de WhatsApp</li>
                    </ul>
                </details>
            </div>
            <button type='button'>Comprar</button>
        </article>
        <article className="webPlans">
            <img src={portafolioweb} alt=""/>
            <div className="descriptionPlan">
                <h3 className='title'>Portafolio web</h3>
                <p>La primera imagen que reciben tus clientes es vital para generar confianza. Muestra lo que sabes hacer, a que te dedicas, establece confianza con tu cliente potencial y vende tus servicios.</p>
                <details>
                    <summary>¿Qué incluye?</summary>
                    <ul className='details'>
                        <li>Dominio <strong>www.tunegocio.com</strong></li>
                        <li>Hosting 10gb</li>
                        <li>Wordpress</li>
                        <li>Certificado SSL</li>
                        <li>Email empresarial <strong>support@tunegocio.com</strong></li>
                        <li>Protección DDoS</li>
                        <li>Panel de control</li>
                        <li>Ancho de banda ilimitado</li>
                        <li>Soporte técnico</li>
                        <li>Chat de WhatsApp</li>
                    </ul>
                </details>
            </div>
            <button type='button'>Comprar</button>

        </article>
    </section>
    )
}
export default Planes