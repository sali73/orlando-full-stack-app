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
                        <h1> Name : {name} </h1><br/>
                        <h3> Located at  {location}</h3>
                        <h3>Rate : {rate}</h3>
                        <h3> Price : ${price}</h3>
                        <h3> Size : {size}</h3>
                        <h4 className='show-text'>The city of Orlando is located in one of the world's most visited tourist regions, which draws tens of millions of visitors every year. Among its principal tourist attractions are Walt Disney World, SeaWorld Orlando, and Universal Orlando. Within easy reach, too, is the Kennedy Space Center on Cape Canaveral. The establishment of these mega-amusement parks has encouraged other investors, and there are nearly limitless hotel and motel beds in the Orlando area, thousands of restaurants, dozens of golf courses, and numerous other attractions and things to do. Orlando has a subtropical climate, with hot and rainy weather from May to October and cooler temperatures from November to April and it's at risk for hurricanes due to its location.</h4>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;