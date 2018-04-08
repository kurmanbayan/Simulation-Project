import React, { Component } from 'react'
import './index.css'
import App from '../App'
function newArticle(item = {}){
    const article = {
      id : item.id,
      title : item.title,
      overview : item.overview,
      key_facts : item.key_facts,
      admission_requirements : item.admission_requirements,
      visa : item.visa
    };
    return article;
}
class MainPanel extends Component{
  constructor(props) {
    super(props);
    this.state = {
      articles:[{
        id:100,
        title:'Test article',
        overview:'Leadership and teamwork in multi-cultural contexts is studied as well as practiced through live projects and group work, and reflected upon through interaction with executives. Ethics and CSR are integrated in several courses to mirror the integrated role it should have in everyday decision-making. Language and skills training provides the essential management communication tools needed for your future work. You will work with real “live” projects together with corporate partners of CEMS and of SSE.',
        key_facts:'Through the combination of topics covered in the program, you will acquire a deep and integrated understanding of how international firms and other organizations function, how to navigate them to achieve results, and, last but not least, how to improve them and the things they do.',
        admission_requirements:'The MSc Program in International Business takes part in the FT Master in Management ranking. The latest ranking placed us 23rd out of 95 participating top international business schools. ',
        visa:'The MSc Program in International Business takes part in the FT Master in Management ranking. The latest ranking placed us 23rd out of 95 participating top international business schools. '
      },{
        id:200  ,
        title:'Test article',
        overview:'Leadership and teamwork in multi-cultural contexts is studied as well as practiced through live projects and group work, and reflected upon through interaction with executives. Ethics and CSR are integrated in several courses to mirror the integrated role it should have in everyday decision-making. Language and skills training provides the essential management communication tools needed for your future work. You will work with real “live” projects together with corporate partners of CEMS and of SSE.',
        key_facts:'Through the combination of topics covered in the program, you will acquire a deep and integrated understanding of how international firms and other organizations function, how to navigate them to achieve results, and, last but not least, how to improve them and the things they do.',
        admission_requirements:'The MSc Program in International Business takes part in the FT Master in Management ranking. The latest ranking placed us 23rd out of 95 participating top international business schools. ',
        visa:'The MSc Program in International Business takes part in the FT Master in Management ranking. The latest ranking placed us 23rd out of 95 participating top international business schools. '
      }],
      status:1,
    };
}
  displayContent = (e) =>{
    this.setState({
      status:e,
    });
  }
  handleDelete = (key) =>{
    const deleteList = this.state.articles.filter((item)=>(item.id !== key));
    this.setState({
      articles:deleteList
    });
  };
  handleCreateArticle = (article) =>{
    this.createArticle(article);
  }
  createArticle = (item) => {
    const t  = newArticle(item);
    this.setState({
      articles:this.state.articles.concat(t)
    });
  }
  showItem = (item) =>{
    return (
      <div class="ui vertical stripe segment">
      <h4 class="ui horizontal header divider">
        <a href="#">{item.title}</a>
      </h4>
      <div class="ui menu">
        <a class="active item" onClick = {() => this.displayContent(1)}>Overwiew</a>
        <a class="item" onClick = {() => this.displayContent(2)}>Key facts</a>
        <a class="item" onClick = {() => this.displayContent(3)}>Admission requirements</a>
        <a class="item" onClick = {() => this.displayContent(4)}>Visa</a>
        </div>
        <li style = {{listStyle: "none"}}>
          <div class="ui middle aligned stackable grid container">
            <div class="row">
              <div class="eight wide column">
              <ArticleContent status = {this.state.status} title = {item.title} item = {item}/>
              </div>
              <div class="six wide right floated column">
                <img src="assets/images/wireframe/white-image.png" class="ui large bordered rounded image"/>
              </div>
              </div>
              <div class="row">
              <div  class="center aligned column">
                <button class="ui huge button">Edit</button>
                <button class="ui huge button" onClick = {()=>this.handleDelete(item.id)}>Delete</button>
              </div>


          </div>
          </div>

          </li>
      </div>
    )
  };
  render(){
    var list = this.state.articles.map(this.showItem);

      return(
        <div>

        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" >
        <div style = {{background:"white"}}>
            <label style={{fontSize:"30px",margin:"10px"}}>Opportunities</label>
            </div>
        </div>
        <ul>{list}</ul>

        <ToggleableArticleForm onFormSubmit = {this.handleCreateArticle}/>
        </div>
    );
  }
}
class ArticleContent extends Component{
  render(){
    if(this.props.status == 1 ){
      return(
        <div>
        <h3 class="ui header">
          <a class="text-dark" href="#">{this.props.item.title}</a>
        </h3>
        <p>{this.props.item.overview}</p>
        </div>
      );
    }else if(this.props.status == 2){
      return(
        <div>
        <h3 class="ui header">
          <a class="text-dark" href="#">Key facts</a>
        </h3>
        <p>{this.props.item.key_facts}</p>
        </div>
      );
    }else if(this.props.status == 3){
      return(
        <div>
        <h3 class="ui header">
          <a class="text-dark" href="#">Admission requirements</a>
        </h3>
        <p>{this.props.item.admission_requirements}</p>
        </div>
      );
    }
    else if(this.props.status == 4 ){
      return(
        <div>
        <h3 class="ui header">
          <a class="text-dark" href="#">Visa</a>
        </h3>
        <p>{this.props.item.visa}</p>
        </div>
      );
    }
  }
}
class ArticleForm extends Component{
  state = {
    id:'',
    title:'',
    overview:'',
    key_facts:'',
    admission_requirements:'',
    visa:''
  };
  handleChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = () =>{
    this.props.onFormSubmit({
      id:this.state.id,
      title:this.state.title,
      overview:this.state.overview,
      key_facts:this.state.key_facts,
      admission_requirements:this.state.admission_requirements,
      visa:this.state.visa
    });
  }
  render(){
    return(
      <div class="ui text container">

          <h4 class="ui header">Opportunity</h4>
          <form class="ui form" onChange = {this.handleChange}>
            <div class="field">
              <label>Id</label>
              <input type="text" name="first-name" placeholder="id"/>
              <div class="invalid-feedback">
                Please enter your id.
              </div>
            </div>
            <div class="field">
              <label>Title</label>
              <input type="text" name="last-name" placeholder="title"/>
              <div class="invalid-feedback">
                Please enter your title.
              </div>
            </div>
            <div class="field">
              <label>Overwiew</label>
              <input type="text" name="last-name" placeholder="overwiew"/>
              <div class="invalid-feedback">
                Please enter your overwiew.
              </div>
            </div>
            <div class="field">
              <label>Key facts</label>
              <input type="text" name="last-name" placeholder="key_facts"/>
              <div class="invalid-feedback">
                Please enter your key facts.
              </div>
            </div>
            <div class="field">
              <label>Admission requirements</label>
              <input type="text" name="last-name" placeholder="admission_requirements"/>
              <div class="invalid-feedback">
                Please enter your admission requirements.
              </div>
            </div>
            <div class="field">
              <label>Visa</label>
              <input type="text" name="last-name" placeholder="visa"/>
              <div class="invalid-feedback">
                Please enter your visa.
              </div>
            </div>
            <button class="ui button" type="submit" onClick = {this.handleSubmit}>Submit</button>
            <button class="ui button" type="submit" onClick = {this.props.handleCancel}>Cancel</button>
        </form>
        </div>
    );
  };

}
class ToggleableArticleForm extends Component{
  state = {
    isOpen: false,
  };
  handleFormOpen = () =>{
    this.setState({
      isOpen:true,
    });
  }
  handleFormClose = () =>{
    this.setState({
      isOpen:false,
    });
  }
  handleFormSubmit = (article) =>{
    this.props.onFormSubmit(article);
    this.setState({isOpen:false});
  }
  handleCancel = (e) =>{
    e.preventDefault();
    this.setState({
      isOpen:false,
    });
  }
  render(){
    if(this.state.isOpen){
      return(
        <ArticleForm
          onFormSubmit = {this.handleFormSubmit}
          onFormClose = {this.handleFormClose}
          handleCancel = {this.handleCancel}
        />
      );
    }else{
      return(
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <button class="btn btn-outline-secondary" onClick = {this.handleFormOpen} >Add opportunity</button>
        </div>
      );
    }
  }
}
export default MainPanel
