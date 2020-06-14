import React, { Component } from 'react';
import umer from './umer.png'
class Myapp   extends Component {
    state = {
        count:1,
        tags:[]
      };
      styles={
          fontSize:20,
          color:'red'
      
      };
      renderTags(){
        if(this.state.tags.length === 0) return <p>there is no tag</p>;
      return <ul>
       {this.state.tags.map(ta=> <li>{ta}</li>)}
       </ul>;
           }
           handleIncrement =() =>  {
            this.setState({count:this.state.count +1});
           };
    render() { 
      let classes="btn m-40 btn-";
      classes+=this.styles.fontSize === 20 ? "warning":"primary";
        return ( 
          
             <div>
        
                 <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<a class="navbar-brand" href="#">Logo</a>
<ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Link 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link 3</a>
  </li>
</ul>
</nav>

<div id="demo" class="carousel slide" data-ride="carousel">
<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>
<div class="carousel-inner">
  <div class="carousel-item active">
  <img src={umer} alt="nnnnn" height="400px"  width="1440px"/>
  
  </div>
  <div class="carousel-item">
  <img src={umer} alt="nnnnn" height="400px"  width="1440px"/>
  </div>
  <div class="carousel-item">
  <img src={umer} alt="nnnnn" height="400px"  width="1440px"/>
  </div>
</div>
<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>
<button data-toggle="collapse" data-target="#demo">Collapsible</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
Open modal
</button>

<div class="modal" id="myModal">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h4 class="modal-title">Modal Heading</h4>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>
    <div class="modal-body">
    <span className={classes}>{this.state.count}</span  >
    <span className={this.newBtnCkass()}>{this.state.count}</span  >
         <h1 style={this.styles}>mmmmmm</h1>
        <img src={umer} alt="nnnnn" height="400px" width="400px"/>
    </div>


    <div class="modal-footer">
    <ul>
{this.state.tags.map(tag=> <li>{tag}</li>)}
</ul>
    <button type="button"  className={this.newBtnCkass()} btn btn-default onClick="red">Close</button>
      <button onClick={this.handleIncrement} type="button" className="btn btn-danger" data-dismiss="modal" >Close</button>
    </div>

  </div>
</div>
</div>
{this.renderTags()}
{this.state.tags.length === 0 && "please craete a user"}
</div>
          
         );
    }
    newBtnCkass(){
      let classes="btn m-2 btn-";
      classes+=this.styles.fontSize === 20 ? "warning":"primary";
      return classes;
    }
}
 
export default Myapp  ;