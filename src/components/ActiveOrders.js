import axios from "axios"
import { toCamelCase } from "../utils/toCamelCase"
import { toast } from "react-toastify";

export const ActiveOrders = ({ orders, loading, refreshData }) => {

    const cancelOrder = async (id) => {
        try {
            await axios.delete(`/order/cancel/${id}`);
            toast.success('Order cancelled successfully.')
            refreshData();
        } catch(err) {
            console.log(err)
            toast.error('Cancelling order failed.')
        }
    }

    return (
        <div className="box mb-5">
            <p className="title is-6 mb-3">📜 My Active Orders</p>
            <div className="content is-small">
                {loading ?
                    <p>Loading orders...</p> :
                    orders.length ?
                        <table className="table is-fullwidth is-striped is-hoverable is-size-7">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Price</th>
                                    <th>Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.amount}</td>
                                        <td>${order.price}</td>
                                        <td>{toCamelCase(order.type)}</td>
                                        <td>
                                            <button className="button is-green is-small" onClick={() => { cancelOrder(order.id) }}>X</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> :
                        <p>No active orders.</p>
                }
            </div>
        </div>
    )
}