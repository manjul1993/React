var React=require('react');

var Searchbar=React.createClass(
      {

           getInitialState:function(){
              return{data1:''};
           },
           storeData:function(e){
                console.log("i am coming in");

              this.setState({data1: e.target.value});//setting the state fo search bar
              console.log(this.state.data1);

           },
           searchIt:function(){
             console.log("its working");

             console.log(this.state.data1);
             this.props.searchIt(this.state.data1);
           },
          render:function(){
                return(
                  <div>
                  <form  role="search">
                  <div className="row" id="row1">
                          <h1 class="head">Welcome to world of Movies...!!!</h1>
                          <div className="col-md-10 col-lg-11 col-sm-10">
                                <input type="text" placeholder="Search something" className="form-control" defaultValue={this.state.data1} onChange={this.storeData}/>
                            </div>
                            <div className="col-md-2 col-lg-1 col-sm-2">
                                  <button type="button"  className="btn btn-info" onClick={this.searchIt}>Search me</button>
                            </div>
                            </div>
                          </form>
                     </div>);
          }
      })

module.exports=Searchbar;
