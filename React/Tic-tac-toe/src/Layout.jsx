import { NavLink, Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <div className="layout flex flex-col items-center">
      <nav>
        <ul className="flex items-center">
          <li className="mx-4">
            <NavLink
              to="/"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
            >
              基础版
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/time_travel"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
            >
              时间穿梭版
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
