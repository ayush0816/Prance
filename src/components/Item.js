import React from "react";

const Item = (props) => {
  return (
    <div>
      <div class="d-flex">
        <div class="p-2 flex">
          <button
            classname="btn btn-primary"
            onClick={() => props.setshow(!props.show)}
          >
            No name
          </button>
        </div>
        <div class="p-2">Flex item</div>
      </div>
    </div>
  );
};

export default Item;
