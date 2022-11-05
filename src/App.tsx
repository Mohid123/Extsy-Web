import React, { useEffect } from 'react';
import './App.less'
// import '~antd/dist/antd.css';
import { BrowserRouter as Router,  Routes,Route, useLocation} from "react-router-dom";
import AuthLayout from './layout/Auth';
import { routes } from './routes';
import MainLayout from './layout/Main';
import KycLayout from './layout/Kyc';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './store/reducers/profileSlice';

function App() {
  const dispatch = useDispatch<any>();
  const getUserById = () => {
    dispatch(getLoggedInUser());
  }
  
  useEffect(() => {
    if(window.location.pathname !== '/auth/signin' && window.location.pathname !== '/auth/signup2' && window.location.pathname !== '/auth/signup') {
      getUserById()
    }
  })

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
                case 'kyc':
								return (
                  <Route
                    path={route.path}
                    element={
                      <KycLayout>
                        <route.component />
                      </KycLayout>
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
