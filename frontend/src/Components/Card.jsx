import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">

                <Link to={"/menu/${item._id}"}>
                    <figure>
                        <img src={item.image} alt="Shoes" className="hover:scale-105 transition-all duration-300 md:h-72" />
                    </figure>
                </Link>



                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card