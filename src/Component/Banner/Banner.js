import './Banner.css'
import { banner } from '../../Static/Index.js'

function Banner() {
    return (
        <section style={{
            background: `url(${banner}) `,
            height: '400px',
            marginBottom: '80px'
        }} >

        </section >
    )
}


export default Banner