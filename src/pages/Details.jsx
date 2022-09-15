import React from "react";
import List from "../data/data.json";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { IoIosArrowBack as Back } from "react-icons/io";

function Details() {
  let navigate = useNavigate();
  const params = useParams();
  let number = params.id;
  return (
    <div className="h-screen flex flex-col items-center bg-indigo-600">
      <div className="flex flex-col justify-center items-center py-3 bg-white w-[25rem]">
        <img
          src={List[number - 1].image}
          alt={List[number - 1].username}
          className="object-cover h-16 w-16 rounded-full border-2 border-red-600 cursor-pointer hover:scale-125"
        />
        <div className="flex py-1">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-semibold">@{List[number - 1].username}</h1>
            <div className="flex space-x-7">
              <div className="flex flex-col items-center">
                <p className="font-semibold">{List[number - 1].follower}</p>
                <p>Follower</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold">{List[number - 1].following}</p>
                <p>Following</p>
              </div>
            </div>
            <Back
              className="cursor-pointer hover:scale-110"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
