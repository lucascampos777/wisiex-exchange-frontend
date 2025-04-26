import { toCamelCase } from "../utils/toCamelCase"

export const MyHistory = ({matches, loading}) => {

    return (
        <div className="box mb-5">
            <p className="title is-6 mb-3">🕘 My Trade History</p>
            <div className="content is-small">
                {loading ?
                    <p>Loading my history...</p> :
                    matches.length ?
                        <table className="table is-fullwidth is-striped is-hoverable is-size-7">
                            <thead>
                                <tr>
                                    <th>Price</th>
                                    <th>Volume</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matches.map((match) => (
                                    <tr key={match.id}>
                                        <td>${match.price}</td>
                                        <td>{match.amount}</td>
                                        <td>{toCamelCase(match.type)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> :
                        <p>No recent history.</p>
                }
            </div>
        </div>
    )
}