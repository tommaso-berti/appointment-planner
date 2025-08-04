import React from "react";

export const Tile = ({id, name, description}) => {
  return (
    <div className="tile-container" id={id}>
      <p className={"tile-title"}>{name}</p>
        {Object.entries(description)
            .filter(([key]) => key !== "name")
            .map(([key, value]) => (
                <p className="tile" key={key}>
                    {key}: {value}
                </p>
            ))}
    </div>
  );
};
