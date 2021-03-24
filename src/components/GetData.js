import React from 'react'
import {Badge, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const GetData = ({post}) => {
    var postData=JSON.stringify(post.csrf_token)
    return (
        
        <div>
            <Link to={'/'}><Button style={{marginBottom:'50px'}} variant='primary'>See Table</Button></Link><br/>
            <h1>Token is :</h1><Badge style={{textAlign:'center'}} variant="danger"><h1>{postData}</h1></Badge>
            
        </div>
    )
}

export default GetData
