import React from 'react';
import './App.less'
// import '~antd/dist/antd.css';
import { BrowserRouter as Router,  Routes,Route} from "react-router-dom";
import AuthLayout from './layout/Auth';
import { routes } from './routes';
import MainLayout from './layout/Main';


function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
        {routes.map(route => {
						switch (route.layout) {
							case 'main':
								return (
									<Route path={route.path}
								element={	<MainLayout
										>
											<route.component />
										</MainLayout>
								}
										/>
									
								);
							case 'auth':
								return (
                  <Route
                    path={route.path}
                    element={
                      <AuthLayout>
                        <route.component />
                      </AuthLayout>
                    }
                  />
                );
						}
					})}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
