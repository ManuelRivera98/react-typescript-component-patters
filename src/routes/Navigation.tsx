import { FC, Suspense } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Logo from '../logo.svg';
import { routes } from './routes';

export const Navigation: FC = () => {

  const addActiveStyle = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'nav-active' : ''
  };

  return (
    <Suspense
      fallback={<h1>Loading ...</h1>}
    >
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={Logo} alt="React Img" />
            <ul>
              {routes.map((route) => (
                <li key={route.id} >
                  <NavLink className={addActiveStyle} to={route.path}>{route.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, component: Component, id }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].path} replace />} />

          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}