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

                        Name: <input type="text" name="name" value={tour.name} class="form-control form-control-lg" /><br/>
                        Location: <input type="text" name="location" value={tour.location} class="form-control form-control-lg"  /><br/>
                        Image : <input type="text" name="img"  value={tour.img} class="form-control form-control-lg" /><br/>
                        Rate : <input type="number" name="rate" value={tour.rate} class="form-control form-control-lg"  /><br/>
                        Price : <input type="number" name="price" value={tour.price}class="form-control form-control-lg"  /><br/>
                        Size: <input type="text" name="size" value={tour.size} class="form-control form-control-lg" /><br/>
                        {/* Details:<input type="text" name="textarea" /><br/> */}
                        
                        <input type="submit" name="" value="Edit tour" class="btn btn-secondary btn-lg btn-block"/>
                    </form>
                </div>
            </Layout>
        );
    }
}

module.exports = Edit;
