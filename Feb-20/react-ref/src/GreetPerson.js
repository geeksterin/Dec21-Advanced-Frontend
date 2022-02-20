class GreetPerson extends React.Component {
    render() {
        return (
            <>
                <span>Welcome {this.props.name}</span>
                <span>👋🏻</span>
                <br />
            </>
        )
    }
}