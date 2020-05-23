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
                        <div >
                            <a href={`/tour/${tour._id}`}>{tour.name}</a>
                            <img src={tour.img} alt=""/>

                            {/* delete button*/}
                            <form
                                action={`/tour/${tour._id}?_method=DELETE`} method="post">
                                <input type="submit" value="Delete" />
                            </form> 

                            {/* edit button */}
                            <form action={`/tour/edit/${tour._id}`} >
                                <input type="submit" value="Edit" />
                            </form>

                        
                        </div>


                        
                        )
                    })
                }
            </>
        </Layout> );
  }
}

module.exports = Index;