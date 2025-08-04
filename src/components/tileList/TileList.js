import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = React.memo(({list}) => {
  return (
    <div>
      {list.map((listItem, index) => {
        const {name, ...other} = listItem
        return < Tile id={index} key={index} name={listItem.name} description={other} />;
      })}
    </div>
  );
});
