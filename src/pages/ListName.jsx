import React from "react";
import DataUser from "../component/DataUser";
import List from "../data/data.json";

function ListName() {
  return (
    <div className="h-screen bg-indigo-600 flex flex-col items-center">
      {List.map((data) => {
        return (
          <DataUser
            id={data.id}
            username={data.username}
            follower={data.follower}
            following={data.following}
            image={data.image}
          />
        );
      })}
    </div>
  );
}

export default ListName;
