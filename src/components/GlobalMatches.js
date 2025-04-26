export const GlobalMatches = ({matches, loading}) => {

    return (
        <div className="box mb-5">
            <p className="title is-6 mb-3">🌍 Global Matches</p>
            <div className="content is-small">
                {loading ?
                    <p>Loading recent matches...</p> :
                    matches.length ?
                        <table className="table is-fullwidth is-striped is-hoverable is-size-7">
                            <thead>
                                <tr>
                                    <th>Price</th>
                                    <th>Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matches.map((match) => (
                                    <tr key={match.id}>
                                        <td>${match.price}</td>
                                        <td>{match.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> :
                        <p>No recent matches.</p>
                }
            </div>
        </div>
    )
}