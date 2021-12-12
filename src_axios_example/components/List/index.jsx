import React, { Component } from 'react'
import './list.scss'

export default class List extends Component {

  render() {
    const { users,isFirst,err,isLoading } = this.props

    return (
      <div className="list-container">
        
          {
            isFirst ? <h2>Please Enter A Name To Search.</h2> :
            isLoading ? <h2>Loading...</h2> :
            err ? 
            <>
              <h2>Oops! Errors Occrurs!</h2>
              <p style={{color: 'red'}}>{err}</p>
            </>:
            <div className="list-items">
              {
                users.map((userObj) => {
                  return (
                    <div className="list-item" key={userObj.id}>
                      <div className="list-item-image">
                        <a rel="noreferrer" href={userObj.html_url} target='_blank'>
                        <img alt="profile-pic" src={userObj.avatar_url}/>
                        </a>
                      </div>
                      <p className="item-name">{userObj.login}</p>
                    </div>
                  )
                })
              }
            </div> 
          }
          

        
      </div>
    )
  }
}
