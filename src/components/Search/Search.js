import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import locationDetail from '../../fakeData/locationDetail';
import locationData from '../../fakeData/locationData';
import NonSearchHeader from '../NonSearchHeader/NonSearchHeader';
import './Search.css';
import SearchResult from './SearchResult';
import NotFound from '../NotFound/NotFound';
import GoogleMap from './GoogleMap';
import mapInfo from '../../fakeData/mapInfo';

const Search = () => {
    const { id } = useParams();
    const [location, setLocation] = useState([]);
    const [locationName, setLocationName] = useState('');
    const [mapData, setMapInfo] = useState({});

    useEffect(() => {
        const detail = locationDetail.filter(item => item.locationId === parseInt(id));
        setLocation(detail);

        if (detail.length) {
            const location = locationData.find(item => item.id === parseInt(id));
            setLocationName(location.title);

            const locationMap = mapInfo.find(item => item.locationId === parseInt(id));
            setMapInfo(locationMap);
        }
    }, [id]);

    return (
        <div className="search-bg-color">
            <div className="container">
                <NonSearchHeader />
                {
                    location.length ? <div className="row">
                        <div className="col-md-7 mt-3">
                            <p className="ml-4 mt-4 line-height"><small> 252 stays Apr 13-17 3 guests</small></p>
                            <h4 className="ml-4"> Stay in {location.length && locationName}</h4>
                            {
                                location.map(item => <SearchResult key={item.id} resort={item} />)
                            }
                        </div>
                        <div className="col-md-4 mt-3">
                             <GoogleMap mapData={mapData} />                 
                        </div>
                    </div>
                        : <NotFound />
                }
            </div>

        </div>
    );
};

export default Search;