const React = require('react');
const Layout= require('./Layout.jsx');
class Edit extends React.Component {
    render() {
        const { tour} = this.props;
        return (
            <Layout>
                <div className="new">
                    <form
                        action={`/tour/edit/${tour._id}?_method=put`}
                        method="POST">
                        <h1 className='login-h1'> Edit To Our sightseeing!!</h1><br/>    
                        Name: <input type="text" name="name" value={tour.name} className="form-control form-control-lg" /><br/>
                        Location: <input type="text" name="location" value={tour.location} className="form-control form-control-lg"  /><br/>
                        Image : <input type="text" name="img"  value={tour.img} className="form-control form-control-lg" /><br/>
                        Rate : <input type="number" name="rate" value={tour.rate} className="form-control form-control-lg"  /><br/>
                        Price $: <input type="number" name="price" value={tour.price}className="form-control form-control-lg"  /><br/>
                        Size: <input type="text" name="size" value={tour.size} className="form-control form-control-lg" /><br/>
                        <input type="submit" name="" value="Edit tour" className="btn btn-secondary btn-lg btn-block"/>
                    </form>
                </div>
            </Layout>
        );
    }
}

module.exports = Edit;
