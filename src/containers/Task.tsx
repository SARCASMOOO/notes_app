import React, {Component} from "react";

// Reusable
import Button, {ButtonType} from './Button';
import TaskBulk from "./TaskBulk";

// Style
import styles from "../components/Tasks/Task/Task.module.css";


export interface TaskModel {
    id: string; // TODO: Make type number
    status: string;
    title: string;
    description: string;
    time: string; // TODO: Make it type date
}


interface Props {
    task: TaskModel;
    selected: boolean;

    setStatus: (id: string, status: string) => void;
    removeAction: (task: TaskModel) => void;
}

interface State {
    blockOnClick: boolean;
    showMoreInfo: boolean;
}

class Task extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            blockOnClick: false,
            showMoreInfo: false
        }
    }

    private showMore = ()=> {
        this.setState(prevState => {
            return {
                showMoreInfo: !prevState.showMoreInfo
            }
        });
    };

    private markAsStarted = () => {
        this.props.setStatus(this.props.task.id, 'started');
    };

    private markAsDone = () => {
        this.props.setStatus(this.props.task.id, 'done');
    };

    render() {
        const {task, removeAction} = this.props;
        const {status, time, title, description} = task;

        return (
                <div style={{display: 'flex', width: '100%'}} className={styles.TotalTask}>
                    <div className={styles.TaskContainer}>
                        <TaskBulk title={title} time={time} description={description} showMoreInfo={this.state.showMoreInfo} status={status} removeAction={() => removeAction(task)}/>
                    </div>
                    <div style={{backgroundColor: '#E0FFE9', display: 'flex'}}>
                        {(status === 'done') ? <Button type={ButtonType.MARK_STARTED} onClick={this.markAsStarted} /> : null}
                        {(status !== 'done') ? <Button type={ButtonType.MARK_DONE} onClick={this.markAsDone}/> : null}
                        <Button type={ButtonType.MORE_INFO} onClick={ this.showMore } />
                    </div>
                </div>
        );
    }
}

export default Task;


