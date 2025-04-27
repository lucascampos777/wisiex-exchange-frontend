import React from 'react';

export const OrderBook = ({bids, asks, loading}) => {

    if (loading) {
        return (
            <div className="box mb-5">
                <p className="title is-6 mb-3">📚 Order Book</p>
                <div className="content is-small">
                    <p>Loading order book...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="box mb-5">
            <p className="title is-6 mb-3">📚 Order Book</p>
            <div className="columns is-gapless">
                <div className="column is-half">
                    <p className="has-text-weight-bold has-text-success">Bids</p>
                    <table className="table is-fullwidth is-striped is-hoverable is-size-7">
                        <thead>
                            <tr>
                                <th>Price</th>
                                <th>Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((bid) => (
                                <tr key={bid.id}>
                                    <td>${bid.price}</td>
                                    <td>{bid.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="column is-half">
                    <p className="has-text-weight-bold has-text-danger">Asks</p>
                    <table className="table is-fullwidth is-striped is-hoverable is-size-7">
                        <thead>
                            <tr>
                                <th>Price</th>
                                <th>Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asks.map((ask) => (
                                <tr key={ask.id}>
                                    <td>${ask.price}</td>
                                    <td>{ask.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
