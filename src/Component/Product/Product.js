import './Product.css'
import { PRODUCT } from '../../Static/Index'

function Product() {
    return (
        <div>
            <section className="product">
                <div className="container">
                    <div className="product-container">
                        <h2 className='product-heading'>Shivaki Products</h2>
                        <div className="product-card-wrapper">
                            {
                                PRODUCT.map((value, index) => (
                                    <div className='product-card' key={index} style={{
                                        background: `url(${value.image}) no-repeat center/cover`,
                                        cursor: 'pointer'
                                    }} >


                                        <div className="product-card-inner" style={{
                                            width: '100%',
                                            height: '100%',
                                        }}>


                                            <h2 className='product-card-inner-deck'>{value.deck}</h2>


                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}



export default Product