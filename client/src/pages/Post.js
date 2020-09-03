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
render(){
    return (
        <div>
            <h1>{this.state.title}</h1>
            <h3>{this.state.name}</h3>
            <p>{this.state.story}</p>
        </div>
    )
}
}