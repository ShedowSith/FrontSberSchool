import React, { Component } from "react";
import Cell  from './Сell';
const style = {
    wrap: {
        margin: 'auto',
        display: 'table',
        border: '1px solid #666666',
        borderSpacing: 5
    },
    row: {
        display: 'table-row',
        width: 'auto',
        clear: 'both'
    },
    cell: {
        float: 'left',
        display: 'table-column',
        width: 50,
        height: 50,
        border: '1px solid black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2
    }
};
class Board extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cell: [null, null, null, null, null, null, null, null, null],
            currentPlayer: "X"
        };
    }
    checkWinner(){
        const temp = this.state.cell.slice();
        if(temp[0]===temp[1] && temp[0]===temp[3] && temp[0]!== null || temp[3]===temp[4] && temp[3]===temp[5] && temp[3]!== null||
            temp[6]===temp[7] && temp[6]===temp[8] && temp[6]!== null || temp[0]===temp[3] && temp[0]===temp[6] && temp[0]!== null||
            temp[1]===temp[4] && temp[1]===temp[7] && temp[1]!== null || temp[2]===temp[5] && temp[2]===temp[8] && temp[2]!== null||
            temp[0]===temp[4] && temp[0]===temp[8] && temp[0]!== null || temp[6]===temp[4] && temp[6]===temp[2] && temp[6]!== null){
            alert('Выграл игрок '+this.state.currentPlayer);
            return;
        }
    }
    updateState = (i) => {
        if(this.state.cell[i] !== null){
            alert('Ячейка занята. Выберите другую.');
            return;
        }
        const temp = this.state.cell.slice();
        if (this.state.currentPlayer == "X") {
            temp[i] = "X";
            this.setState({cell: temp});
            this.checkWinner();
            this.setState({currentPlayer: "0"})
        } else {
            temp[i] = "0";
            this.setState({cell: temp});
            this.checkWinner();
            this.setState({currentPlayer: "X"})
        }
    }
    info (){
       return <div>Текущий игрок: {this.state.currentPlayer}</div>
    }
    getCell(i){
        return <Cell style={style.cell} id = {i} value = {this.state.cell[i]} updateState={this.updateState}/>
    }

    startNew(){
        this.setState({cell: [null, null, null, null, null, null, null, null, null],  currentPlayer: "X"})
    }
    render() {
        return(
            <div style={style.wrap}>
                <div style={style.row}>
                    {this.getCell(0)}
                    {this.getCell(1)}
                    {this.getCell(2)}
                </div>
                <div style={style.row}>
                    {this.getCell(3)}
                    {this.getCell(4)}
                    {this.getCell(5)}
                </div>
                <div style={style.row}>
                    {this.getCell(6)}
                    {this.getCell(7)}
                    {this.getCell(8)}
                </div>
                {this.info()}

                <button onClick={() => this.startNew()}>Новая игра</button>
            </div>

        )
    }
}

// const Board = () =>(

// );

export default Board;