class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: "home",
        }
    }

    changeTab = (newTab) => {
        this.setState({
            tab: newTab
        });
    }

    renderTab = () => {
        switch(this.state.tab) {
            case 'home':
                return <Home />
            case 'search':
                return <Search />
            case 'reels':
                return <Reels />
            case 'activity':
                return <Activity />
            case 'profile':
                return <Profile />
            default:
                return <Home />
        }
    }

    render() {
        return (
            <>
                {/* {this.state.tab == "home"?
                    <Home />
                :
                    this.state.tab == "search"?
                        <Search />
                    :
                        this.state.tab == "reels"?
                            <Reels />
                        :
                            this.state.tab == "activity"?
                                <Activity />
                            :
                                <Profile />
                } */}
                {this.renderTab()}
                
                <BottomNav switchTab={this.changeTab} />
            </>
        );

    }
}