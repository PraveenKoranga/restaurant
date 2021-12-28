import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className="main-card-container">
                {
                    menuData.map((curElem) => {
                        // object destructing
                        const { id, name, category, Image, description, price } = curElem;
                        return (
                            <>
                                <div className="card" key={curElem.id}>
                                    <div className="card-number">{id}</div>
                                    <div className="card-category">{category}</div>
                                    <div className="card-name">{name}</div>
                                    <div className="card-desc">{description}</div>
                                    <div className="image">
                                        <img src={Image} alt="" />
                                    </div>
                                    <div className="order">
                                        <p className="price">{price} <span>(40% off)</span></p>
                                        <a className="order-now" href="/">order now</a>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default MenuCard

