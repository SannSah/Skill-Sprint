import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AdminLogin from "./sections/AdminLogin";
import Dashboard from './components/admin/dashboard/Dashboard.jsx';
import StudentDashboard from './components/student/StudentDashboard.jsx';
import StudentInfo from './components/student/StudentInfo.jsx';
import StudentLogin from './sections/StudentLogin.jsx';
import CompleteStudentInfo from './components/admin/student/complete/CompleteStudentInfo.jsx';
import Student from './components/admin/student/mini/Student.jsx';
import Ranking from './components/admin/dashboard/Ranking.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/adminLogin", element: <AdminLogin /> },
      { path: "/studentLogin", element: <StudentLogin /> },
      {
        path: "/admin", element: <Dashboard />, children: [
          { path: "/admin/Ranking/", element: <Ranking /> },
          { path: "/admin/student/", element: <Student /> },
        ]
      },
      
      { path: "/admin/studentInfo", element: <CompleteStudentInfo /> }


    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  </React.StrictMode>,
)
