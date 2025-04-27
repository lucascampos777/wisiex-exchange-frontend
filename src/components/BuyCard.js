import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const BuyCard = ({ refreshData }) => {
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');

    const handleBuy = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/order/buy', { amount: Number(amount), price: Number(price) });
            if(res.data.message) {
                toast.success(res.data.message)
            } else {
                toast.success('Buy order placed!');
            }
            refreshData()
            setAmount('');
            setPrice('');
        } catch (err) {
            console.error(err);
            toast.error('Error placing buy order.');
        }
    };

    return (
        <div className="box mb-5">
            <p className="title is-6 mb-3 has-text-success">🛒 Buy BTC</p>
            <form onSubmit={handleBuy}>
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
                        <button type="submit" className="button is-primary is-small is-fullwidth">
                            Place Buy Order
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}