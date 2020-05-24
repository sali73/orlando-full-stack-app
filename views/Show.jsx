const React = require('react');
const Layout= require('./Layout.jsx');

class Show extends React.Component {
    render() {
       
        const { name , location , img , rate , price , size} = this.props.tour;
        return (
            <Layout>
                <div className="jumbotron ">
                    {/* <a href="/tour">back</a> */}
                    <div class="col-md-4">< img src={img} class="card-img"/></div>
                    <div className='show'>
                        <h1>{name} located at  {location} </h1><br/>
                        <h2>Rate : {rate}</h2>
                        <h2> Price : ${price}</h2>
                        <h2> Size : {size}</h2>
                    </div>
                   

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