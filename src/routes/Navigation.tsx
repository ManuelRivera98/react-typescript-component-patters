import { FC } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import { FormikAbstraction, FormikBasic, FormikComponents, FormikYup, Register } from '../03-forms/pages';
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
              <NavLink className={addActiveStyle} to="/register">Register Page</NavLink>
            </li>
            <li>
              <NavLink className={addActiveStyle} to="/formikBasic">Formik Basic</NavLink>
            </li>
            <li>
              <NavLink className={addActiveStyle} to="/formikYup">Formik Yup</NavLink>
            </li>

            <li>
              <NavLink className={addActiveStyle} to="/formikComponents">Formik Components</NavLink>
            </li>

            <li>
              <NavLink className={addActiveStyle} to="/formikAbstraction">Formik Abstraction</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/formikBasic" element={<FormikBasic />} />
          <Route path="/formikYup" element={<FormikYup />} />
          <Route path="/formikComponents" element={<FormikComponents />} />
          <Route path="/formikAbstraction" element={<FormikAbstraction />} />


          <Route path="/*" element={<Navigate to="/register" replace />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}