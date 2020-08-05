import React, {useState} from "react";

// Styles
import styles from '../components/Nav/Nav.module.css';

// Models
import NavModel from '../models/NavModel';

// Components
import NavItem from '../components/Nav/NavItem/NavItem';

const Nav = () => {
    const [selected, setSelected] = useState(NavModel.TODAY);

    const updateSelected = (id: NavModel) => setSelected(id);

    return (
        <nav>
            <ul className={styles.Nav}>
                <NavItem id={NavModel.TODAY}
                         title='TODAY'
                         selected={selected}
                         clicked={updateSelected}/>

                <NavItem id={NavModel.NEXT}
                         title='NEXT'
                         selected={selected}
                         clicked={updateSelected}/>

                <NavItem id={NavModel.DONE}
                         title='DONE'
                         selected={selected}
                         clicked={updateSelected}/>
            </ul>
        </nav>
    );
}

export default Nav;