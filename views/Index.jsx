const React = require('react');
const Layout= require('./Layout.jsx');

class Index extends React.Component {
  render() {
    return (

        <Layout>
            
            <nav>
                {/* <a href="/tour/new">Create a New tour</a> */}
            </nav>
            <>
                {
                   this.props.tour.map((tour, i) => {
                    return (
                        <div className='container'>
                           
                                <div className='card'>
                                    <img src={tour.img}  class="card-img-top" alt=""/>
                                    <div class="card-body">
                                    <a href={`/tour/${tour._id}`}><h3>{tour.name}</h3></a><br/>
                                </div>
                                
                                 <div className="button">
                                    {/* delete button*/}
                                    <form
                                    action={`/tour/${tour._id}?_method=DELETE`} method="post">
                                    <input type="submit" value="Delete" class="btn btn-lg btn-secondary"  />
                                    </form> 

                                    {/* edit button */}
                                    <form action={`/tour/edit/${tour._id}`} >
                                    <input type="submit" value="Edit" class="btn btn-lg btn-secondary left" />
                                        </form>
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