import React from "react";
import { Link } from "react-router-dom";

function DataUser({ id, username, follower, following, image }) {
  let params = id;
  let url = "/account/";

  let routing = url + params;
  return (
    <div>
      <div className="flex justify-center items-center py-3 bg-white w-[25rem]">
        <Link to={routing}>
          <div className="flex flex-col justify-center w-[20rem] rounded-md bg-indigo-900 text-white py-4 px-7 hover:bg-indigo-700">
            <div className="flex items-center space-x-7">
              <img
                src={image}
                className="object-cover h-12 w-12 rounded-full border-2"
                alt={username}
              />
              <div>
                <h1 className="font-semibold">@{username}</h1>
                <div className="flex space-x-1">
                  <p>Follower :</p>
                  <p>{follower}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DataUser;
