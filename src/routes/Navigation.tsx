import { FC } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
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
              <NavLink className={addActiveStyle} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={addActiveStyle} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={addActiveStyle} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/users" element={<h1>Users Page</h1>} />

          <Route path="/*" element={<Navigate to="/" replace />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}