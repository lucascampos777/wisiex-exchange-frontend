// /src/pages/OrdersPage.jsx
import React, { useEffect, useState } from 'react';
import { Statistics } from '../components/Statistics';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import { BuyCard } from '../components/BuyCard';
import { SellCard } from '../components/SellCard';
import { ActiveOrders } from '../components/ActiveOrders';
import { GlobalMatches } from '../components/GlobalMatches';
import { MyHistory } from '../components/MyHistory';
import { OrderBook } from '../components/OrderBook';

const OrdersPage = () => {
    const [matches, setMatches] = useState([])
    const [loadingMatches, setLoadingMatches] = useState(true)
    const [myMatches, setMyMatches] = useState([])
    const [loadingMyMatches, setLoadingMyMatches] = useState(true)
    const [activeOrders, setActiveOrders] = useState([])
    const [loadingActiveOrders, setLoadingActiveOrders] = useState(true)
    const [bids, setBids] = useState([]);
    const [asks, setAsks] = useState([]);
    const [loadingOrderBook, setLoadingOrderBook] = useState(true);

    const getMatches = async () => {
        setLoadingMatches(true)
        try {
            const res = await axios.get('/trade');
            setMatches(res.data)
            setLoadingMatches(false)
        } catch (err) {
            console.log(err)
        }
    }

    const getMyMatches = async () => {
        setLoadingMyMatches(true)
        try {
            const res = await axios.get('/trade/my_trades');
            setMyMatches(res.data)
            setLoadingMyMatches(false)
        } catch (err) {
            console.log(err)
        }
    }

    const getActiveOrders = async () => {
        setLoadingActiveOrders(true)
        try {
            const res = await axios.get('/order/active_orders');
            setActiveOrders(res.data)
            setLoadingActiveOrders(false)
        } catch (err) {
            console.log(err)
        }
    }

    const getOrderBook = async () => {
        setLoadingOrderBook(true)
        try {
            const res = await axios.get('/order/book');
            setBids(res.data.bids);
            setAsks(res.data.asks);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingOrderBook(false)
        }
    };

    const refreshData = () => {
        getActiveOrders();
        getMatches();
        getMyMatches();
        getOrderBook();
    }

    useEffect(() => {
        refreshData();
    }, [])

    return (
        <div>
            <Navbar />

            <div className="container mt-6">
                <Statistics />

                <div className="columns is-variable is-6">

                    <div className="column is-4">
                        <GlobalMatches matches={matches} loading={loadingMatches} />
                        <MyHistory matches={myMatches} loading={loadingMyMatches} />
                    </div>

                    <div className="column is-4">
                        <div className="columns is-variable is-2">
                            <div className="column is-6">
                                <BuyCard refreshData={refreshData} />
                            </div>
                            <div className="column is-6">
                                <SellCard refreshData={refreshData} />
                            </div>
                        </div>
                    </div>

                    <div className="column is-4">
                        <OrderBook bids={bids} asks={asks} loading={loadingOrderBook}/>
                        <ActiveOrders orders={activeOrders} loading={loadingActiveOrders} refreshData={refreshData}/>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OrdersPage;
