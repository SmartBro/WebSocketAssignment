import style from './participants.scss';

export function Participant ({ isActive }) {
    const className = `${style.participant} glyphicon glyphicon-user ${isActive ? style.active : ''}`;
    return <i className={className} ></i>;
}
