var React=require('react');
var About=React.createClass(
      {
         render:function(){

                    return(<div id="fav">
                      <h1>About {this.props.params.aboutId}</h1>
                      </div>
                  )
          }
      })

module.exports=About;


//homepage
