import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Layout Imports
import AppLayout from './layouts/AppLayout';
import FullHeaderLayout from './layouts/FullHeaderLayout';

//Import Pages
import DashboardPage from './pages/Dashboard';
import ClientPage from './pages/Client';
import Error404Page from './pages/Error/Error404Page';
import LoginPage from './pages/Login';
import RouteWrapper from './layouts/wrapper';
import CreateClientPage from './pages/Client/create';
import ClientProfilePage from './pages/Client/profile';
import AppointmentCreatePage from './pages/Appointment/create';
import CheckOutPage from './pages/Checkout';
import CalendarPage from './pages/Calendar';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={LoginPage} />
                <RouteWrapper
                    exact
                    path='/'
                    component={DashboardPage}
                    layout={AppLayout}
                />
                <RouteWrapper
                    exact
                    path='/clients'
                    component={ClientPage}
                    layout={AppLayout}
                />
                <RouteWrapper
                    exact
                    path='/clients/create'
                    component={CreateClientPage}
                    layout={FullHeaderLayout}
                />
                <RouteWrapper
                    exact
                    path='/clients/:id'
                    component={ClientProfilePage}
                    layout={AppLayout}
                />
                <RouteWrapper
                    exact
                    path='/appointment/create'
                    component={AppointmentCreatePage}
                    layout={FullHeaderLayout}
                />

                <RouteWrapper
                    exact
                    path='/checkout'
                    component={CheckOutPage}
                    layout={FullHeaderLayout}
                />

                <RouteWrapper
                    exact
                    path='/calendar'
                    component={CalendarPage}
                    layout={AppLayout}
                />

                <Route component={Error404Page} />
            </Switch>
        </Router>
    );
}

export default App;
