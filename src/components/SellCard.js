import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/authContext';
import { toast } from 'react-toastify';

export const SellCard = ({ refreshData }) => {
    const { token } = useAuth();
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');

    const handleSell = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/order/sell', { amount: Number(amount), price: Number(price) });
            refreshData();
            toast.success('Sell order placed!');
            setAmount('');
            setPrice('');
        } catch (err) {
            console.error(err);
            toast.error('Error placing sell order.');
        }
    };

    return (
        <div className="box mb-5">
            <p className="title is-6 mb-3 has-text-danger">🏷️ Sell BTC</p>
            <form onSubmit={handleSell}>
                <div className="field">
                    <label className="label is-small">Amount (BTC)</label>
                    <div className="control">
                        <input
                            className="input is-small"
                            type="number"
                            placeholder="e.g., 0.5"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            min="0"
                            step="any"
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label is-small">Price (USD)</label>
                    <div className="control">
                        <input
                            className="input is-small"
                            type="number"
                            placeholder="e.g., 50000"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min="0"
                            step="any"
                            required
                        />
                    </div>
                </div>

                <div className="field mt-4">
                    <div className="control">
                        <button type="submit" className="button is-danger is-small is-fullwidth">
                            Place Sell Order
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}