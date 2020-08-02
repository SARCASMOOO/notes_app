import React, {Component, Fragment} from "react";
import styles from "../components/Tasks/Task/Task.module.css";
import doneIcon from "../assets/images/checkmark.svg";
import Draggable from 'react-draggable';
// @ts-ignore
import Tappable from 'react-tappable';
import moreIcon from '../assets/images/more.svg';

class Task extends Component<any, any> {
    constructor(props: { id: any; }) {
        super(props);
        this.state = {
            offsetX: (window.innerWidth*0.80),
            blockOnClick: false,
            id: props.id,
            isSelected: false,
            draggableSettings: {
                onDrag: ((event: any) => {
                    event.stopPropagation();
                    this.setState({
                        draggableSettings: {
                            position: {x: 0, y: 0},
                        },
                        x: event.PageX,
                        y: event.PageY,
                    });
                })
            }
        }
    }


    render() {
        const doneImage = (<img className={styles.checkmark} src={doneIcon} alt=""/>);
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
                <div>Description</div>
                <div>{this.props.description}</div>
            </div>
        );

        const updateSelected = (this.props.selected === this.state.id);

        const bounds = {
            left: 'parent'
        };

        console.log(window.innerWidth*0.80);

        return (
            <div style={{display: 'flex', width: '100%'}} className={styles.TotalTask}>
                <div className={styles.TaskContainer}>
                    <Draggable {...this.state.draggableSettings} bounds={{left: 0, right: this.state.offsetX}} axis='x'>
                        <div className={stylesApplied.join(' ')}>
                            <div className={styles.Task}>
                                <div>
                                    <div>{this.props.title}</div>
                                    <div>{this.props.time}</div>
                                </div>
                                {(this.props.status === 'done') ? doneImage : null}
                            </div>

                            {updateSelected ? moreInfo : null}
                        </div>
                    </Draggable>
                </div>

                <Tappable className={tapStyles.join(' ')} onTap={(event: any) => {
                    console.log('clicked');
                    this.props.clicked(this.props.id);
                }}>

                    <img style={{width: '2.2em', paddingLeft: '1em', paddingTop: '0.3em'}} src={moreIcon} alt=""/>
                </Tappable>
            </div>
        );
    }
}

export default Task;


