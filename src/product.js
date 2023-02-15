
function Product({name,price,quantity}) {

    return (
        <div id = "product">
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h2>{quantity}</h2>
        </div>
    )
}

export default Product