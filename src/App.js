import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostData from './components/PostData'
import GetData from './components/GetData'

function App() {
  const [data, setData] = useState([])
  const [post, setPost] = useState('')

  useEffect(() => {
    const postItems = async () => {
      const dataPost = await axios.post(
        `https://examplebd.com/api/live-classes?user_id=10089`
      )
      console.log(dataPost.data)
      setData(dataPost.data)
    }

    const GetData= async () =>{
      const getData= await axios.get(`https://examplebd.com/api/get-csrf-token`)
      console.log(getData.data)
      setPost(getData.data)
    }
    GetData()
    postItems()
  }, [])
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' component={() => <PostData data={data} />} exact />
          <Route path='/get' component={() => <GetData post={post} />} exact />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
