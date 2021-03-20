import React, { Component } from "react";
import Cell  from './Сell';

class Board extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cell: [null, null, null, null, null, null, null, null, null],
            currentPlayer: "X",
            play: true
        };
    }
    checkWinner(){
        const temp = this.state.cell.slice();
        if(temp[0]===temp[1] && temp[0]===temp[2] && temp[0]!== null ||
            temp[3]===temp[4] && temp[3]===temp[5] && temp[3]!== null ||
            temp[6]===temp[7] && temp[6]===temp[8] && temp[6]!== null ||
            temp[0]===temp[3] && temp[0]===temp[6] && temp[0]!== null ||
            temp[1]===temp[4] && temp[1]===temp[7] && temp[1]!== null ||
            temp[2]===temp[5] && temp[2]===temp[8] && temp[2]!== null ||
            temp[0]===temp[4] && temp[0]===temp[8] && temp[0]!== null ||
            temp[6]===temp[4] && temp[6]===temp[2] && temp[6]!== null){
            this.setState({play: false})
            alert('Выграл игрок '+this.state.currentPlayer);
        }
        if(this.state.cell.indexOf(null) === -1) {
            this.setState({play: false})
            alert('Ничья. Игра закончена. Начните новую.');
        }
    }
    updateState = (i) => {
        if(this.state.play === false){
            alert('Игра закончена. Начните новую.');
            return;
        }
        if(this.state.cell[i] !== null){
            alert('Ячейка занята. Выберите другую.');
            return;
        }
        if (this.state.currentPlayer === "X") {
            this.state.cell[i] = "X";
            this.checkWinner();
            this.setState({currentPlayer: "0"})
        } else {
            this.state.cell[i] = "0";
            this.checkWinner();
            this.setState({currentPlayer: "X"})
        }
    }
    info (){
       return <div>Сейчас ходит игрок: {this.state.currentPlayer}</div>
    }
    getCell(i){
        return <Cell id = {i} value = {this.state.cell[i]} updateState={this.updateState}/>
    }

    startNew(){
        this.setState({cell: [null, null, null, null, null, null, null, null, null],  currentPlayer: "X", play: true})
    }
    render() {
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>{this.getCell(0)}</td>
                        <td>{this.getCell(1)}</td>
                        <td>{this.getCell(2)}</td>
                    </tr>
                    <tr>
                        <td>{this.getCell(3)}</td>
                        <td>{this.getCell(4)}</td>
                        <td>{this.getCell(5)}</td>
                    </tr>
                    <tr>
                        <td>{this.getCell(6)}</td>
                        <td>{this.getCell(7)}</td>
                        <td>{this.getCell(8)}</td>
                    </tr>
                    </tbody>
                </table>
                {this.info()}
                <button onClick={() => this.startNew()}>Новая игра</button>
            </div>
        )
    }
}

// const Board = () =>(

// );

export default Board;