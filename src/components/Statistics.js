import { useEffect, useState } from "react";
import axios from "axios";

export const Statistics = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('/order').then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="box has-background- mb-6">
            <nav className="level">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Last Price</p>
                        <p className="title is-5">$ {data.last_price || '-'}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">BTC Volume (24h)</p>
                        <p className="title is-5">{data.btc_volume || '-'} BTC</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">USD Volume (24h)</p>
                        <p className="title is-5">{data.usd_volume || '-'} USD</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">High (24h)</p>
                        <p className="title is-5">$ {data.high_price || '-'}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Low (24h)</p>
                        <p className="title is-5">$ {data.low_price || '-'}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Your USD</p>
                        <p className="title is-5">$ {data?.usd_amount || '-'}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Your BTC</p>
                        <p className="title is-5">{data?.btc_amount || '-'} BTC</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}