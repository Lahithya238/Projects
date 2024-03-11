import React, { useEffect, useState } from 'react'
import { useCart } from './CartContext'
import { Table } from 'react-bootstrap'

const CartPage = () => {

    const { cartItem, DeletedCartItem, grandTotal } = useCart();
    const [dataCart, setdataCart] = useState([])

    useEffect(() => {
        setdataCart(cartItem)
    }, [cartItem])

    const handleDelete = (id) => {
        DeletedCartItem(id);
    }
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>

                        <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataCart && dataCart.length > 0 && dataCart.map((items) => {
                            return <tr key={items.id}>
                                <td>{items.id}</td>
                                <td>{items.title}</td>
                                <td><img src={items.image} style={{ height: '40px' }} /></td>
                                <td>{items.category}</td>
                                <td>{items.price}</td>
                                <td><button onClick={() => handleDelete(items.id)}>Delete</button></td>

                            </tr>
                        })
                    }

                    <tr>
                        <td colSpan={4}>GrandTotal</td>
                        <td>{grandTotal}</td>
                    </tr>

                </tbody>
            </Table>

        </div>
    )
}

export default CartPage