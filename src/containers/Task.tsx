import React, {Component, Fragment, useState} from "react";
import styles from "../components/Tasks/Task/Task.module.css";
import doneIcon from "../assets/images/checkmark.svg";
import Draggable, {DraggableEventHandler} from 'react-draggable';
// @ts-ignore
import Tappable from 'react-tappable';
import moreIcon from '../assets/images/more.svg';
import finishIcon from '../assets/images/finish.svg';

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
    x?: number;
    y?: number;
}


//
// const finishedBtn = (<Tappable className={tapStyles.join(' ')} onTap={() => {
//     this.props.setStatus(this.state.id, 'done')
// }}>
//     <img style={{width: '2.2em', paddingLeft: '1em', paddingTop: '0.3em'}} src={finishIcon} alt=""/>
// </Tappable>);
//
//
// const moveBtn = (<Tappable className={tapStyles.join(' ')} onTap={(event: any) => {
//     this.props.clicked(id);
// }}>
//     <img style={{width: '2.2em', paddingLeft: '1em', paddingTop: '0.3em'}} src={moreIcon} alt=""/>
// </Tappable>);

function Button({onClick, icon, className}: { onClick?: () => void, icon?: string, className?: string }) {
    return (
        <Tappable className={`${styles.TaskMoreInfo} ${className}`} onTap={onClick}>
            <img style={{width: '2.2em', paddingLeft: '1em', paddingTop: '0.3em'}} src={icon} alt=""/>
        </Tappable>
    );
}

//
// moreInfo = (
// moreInfo = (
//     <div id={styles.MoreInfo}>
//         <form style={{display: 'flex', flexDirection: 'column'}}>
//             <label style={{display: 'flex', flexDirection: 'column'}}>
//                 Time:
//                 <input type="datetime-local" id="meeting-time"
//                        name="meeting-time" value={time}/>
//
//             </label>
//             <label style={{display: 'flex', flexDirection: 'column'}}>
//                 Description:
//                 <textarea>
//                             {this.state.description}
//                         </textarea>
//             </label>
//         </form>
//     </div>
// );
// );

function MoreInfo({time, description}: { time: string, description: string }) {
    return (
        <div id={styles.MoreInfo}>
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <label style={{display: 'flex', flexDirection: 'column'}}>
                    Time:
                    <input type="datetime-local" id="meeting-time"
                           name="meeting-time" value={time}/>

                </label>
                <label style={{display: 'flex', flexDirection: 'column'}}>
                    Description:
                    <textarea>
                            {description}
                        </textarea>
                </label>
            </form>
        </div>
    );
}


interface TaskBulkProps {
    title: string;
    time: string;
    description: string;
    showMoreInfo: boolean;
    status: string;

    removeAction: () => void;
}

function TaskBulk({title, time, description, showMoreInfo, status, removeAction}: TaskBulkProps) {
    const initialState = {
        draggableSettings:
            {
                position: {x: 0, y: 0}
            }
    };
    const [draggableSettings, setDraggableSettings] = useState(initialState);

    const bounds = {
        left: 'parent'
    };

    const onStart: DraggableEventHandler = (event, data) => {
        setDraggableSettings(initialState);
    };

    const onStop: DraggableEventHandler = (event, data) => {
        console.log('Data x is: ' + data.lastX);
        console.log('window x is: ' + (window.innerWidth));

        if (data.lastX > (window.innerWidth / 2)) {
            removeAction();
            console.log('X is bigger then half the screen.');
        }
    };


    return (
        <Draggable {...draggableSettings} onStop={onStop} bounds={{left: 0, right: (window.innerWidth * 0.80)}} axis='x'
                   onStart={onStart}>

            <div className={status === 'done' ? styles.Done : styles.NotDone}>
                <div className={styles.Task}>
                    <div>
                        <div>{title}</div>
                        <div>{time}</div>
                    </div>
                </div>
                {showMoreInfo ? <MoreInfo time={time} description={description}/> : null}
            </div>

        </Draggable>
    );
}


class Task extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            blockOnClick: false,
            showMoreInfo: false
        }
    }

    private doneImage = () => (
        <img style={{paddingRight: '1em', paddingTop: '0.5em'}} onClick={() => {
            this.props.setStatus(this.props.task.id, 'started');
        }}
             className={styles.checkmark}
             src={doneIcon}
             alt=""/>
    );


    private showMore = ()=> {
        this.setState(prevState => {
            return {
                showMoreInfo: !prevState.showMoreInfo
            }
        });
    };

    render() {
        const {task, removeAction, setStatus} = this.props;
        const {status, id, time, title, description} = task;

        const tapStyle = status === 'done' ? styles.Done : styles.NotDone;

        return (
            <Fragment>
                <div style={{display: 'flex', width: '100%'}} className={styles.TotalTask}>
                    <div className={styles.TaskContainer}>
                        <TaskBulk title={title} time={time} description={description} showMoreInfo={this.state.showMoreInfo} status={status} removeAction={() => removeAction(task)}/>
                    </div>
                    <div style={{backgroundColor: '#E0FFE9', display: 'flex'}}>
                        {(status === 'done') ? this.doneImage() : null}
                        {(status !== 'done') ? <Button onClick={() => setStatus(id, 'done')} icon={finishIcon} className={tapStyle}/> : null}
                        <Button className={tapStyle} icon={moreIcon} onClick={ this.showMore } />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Task;


