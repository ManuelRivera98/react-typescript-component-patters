import { FC } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import { LazyPage01, LazyPage02, LazyPage03 } from '../01-lazyLoad/pages';
import Logo from '../logo.svg';

export const Navigation: FC = () => {

  const addActiveStyle = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'nav-active' : ''
  };

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React Img" />
          <ul>
            <li>
              <NavLink className={addActiveStyle} to="/lazy1">Lazy 01</NavLink>
            </li>
            <li>
              <NavLink className={addActiveStyle} to="/lazy2">Lazy 02</NavLink>
            </li>
            <li>
              <NavLink className={addActiveStyle} to="/lazy3">Lazy 03</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/lazy1" element={<LazyPage01 />} />
          <Route path="/lazy2" element={<LazyPage02 />} />
          <Route path="/lazy3" element={<LazyPage03 />} />

          <Route path="/*" element={<Navigate to="/lazy1" replace />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}