import style from './participants.scss';
import { Participant } from './participant';

export function Participants ({ participants, maxParticipants }) {
    return <div className={style.participants}>
        {_.range(maxParticipants).map((item, index) => <Participant isActive={index < participants} key={index}/>)}
    </div>;
}
