import { NavLink } from 'react-router-dom';
import logo from '../assets/tvs-logo-new.jpeg';
import { navigationItems } from '../data/siteContent';

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-vertex-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:px-10 lg:flex-row lg:items-center lg:justify-between">
        <NavLink to="/" className="flex min-w-0 items-center gap-4 md:gap-6">
          <span className="flex h-20 items-center bg-white md:h-24">
            <img
              src={logo}
              alt="TVS Studio"
              className="h-16 w-auto object-contain md:h-20"
            />
          </span>
          <span className="min-w-0 space-y-1.5">
            <span className="block truncate text-xl font-semibold text-vertex-text md:text-2xl">
              TVS Studio
            </span>
            <span className="block truncate text-sm text-slate-500 md:text-base">
              GIS solutions and surveying services
            </span>
          </span>
        </NavLink>

        <div className="w-full lg:flex lg:w-auto lg:justify-end">
          <nav className="w-full overflow-x-auto lg:w-auto">
            <div className="flex min-w-max gap-6 border-b border-vertex-border/60 pb-2 lg:justify-end lg:border-b-0 lg:pb-0">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `whitespace-nowrap border-b-2 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'border-vertex-primary text-vertex-primary'
                        : 'border-transparent text-slate-600 hover:text-vertex-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
