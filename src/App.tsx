import React from 'react';
import './App.less'
// import '~antd/dist/antd.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import AuthLayout from './layout/Auth';
import { routes } from './routes';
import MainLayout from './layout/Main';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
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
									<Route  path={route.path}>
										<AuthLayout>
											<route.component />
										</AuthLayout>
									</Route>
								);
						}
					})}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
