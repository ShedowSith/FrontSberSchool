import React, { Component } from "react";

const style = {
    cell: {
        float: 'left',
        display: 'flex',
        width: 50,
        height: 50,
        fontSize: 35,
        border: '1px solid black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2
    }
};

const Cell = ({id, updateState, value}) => (
      <div style = {style.cell} onClick={() => updateState(id)}>
           {value}
      </div>
)



export default Cell;