import './index.css'
import mifoto from '/src/assets/mifoto2.jpg'
const Home = () => {
    return (
        <>
            <section className="container">
                <img src={mifoto} alt="desarrollador web" className='miFotografia'/>
                <h1>Hola quieres desarrollar algo?</h1>
            </section>
        </>
    )
}
export default Home