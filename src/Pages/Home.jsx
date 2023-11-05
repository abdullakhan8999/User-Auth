import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const [homePageLoading, setHomePageLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setHomePageLoading(false);
    }, 1000);
  }, []);

  const handleLogin = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  const handleLogout = () => {
    loginWithRedirect();
  };

  return (
    <>
      {isLoading || homePageLoading ? (
        <Loader />
      ) : (
        <div className="max-w-screen-xl pt-28 mb-6 flex-col flex flex-wrap font-medium items-center text-lg md:text-xl justify-center mx-auto p-4">
          Welcome To User OAuth App
          {user && isAuthenticated ? (
            <>
              <img
                src={user.picture}
                alt="avatar/userPic"
                className="w-40 my-4 h-40 rounded-full"
              />
              <div className="capitalize text-left text-lg md:text-xl">
                <h1 className="">Name: {user.name}</h1>
                <h1 className="">Email: {user.email}</h1>
                <button
                  className={`px-8 py-2 rounded w-full my-4 md:border-0 text-white bg-blue-500  hover:bg-gray-700`}
                  onClick={handleLogin}
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <div className="capitalize text-left text-lg md:text-xl">
              <p className=""> Please login to view your profile </p>
              <button
                className={`px-8 py-2 rounded w-full my-4 md:border-0 text-white bg-blue-500  hover:bg-gray-700`}
                onClick={handleLogout}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
