import React, {CSSProperties} from "react";

import styles from "../components/Tasks/Task/Task.module.css";

function MoreInfo({time, description}: { time: string, description: string }) {
    const column: CSSProperties = {display: 'flex', flexDirection: 'column'};

    return (
        <div id={styles.MoreInfo}>
            <form style={column}>
                <label style={column}>
                    Time: <input type="datetime-local" id="meeting-time" name="meeting-time" value={time}/>
                </label>

                <label style={column}>
                    Description:
                    <textarea placeholder='description'>
                        {description}
                    </textarea>
                </label>
            </form>
        </div>
    );
}

export default MoreInfo;