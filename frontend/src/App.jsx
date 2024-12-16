import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SpotList from './components/SpotList/SpotList';
import SpotDetail from './components/SpotDetail/SpotDetail';
import CreateSpot from './components/CreateSpot/CreateSpot';
import UpdateSpot from './components/CreateSpot/UpdateSpot';
import ManageSpots from './components/ManageSpots/ManageSpots';
import * as sessionActions from './store/session';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
      .catch(() => setIsLoaded(true)); // Handle errors gracefully
  }, [dispatch]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Replace with a loading spinner or component
  }

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}
function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.session.user);

  if (!user) {
    return <Navigate to="/" replace />; // Redirect to homepage if not logged in
  }

  return children;
}
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <SpotList />, 
      },
      {
        path: "/spots/:spotId",
        element: <SpotDetail />,
      },
      {
        path: "/spots/new",
        element: (
          <ProtectedRoute>
            <CreateSpot />
          </ProtectedRoute>
        ),
      },
      {
        path: "/manage-spots",
        element: (
          <ProtectedRoute>
            <ManageSpots />
          </ProtectedRoute>
        ),
      },
      {
        path: "/spots/:spotId/edit",
        element: (
          <ProtectedRoute>
            <UpdateSpot />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <div>Page Not Found</div>, // Fallback for undefined routes
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;