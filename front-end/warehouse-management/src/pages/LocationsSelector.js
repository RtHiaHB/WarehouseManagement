import React, { useState, useEffect } from 'react';

function padZeroes(num, size) {
    return num.toString().padStart(size, '0');
}

function LocationSelector(props) {
    const [allLocations, setAllLocations] = useState([]);
    useEffect(() => {
        async function fetchLocations() {
            try {
                const rawLocations = await fetch(`http://${process.env.DATABASE_URI}:${process.env.DATABASE_PORT}/locations`);
                const newLocations = await rawLocations.json();
                setAllLocations(newLocations);
            } catch (err) {
                console.error(err)
            }
        }

        fetchLocations();
    }, [])
    return (
        <div>
            <select onChange={props.onChange}>
                {allLocations.map((location) => (
                    <option value={location.loc_id}>{`${padZeroes(location.aisle, 4)}-${padZeroes(location.col_number, 2)}-${padZeroes(location.lvl, 2)}`}</option>
                ))}
            </select>
            
        </div>
    )
}

export default LocationSelector