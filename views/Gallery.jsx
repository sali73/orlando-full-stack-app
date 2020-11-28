const React = require('react');
const Layout= require('./Layout.jsx');

class Gallery extends React.Component {
       render() {
        return (
            <Layout>
                <div className="jumbotron ">
                   <h1>Gellary!</h1>
                    <div className="grid">

                        <div className="item"
                             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1439209306665-700c9bca794c?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)' }}></div>

                        <div className="item"
                             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=compress,format&fit=crop&w=1199&h=871&q=80&cs=tinysrgb&crop=)' }}></div>

                        <div className="item"
                             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1488572384981-eac03dfeb6b9?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=)' }}></div>

                        <div className="item"
                             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1470091688026-38b51162c8df?dpr=1&auto=compress,format&fit=crop&w=1199&h=750&q=80&cs=tinysrgb&crop=)' }}></div>

                        <div className="item"
                             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1475139450941-3b6464b2dde3?dpr=1&auto=compress,format&fit=crop&w=1199&h=673&q=80&cs=tinysrgb&crop=)' }}></div>
                    </div>
                </div>
            </Layout>
        )
    }
}
module.exports = Gallery;

