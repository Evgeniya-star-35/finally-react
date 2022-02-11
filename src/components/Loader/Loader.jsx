import React from 'react';
import s from './Loader.module.css';

import { Levels } from 'react-activity';
import 'react-activity/dist/library.css';

const Loader = () => {
    return (
        <div className={s.containerLoader}>
            <Levels size="35" color="var(--accent-color)" speed={0.65} />
        </div>
    );
};

export default Loader;
