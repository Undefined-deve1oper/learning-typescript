import React from 'react';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to="/users">Пользователи</NavLink>
                    <NavLink to='/todos'>Список дел</NavLink>
                </div>
                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>
                <Route path={'/todos'} exact>
                    <TodosPage/>
                </Route>
                <Route path={'/users/:id'}>
                    <UserItemPage/>
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;