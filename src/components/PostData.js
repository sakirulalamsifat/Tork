import React from 'react'
import { Table, Button,  } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const PostData = ({ data }) => {
  return (
    <div>
        <Link to={'/get'}><Button style={{marginBottom:'20px'}} variant='danger'>See Token</Button></Link>
      <Table striped bordered hover responsive className='table table-dark'>
        <thead>
          <tr>
            <th><strong>id</strong></th>
            <th>Title</th>
            <th>Meeting ID</th>
            <th>user Name</th>
            <th>Meeting Password</th>
            <th>Starting Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => (
            <tr>
              <td>{dat.id}</td>
              <td>{dat.title}</td>
              <td>{dat.meeting_id}</td>
              <td>{dat.user_name}</td>
              <td>{dat.meeting_password}</td>
              <td>{dat.starting_time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default PostData
