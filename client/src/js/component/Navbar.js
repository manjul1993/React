var React=require('react');
var {Link}=require('react-router');
var NavLink=require('./NavLink.js');

var Navbar=React.createClass(
      {

         render:function(){

                return(
                  <div className="container-fluid" id="cont">
                  	<div className="row">
                  		<div className="col-md-12">
                  			<ul className="nav nav-tabs">
                  				<li>
                  					<NavLink to="/home">Home</NavLink>
                  				</li>
                  				<li>
                  					<NavLink to="/search_Movie">Search Movie</NavLink>
                  				</li>
                  				<li>
                  					<Link to="/favourite_Movie" >Favourite Movie</Link>
                  				</li>
                          <li>
                            <Link  to="/about/react">About React</Link>
                          </li>
                          <li>
                            <Link to="/about/mern">About MERN</Link>
                          </li>

                  			</ul>
                  		</div>
                  	</div>
                  </div>
                )
          }
      })

module.exports=Navbar;
