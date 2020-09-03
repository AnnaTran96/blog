import React, {Component} from 'react';

export default class Post extends Component {

    state ={
        postID: this.props.match.params.id,
        title: "",
        name: "",
        story: ""

    }

async componentDidMount(){
    const url = `http://localhost:3000/posts/${this.state.postID}`;
    const response = await fetch(url)
    const data = await response.json();
    console.log(data.post[0].title)
    this.setState({title: data.post[0].title})
    this.setState({name: data.post[0].name})
    this.setState({story: data.post[0].story})
}

// deletePost = (div) => {
//     const options = {
//         method: 'DELETE'
//     }
//     fetch(`http://localhost:3000/posts/${this.state.postID}`, options)
//         .then(div.remove())
//         .catch(console.warn)
// }

// updatePost = (div) => {
//     const options = {
//         method: 'PATCH'
//     }
//     fetch(`http://localhost:3000/posts/${this.state.postID}`, options)
//         .then
// }

// handleEdit = (e) => {
//     e.preventDefault();
//     this.setState({title: e.target.value.title, name: e.target.value.name, story: e.target.value.story})
// }

// handleDelete = (e) => {
//     e.preventDefault();
//     this.deletePost()
// }

render(){
    return (
        <div>
            <h1>{this.state.title}</h1>
            <h3>{this.state.name}</h3>
            <p>{this.state.story}</p>
            {/* <button onClick={this.handleEdit}>Edit</button> */}
            {/* <button onClick={this.handleDelete}>Delete</button> */}
        </div>
    )
}
}