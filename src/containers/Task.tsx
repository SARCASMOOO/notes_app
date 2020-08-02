import React, {Component, Fragment} from "react";
import styles from "../components/Tasks/Task/Task.module.css";
import doneIcon from "../assets/images/checkmark.svg";
import Draggable from 'react-draggable';
// @ts-ignore
import Tappable from 'react-tappable';

class Task extends Component<any, any> {
    constructor(props: { id: any; }) {
        super(props);
        this.state = {
            blockOnClick: false,
            id: props.id,
            isSelected: false,
            draggableSettings: {
                onStop: ((event: any) => {
                    const xCord = this.state.x;
                    const yCord = this.state.y;
                    this.setState({
                        draggableSettings: {
                            position: {x: xCord, y: yCord},
                        },
                    });
                }),
                onDrag: ((event: any) => {
                    console.log('On start' + Date.now())
                    this.setState({
                        draggableSettings: {position: {x: 0, y: 0}},
                        x: event.PageX,
                        y: event.PageY,
                    });
                })
            }
        }
    }


    render() {
        const doneImage = (<img className={styles.checkmark} src={doneIcon} alt=""/>);
        const stylesApplied = [styles.TotalTask];
        let moreInfo;

        if (this.props.status === 'done') {
            stylesApplied.push(styles.Done);
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

        return (
            <Fragment>
                <Tappable onTap={() => {
                    console.log('here');
                    this.props.clicked(this.props.id);
                }}>
                <Draggable {...this.state.draggableSettings} bounds={{left: 0}} axis='x'>
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
                    </Tappable>
                {/*<div>*/}
                {/*    This is a test.*/}
                {/*</div>*/}
            </Fragment>
        );
    }
}

export default Task;


