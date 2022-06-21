import React, { Component } from 'react';
import "./severanceTheme.css";

export default class ToDoDragDropDemo extends Component {

    state = {
        tasks: [
            { id: "1", projectName: "Spray Can", type: "restingPosition", projectURL: "red" },
            { id: "2", projectName: "Chess Master", type: "restingPosition", projectURL: "green" },
            { id: "3", projectName: "Run Buddy", type: "restingPosition", projectURL: "https://jonathanprill.github.io/run-buddy/" },
            { id: "4", projectName: "Weather", type: "Done", projectURL: "green" }
        ]
    }

    onDragStart = (event, projectName) => {
        // console.log('dragstart on div: ', projectName);
        event.dataTransfer.setData("projectName", projectName);
    }
    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        let projectName = event.dataTransfer.getData("projectName");
        // console.log(projectName)
        let tasks = this.state.tasks.filter((task) => {
            if (task.projectName === projectName) {
                task.type = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }
    onTrashDrop = (event, cat) => {
        let projectName = event.dataTransfer.getData("projectName");
        window.open(projectName)
        let tasks = this.state.tasks.filter((task) => {
            if (task.projectName === projectName) {
                task.type = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }
    render() {
        var tasks = {
            restingPosition: [],
            Done: []
        }

        this.state.tasks.forEach((task) => {
            tasks[task.type].push(
                <div key={task.id}
                    onDragStart={(event) => this.onDragStart(event, task.projectURL)}
                    draggable
                    className="draggable">
                    {task.projectName}
                </div>
            );
        });

        return (
            <div className="drag-container">

                <div className="restingPosition"
                    onDragOver={(event) => this.onDragOver(event)}
                    onDrop={(event) => { this.onDrop(event, "restingPosition") }}>
                    <span className="group-header">In Progress</span>
                    {tasks.restingPosition}
                </div>
                <div className="droppable"
                    onDragOver={(event) => this.onDragOver(event)}
                    onDrop={(event) => this.onTrashDrop(event, "Done")}>
                    <span className="group-header">Done</span>
                    {tasks.Done}
                </div>

            </div>
        );
    }
}