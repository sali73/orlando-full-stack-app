const React = require('react');
const Layout= require('./Layout.jsx');

class Index extends React.Component {
  render() {
    return (
        <Layout  isLogIn ={!!this.props.username}>
            <>
                {this.props.tour.map((tour, i) => {
                    return (
                        <div key={i}>

                            <div className='index'>
                                <div className='card'>
                                    <img src={tour.img}  className="card-img-top" alt=""/>
                                    <div className="card-body">
                                    <a href={`/tour/${tour._id}`}><h4>{tour.name}</h4></a><br/>
                                </div>
                                
                                 <div className="button">
                                    {/* delete button*/}
                                    <form
                                    action={`/tour/${tour._id}?_method=DELETE`} method="post">
                                    <input type="submit" value="Delete" className="btn btn-lg btn-secondary"  />
                                    </form> 

                                    {/* edit button */}
                                    <form action={`/tour/edit/${tour._id}`} >
                                    <input type="submit" value="Edit" className="btn btn-lg btn-secondary left" />
                                        </form>
                                </div>
                            </div>
                        </div>
                        </div>
                        )
                    })
                }
            </>
        </Layout> );
  }
}

module.exports = Index;