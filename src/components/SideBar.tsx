import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="p-4 max-w-[250px] w-full bg-white shadow-lg rounded-lg h-screen">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors
                                ${
                                  isActive
                                    ? "bg-blue-50 text-blue-600 font-medium"
                                    : ""
                                }`
              }
            >
              <span className="material-icons mr-3">Dashboard</span>
            </NavLink>
          </li>
          <li className="space-y-2">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors
                                ${
                                  isActive
                                    ? "bg-blue-50 text-blue-600 font-medium"
                                    : ""
                                }`
              }
            >
              <span className="material-icons mr-3">Products</span>
            </NavLink>
            <ul className="ml-6 space-y-2">
              <li>
                <NavLink
                  to="/products/laptop"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors
                                        ${
                                          isActive
                                            ? "bg-blue-50 text-blue-600 font-medium"
                                            : ""
                                        }`
                  }
                >
                  <span className="material-icons mr-3">Laptop</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products/desktop"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors
                                        ${
                                          isActive
                                            ? "bg-blue-50 text-blue-600 font-medium"
                                            : ""
                                        }`
                  }
                >
                  <span className="material-icons mr-3">Desktop</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
