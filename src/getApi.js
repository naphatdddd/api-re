import React, { Component } from 'react'
import axios from 'axios'

export default class getApi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ports: []
        }
    }
    componentDidMount() {
        axios.get('https://node-api-123.herokuapp.com/staff')
        .then(response => {
            console.log(response)
            this.setState({ports: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {ports} = this.state
        return (
            <div>
                {
                    ports.length ?
                    ports.map(post => <div key={post.id}>{post.name}</div>) :
                    null
                
                }
            </div>
        )
    }
}
