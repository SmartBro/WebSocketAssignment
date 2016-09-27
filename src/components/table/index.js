import style from './table.scss';
import config from 'src/config/app.config';

import { Participants } from './participants';

class Table extends React.Component {
    componentWillMount () {
        this.setState({
            name: this.props.tableName || 'Table Name',
            participants: 4,
            maxParticipants: config.maxParticipants
        });
    }

    render () {
        return <div className={style.table}>
                    <div className={style['table-name']}>{this.state.name}</div>
                    <Participants participants={this.state.participants} maxParticipants={this.state.maxParticipants} />
            </div>;
    }
}

export default Table;
