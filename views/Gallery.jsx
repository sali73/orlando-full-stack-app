const React = require('react');
const Layout= require('./Layout.jsx');

class Gallery extends React.Component {
    render() {
        return (
            <Layout>
                <div className="jumbotron-fluid gallery">
                    {/*<h1 className='title'> Wellcome To Orlando Gallery</h1>*/}
                    <div className= 'slider'>
                        <ul>
                            <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvejO2CInjCNM3lptXr8DMgIpmqO-iE_D5r3qac--pX32WD0Md&usqp=CAU" alt=""/>
                            </li>
                            <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVLGUpdMEBBeaxJ4YGY6SqdS4qOy_W5XKEfCsuN9wFiz-TgYec&usqp=CAU" alt=""/>
                            </li>
                            <li> 
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSP1qduN9tmTMnLH3I2D62tqrlaIIcy1wPHh7yCn2A9atot0Jwn&usqp=CAU" alt=""/>
                            </li>
                            <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_L1hjrzC3ck213Z9U8ejWhl4lX4C_sUBHXN3vda25QteB1mtr&usqp=CAU" alt=""/>
                            </li>
                            <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb5JvtcvgrpZwkfyD39otkmnHaHsVWuRrXRpUYlsZYr6eiMy8X&usqp=CAU" alt=""/>
                            </li>
                            <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9_ghoworyfDLoj8bfKMy0D---m6RLVoGeUw4JBBSTgcX94X9D&usqp=CAU" alt=""/>
                            </li>
                            <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSLqLeK7pPO7FbBsC-HSnYLHj_b7w0U23ezK0rn-16NbVwmgbg&usqp=CAU" alt=""/>
                            </li>
                            <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLNtt16VCcmBEZCLH3RwHlLweqC-0sMzVkGbX4-1QbjpIOigvt&usqp=CAU" alt=""/>
                            </li>
                            <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJvRVGMmplmtndMEfNmUaaryfCUYWtLTUApzrCyZz_e1FVqmct&usqp=CAU" alt=""/>
                            </li>
                            <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5kw6a_qUxTQUdcifoq4vJ6cRqBD0d6SM006NnPHu3_8hZ7wEy&usqp=CAU" alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </Layout>
        );
    }
}

module.exports = Gallery;

