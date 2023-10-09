import React from "react";
import {HiBriefcase} from "react-icons/hi";
import { Link } from "react-router-dom";


function NavBar({productCount}) {
  return (
    <div className="flex justify-between p-2 bg-white ">
     
      <div>
        <img className="ml-8 h-28 " src="https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg" />
        </div>
    <div className="flex" >
      <Link  className="h-8 mr-10 text-white bg-indigo-700 border-2 border-black rounded-xl " to={"/product/SignUp"}>Sign up</Link>
      <Link  className="h-8 mr-10 text-white bg-indigo-700 border-2 border-black rounded-xl " to={"/product/Login"}>Login</Link>
      <div>
       <h1 className="mt-8 mr-10 text-4xl text-red-400">{<HiBriefcase />}</h1>
      <Link  className="px-2 bg-red-500 rounded-full " to={'/product'}>{productCount}</Link>
      </div>
      </div>

    </div>
  );
}
export default NavBar;