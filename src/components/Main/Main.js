import React, { createContext, useState } from 'react';
import Booking from '../Booking/Booking';
import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookingDetail from '../BookingDetail/BookingDetail';
import './Main.css';
import Login from '../Login/Login';
import Search from '../Search/Search';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import NotFound from '../NotFound/NotFound';


export const UserContext = createContext();

const Main = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <div className="bg-image ">
            <main className='overlay'>
            <UserContext.Provider value={[loggedInUser, setLoggedInUser] }>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Header />
                            <Booking />
                        </Route>
                        <Route path="/booking">
                            <Header />
                            <Booking />
                        </Route>
                        <Route path="/bookingDetail/:id">
                            <Header />
                            <BookingDetail />
                        </Route>
                        <PrivateRoute path="/search/:id">
                            <Search />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="*">
                            <Header />
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
            </main>
        </div>
    );
};

export default Main;