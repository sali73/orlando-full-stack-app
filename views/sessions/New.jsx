const React = require('react');
const Layout= require('../Layout.jsx');
class LoginUser extends React.Component {
    render() {
        return (
            <Layout>
                

            <div className='login'>
                
                <img src="https://tse1.mm.bing.net/th?id=OIP.VAA4kQUPwUOtbkxvJJUbsQHaMF&pid=Api&P=0&w=300&h=300" alt=""/>
                <form className='login-form' action="/sessions/" method="POST">

                    <h1 className='login-h1'>Login User</h1><br/>

                    <label for="exampleFormControlInput1"><h4>User Name:</h4></label>
                    <input class="form-control form-control-md"  type="text" name="username" />
                    
                    <label for="exampleFormControlInput1"><h4>Password:</h4></label>
                    <input class="form-control form-control-md"  type="password" name="password" />
                    <br />
                    <input  type="submit" value="Login User" class="btn btn-secondary btn-lg btn-block" />
                </form>
            </div>
            </Layout>
        );
    }
}
module.exports = LoginUser;