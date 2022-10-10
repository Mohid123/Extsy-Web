import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import MainLayout from './layout/Main';
import AuthLayout from './layout/Auth';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        {routes.map(route => {
						switch (route.layout) {
							case 'main':
								return (
									<Route exact path={route.path}>
										<MainLayout
										>
											<route.component />
										</MainLayout>
									</Route>
								);
							case 'auth':
								return (
									<Route exact path={route.path}>
										<AuthLayout>
											<route.component />
										</AuthLayout>
									</Route>
								);
						}
					})}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
