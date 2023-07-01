import React, { useState, useEffect } from 'react';

const RankItems = () => {

    /* Sets an empty array to start for useState 
    So array will never by NULL */
    const [items, setItems] = useState([]);

    /* Sets dataType to 1 */
    const dataType = 1; 

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data)
            })
            
        }, [])

    return (
        <main>
            {   
                /* Removed null because it will never be null. Checking for 0 */
                (items.length > 0) ? items.map((item) => <h3>{item.title }</h3>):<div>Loading ...</div>
            }
        </main>
        )
}
export default RankItems;