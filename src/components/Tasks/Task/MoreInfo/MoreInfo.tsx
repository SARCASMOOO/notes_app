import React, {CSSProperties} from "react";

import styles from "../Task.module.css";

function MoreInfo({time, description, show}: { time: Date, description: string, show: boolean }) {
    const column: CSSProperties = {display: 'flex', flexDirection: 'column'};

    const date = time.toISOString().slice(0, -5);

    return show ? (
        <div id={styles.MoreInfo}>
            <form style={column}>
                <label style={column}>
                    Time: <input type="datetime-local" id="meeting-time" name="meeting-time" value={date}/>
                </label>

                <label style={column}>
                    Description:
                    <textarea placeholder='description'>
                        {description}
                    </textarea>
                </label>
            </form>
        </div>
    ) : null;
}

export default MoreInfo;