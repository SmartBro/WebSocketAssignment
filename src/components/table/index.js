import config from 'src/config/app.config';

class Table extends React.Component {
    componentWillMount () {
        this.setState({
            name: this.props.tableName || 'Table Name',
            participants: 4,
            maxParticipants: config.maxParticipants
        });
    }

    render () {
        return <div className="table">
                {`Name: ${this.state.name}`}
                {`Participants: ${this.state.participants}`}
                {`Max Participants: ${this.state.maxParticipants}`}
            </div>;
    }
}

export default Table;
