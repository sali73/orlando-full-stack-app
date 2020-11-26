const React = require('react');
const Layout= require('./Layout.jsx');

class Show extends React.Component {
    render() {
        const { name , location , img , rate , price , size} = this.props.tour;
        return (
            <Layout>
                <div className="jumbotron ">
                    <div className="col-md-12">< img src={img} class="card-img"/></div><br/>
                    <div className='show'>
                        <h1 className='title-two'> Name : {name} </h1><br/>
                        <h3> Located at  {location}</h3>
                        <h3>Rate : {rate}</h3>
                        <h3> Price : ${price}</h3>
                        <h3> Size : {size}</h3>
                        </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;