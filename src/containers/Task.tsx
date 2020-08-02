import React, {Component, Fragment} from "react";
import styles from "../components/Tasks/Task/Task.module.css";
import doneIcon from "../assets/images/checkmark.svg";
import Draggable from 'react-draggable';
// @ts-ignore
import Tappable from 'react-tappable';
import moreIcon from '../assets/images/more.svg';
import finishIcon from '../assets/images/finish.svg';

class Task extends Component<any, any> {
    constructor(props: { id: any; }) {
        super(props);
        this.state = {
            offsetX: (window.innerWidth * 0.80),
            blockOnClick: false,
            id: props.id,
            isSelected: false,
            description: this.props.description
        }
    }

    render() {
        const doneImage = (
            <img style={{paddingRight: '1em', paddingTop: '0.5em'}} onClick={() => {
                this.props.setStatus(this.state.id, 'started');
            }}
                 className={styles.checkmark}
                 src={doneIcon}
                 alt=""/>
        );

        const stylesApplied = [];
        const tapStyles = [];
        tapStyles.push(styles.TaskMoreInfo);

        let moreInfo;

        if (this.props.status === 'done') {
            stylesApplied.push(styles.Done);
            tapStyles.push(styles.Done);
        } else {
            stylesApplied.push(styles.NotDone);
            tapStyles.push(styles.NotDone);
        }

        moreInfo = (
            <div id={styles.MoreInfo}>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <label style={{display: 'flex', flexDirection: 'column'}}>
                        Time:
                        <input type="datetime-local" id="meeting-time"
                               name="meeting-time" value={this.props.time}/>

                    </label>
                    <label style={{display: 'flex', flexDirection: 'column'}}>
                        Description:
                        <textarea>
                            {this.state.description}
                        </textarea>
                    </label>
                </form>
            </div>
        );

        const updateSelected = (this.props.selected === this.state.id);

        const bounds = {
            left: 'parent'
        };

        const finishedBtn = (<Tappable className={tapStyles.join(' ')} onTap={() => {
            this.props.setStatus(this.state.id, 'done')
        }}>
            <img style={{width: '2.2em', paddingLeft: '1em', paddingTop: '0.3em'}} src={finishIcon} alt=""/>
        </Tappable>);

        const moveBtn = (<Tappable className={tapStyles.join(' ')} onTap={(event: any) => {
            this.props.clicked(this.props.id);
        }}>
            <img style={{width: '2.2em', paddingLeft: '1em', paddingTop: '0.3em'}} src={moreIcon} alt=""/>
        </Tappable>);

        return (
            <Fragment>
                <div style={{display: 'flex', width: '100%'}} className={styles.TotalTask}>
                    <div className={styles.TaskContainer}>
                        <Draggable {...this.state.draggableSettings}
                                   onStop={(event, data) => {
                                       console.log('Data x is: ' + data.lastX);
                                       console.log('window x is: ' + (window.innerWidth));
                                       if (data.lastX > (window.innerWidth / 2)) {
                                           this.props.removeTask(this.state.id);
                                           console.log('X is bigger then half the screen.');
                                       }
                                   }}
                                   bounds={{left: 0, right: this.state.offsetX}}
                                   axis='x'
                                   onStart={((event: any) => {
                                       if(this.props.selected === this.state.id) return false;
                                       this.setState({
                                           draggableSettings: {
                                               position: {x: 0, y: 0},
                                           },
                                           x: event.PageX,
                                           y: event.PageY,
                                       });
                                   })}
                        >
                            <div className={stylesApplied.join(' ')}>
                                <div className={styles.Task}>
                                    <div>
                                        <div>{this.props.title}</div>
                                        <div>{this.props.time}</div>
                                    </div>
                                </div>
                                {updateSelected ? moreInfo : null}
                            </div>
                        </Draggable>
                    </div>
                    <div style={{backgroundColor: '#E0FFE9', display: 'flex'}}>
                        {(this.props.status === 'done') ? doneImage : null}
                        {(this.props.status !== 'done') ? finishedBtn : null}
                        {moveBtn}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Task;


