import React, { Component } from 'react';
import "./severanceTheme.css";
import $ from 'jquery';
import { MdiChessPawn, RunRounded, Vegeta, MdiSpray, ThoughtBubble, MaterialSymbolsAddTask, MaterialSymbolsCode, FluentPizza, RainShowers } from "../../components/Symbols";


export default class ToDoDragDropDemo extends Component {

    state = {
        tasks: [
            { icon: <MdiSpray />, projectName: "Spray Can", type: "restingPosition", projectURL: "https://enigmatic-cliffs-72783.herokuapp.com/" },
            { icon: <Vegeta />, projectName: "Vegeta", type: "restingPosition", projectURL: "https://code-vegeta.herokuapp.com/" },
            { icon: <MdiChessPawn />, projectName: "Chess Master", type: "restingPosition", projectURL: "https://jowstafford.github.io/ChessMaster/" },
            { icon: <RunRounded />, projectName: "Run Buddy", type: "restingPosition", projectURL: "https://jonathanprill.github.io/run-buddy/" },
            { icon: <ThoughtBubble />, projectName: "Deep Thoughts", type: "restingPosition", projectURL: "https://mysterious-ocean-45457.herokuapp.com/" },
            { icon: <MaterialSymbolsAddTask />, projectName: "Task Master", type: "restingPosition", projectURL: "https://jonathanprill.github.io/taskmaster-pro/" },
            { icon: <MaterialSymbolsCode />, projectName: "Hacker Forum", type: "restingPosition", projectURL: "https://nameless-sands-05757.herokuapp.com/" },
            { icon: <RainShowers />, projectName: "Weather", type: "restingPosition", projectURL: "https://jonathanprill.github.io/weather-dashboard/" },
            { icon: <FluentPizza />, projectName: "Food Festival", type: "restingPosition", projectURL: "https://jonathanprill.github.io/food-festival/" },
        ]
    }

    onDragStart = (event, projectName) => {
        $(".sev-left-door").addClass("sev-left-door-active")
        $(".sev-right-door").addClass("sev-right-door-active")
        $(".sev-bottom-trash").addClass("sev-bottom-trash-drag")
        console.log('dragstart on div: ', projectName);
        event.dataTransfer.setData("projectName", projectName);
    }
    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        let projectName = event.dataTransfer.getData("projectName");
        $(".sev-bottom-trash").removeClass("sev-bottom-trash-drag")
        $(".sev-left-door").removeClass("sev-left-door-active")
        $(".sev-right-door").removeClass("sev-right-door-active")
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
        $(".sev-bottom-trash").removeClass("sev-bottom-trash-drag")
        $(".sev-left-door").removeClass("sev-left-door-active")
        $(".sev-right-door").removeClass("sev-right-door-active")
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
            Trash: []
        }

        this.state.tasks.forEach((task) => {
            tasks[task.type].push(
                <div key={task.icon}
                    onDragStart={(event) => this.onDragStart(event, task.projectURL)}
                    draggable
                    className="draggable">
                    <span className='sev-project-header'>{task.projectName}</span>
                    {task.icon}
                </div>
            );
        });

        return (
            <div className="drag-container">
                <div id="toggle-me-contact-line" class="sev-project-title-line">
                    <div id="toggle-me-contact-text" class="sev-title-text">
                        <span>Projects</span>
                    </div>
                </div>
                <div className="resting-position"
                    onDragOver={(event) => this.onDragOver(event)}
                    onDrop={(event) => { this.onDrop(event, "restingPosition") }}>
                    {tasks.restingPosition}
                </div>
                <div className="drop-zone"
                    onDragOver={(event) => this.onDragOver(event)}
                    onDrop={(event) => this.onTrashDrop(event, "Trash")}>

                    <div className='trash-section'>
                        <div class="sev-bottom-trash">
                            <div className="sev-left-door"></div>1
                            <div className="sev-right-door"></div>
                        </div>
                        <div className="sev-bottom-trash">
                            <div className="sev-left-door"></div>2
                            <div className="sev-right-door"></div>
                        </div>
                        <div class="sev-bottom-trash">
                            <div className="sev-left-door"></div>3
                            <div className="sev-right-door"></div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}