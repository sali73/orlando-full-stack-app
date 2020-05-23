const React = require('react');
const Layout= require('./Layout.jsx');

class Show extends React.Component {
    render() {
       
        const { name , location , img , rate , price , size} = this.props.tour;
        return (
            <Layout>
                <div>
                    {/* <a href="/tour">back</a> */}
                    <h1>tour Show Page</h1>
                    <p>The {name} is {location} </p>
                    
                    <img src={img} />
                    <p>{rate}</p>
                    <p>{price}</p>
                    <p>{size}</p>

                      {/* delete button */}
                      {/* <form action={`/tour/${tour._id}?_method=DELETE`} method="post">
                            <input type="submit" value="Delete" />
                      </form> */}

                       {/* <form action={`/tour/edit/${tour._id}`} >
                             <input type="submit" value="Edit" />
                      </form> */}

                </div>
            </Layout>
        )
    }
}

module.exports = Show;