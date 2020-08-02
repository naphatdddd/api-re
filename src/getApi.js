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
        axios.get('http://127.0.0.1:3001/api/shop/5d53b8dabb8d365b8073d1ae')
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
