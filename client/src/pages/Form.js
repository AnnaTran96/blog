import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Form extends Component {

    state = {
        title: "",
        name: "",
        story: ""
    }
handleChange = e => {
    this.setState({})
    this.setState({})
    this.setState({})
}
handleSubmit = e => {
    e.preventDefault()

    const data = {
        title: e.target.title.value,
        name: e.target.name.value,
        story: e.target.story.value
    }
    const options = {
        method: 'POST',
        body:JSON.stringify(data),
        headers:{"Content-Type": "application/json"}
    }
    fetch('http://localhost:3000/posts', options)
    .then(r => r.json())
    .then(resp => this.props.history.push(`/${resp.id}`))
    .catch(console.warn)
}
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="Title" onChange={this.handleChange}></input>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name" onChange={this.handleChange}></input>
                    <label htmlFor="story">Story</label>
                    <input type="story" id="story" placeholder="Enter a story..." onChange={this.handleChange}></input>
                    <input type="submit" value="Enter post"/>
                </form> 
            </div>
        )
    }
}


export default withRouter(Form);