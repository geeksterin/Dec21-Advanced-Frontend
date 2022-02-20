class BottomNav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //Inline
        const style = { position: "fixed", bottom: "0px", left: "0px", backgroundColor: "red", width: "100vw", display: "flex", justifyContent: "space-evenly"};

        return (
            <>
                <div style={style}>
                    <button onClick={() => this.props.switchTab("home")}>Home</button>
                    <button onClick={() => this.props.switchTab("search")}>Search</button>
                    <button onClick={() => this.props.switchTab("reels")}>Reels</button>
                    <button onClick={() => this.props.switchTab("activity")}>Activity</button>
                    <button onClick={() => this.props.switchTab("profile")}>Profile</button>
                </div>
            </>
        )
    }
}