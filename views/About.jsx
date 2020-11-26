const React = require('react');
const Layout= require('./Layout.jsx');
class About extends React.Component {
    render() {
        return (
            <Layout>
                <div className="jumbotron-fluid about">
                    <h1 className='title' >Orlando</h1> <br/>
                    <p className="lead">is a city in the U.S. state of Florida and the county seat of Orange County. Located in Central Florida, it is the center of the Orlando metropolitan area, which had a population of 2,509,831, according to U.S. Census Bureau figures released in July 2017. These figures make it the 23rd-largest metropolitan area[6] in the United States, the sixth-largest metropolitan area in the Southern United States, and the third-largest metropolitan area in Florida. As of 2019, Orlando had an estimated city-proper population of 287,442, making it the 71st-largest city in the United States, the fourth-largest city in Florida, and the state's largest inland city.<br/><br/>
                    The City of Orlando is nicknamed "the City Beautiful," and its symbol is the Linton E. Allen Memorial Fountain[7], commonly referred to as simply the "Lake Eola fountain" at Lake Eola Park. The Orlando International Airport (MCO) is the thirteenth-busiest airport in the United States and the 29th-busiest in the world.<br/><br/>
                     Orlando is one of the most visited cities in the world primarily driven by tourism, major events, and convention traffic, in 2018 the city drew more than 75 million visitors. The two largest and most internationally renowned tourist attractions in the Orlando area include the Walt Disney World Resort, opened by the Walt Disney Company in 1971, and located approximately 21 miles (34 km) southwest of Downtown Orlando in Bay Lake; and the Universal Orlando Resort, opened in 1990 as a major expansion of Universal Studios Florida. With the exception of Walt Disney World, most major attractions are located along International Drive with one of these attractions being the Wheel at ICON Park Orlando. The city is also one of the busiest American cities for conferences and conventions; the Orange County Convention Center is the second-largest convention facility in the United States.<br/>
                </p><br/>
                <img className='about-img' src="/img/map.png" alt=""/>
                </div>
            </Layout>
        );
    }
}

module.exports = About;
;
