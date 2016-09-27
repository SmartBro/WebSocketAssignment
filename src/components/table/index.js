import style from './table.scss';
import config from 'src/config/app.config';

import { Participants } from './participants';

function Table ({ name, participants }) {
    return <div className={style.table}>
                <div className={style['table-name']}>{name}</div>
                <Participants participants={participants} maxParticipants={config.maxParticipants} />
        </div>;
}

export default Table;
