import Header from './react-component/components/header.js';

export default class App extends React.Component {
    constructor(...args) {
        super(...args);
    }



    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
};
