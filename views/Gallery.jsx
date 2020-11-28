const React = require('react');
const Layout= require('./Layout.jsx');

class Gallery extends React.Component {
       render() {
        return (
            <Layout>
                <div className="jumbotron ">
                   <h1>Gellary!</h1>
                    <div className="gallery">

                        <div className="item"
                             style={{backgroundImage: 'url(https://www.triconamericanhomes.com/files/orlando_city.jpg)' }}></div>

                        <div className="item"
                             style={{backgroundImage: 'url(https://i1.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/03/orlando-florida.jpg?fit=1024%2C684&ssl=1)' }}></div>

                        <div className="item"
                             style={{backgroundImage: 'url(https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/Florida/downtown-orlando-guide-lead.jpg?imwidth=1400)' }}></div>

                        <div className="item"
                             style={{backgroundImage: 'url(https://www.universalorlando.com/webdata/k2/en/us/files/Images/universal-orlando-raptor-coaster-m.jpg)' }}></div>

                        <div className="item"
                             style={{backgroundImage: 'url(https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/44/2019/11/14162742/Square_Tickets.jpg)' }}></div>
                    </div>
                </div>
            </Layout>
        )
    }
}
module.exports = Gallery;

