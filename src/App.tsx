// App.js
import { AppRoutes } from "./router";
import Sidebar from "./components/SideBar.tsx";

const App = () => {
  return (
    <>
      <div className={"container mx-auto"}>
        <header className="bg-gradient-to-r from-blue-500 to-blue-700 w-full h-16 flex items-center justify-between px-6 shadow-lg">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            Company Name
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-white opacity-80 hover:opacity-100 cursor-pointer">
              <span className="material-icons">notifications</span>
            </span>
            <span className="text-white opacity-80 hover:opacity-100 cursor-pointer">
              <span className="material-icons">account_circle</span>
            </span>
          </div>
        </header>
        <div className="flex">
          <Sidebar />
          <main className="py-6 px-8 flex-1 bg-gray-50 min-h-screen rounded-lg shadow-inner m-4">
            {<AppRoutes />}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
