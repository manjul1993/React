var React=require('react');
var Movieposter=require('./Movieposter.js');
var Moviedesc=require('./Moviedesc.js');
var Modal=require('./Modal.js');

var Favmovie=React.createClass(
      {
        getInitialState: function() {
                      return {status:false};//initial state
       },
        changestatus:function()
        {
                  this.setState({status:true});//changing state
        },
        delete:function(){
                        this.props.delete(this.props.imdbId);//deleting via one imdbid
        },

         render:function(){

                return(
                <div className = "container" id="movie">
                    <div className="jumbotron">
                        <div className = "row">
                          <Movieposter src={this.props.src}></Movieposter>
                          <Moviedesc  title={this.props.title} imdbId={this.props.imdbId} y={this.props.y} ></Moviedesc>
                          <button type="button"  className="btn btn-warning" onClick={this.delete}>Delete</button>
                          <input type="button" value="Update it"  className="btn btn-primary btn-medium" data-toggle="modal" data-target="#myModal" onClick={this.changestatus}/>
                          {this.state.status?<Modal handleupdate={this.props.handleupdate} closeit={this.closeit} title={this.props.title} imdbId={this.props.imdbId}></Modal>:null}
                          </div>
                       </div>
                     </div>)
          }

      })

module.exports=Favmovie;
