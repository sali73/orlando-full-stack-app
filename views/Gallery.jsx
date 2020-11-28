const React = require('react');
const Layout= require('./Layout.jsx');

class Gallery extends React.Component {
       render() {
        return (
            <Layout>
                <div className="jumbotron ">
                   <h1>Gellary!</h1>
                </div>
            </Layout>
        )
    }
}
module.exports = Gallery;

