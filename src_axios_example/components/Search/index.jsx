import React, { Component } from 'react'
import axios from 'axios'
import './search.scss'

export default class Search extends Component {
  search = ()=> {
    // const {value} = this.keywordEl;
    // 连续结构赋值并重命名的写法,但keywordEl没有被定义，不能使用.
    const {keywordEl:{value:keyword}} = this
    console.log(keyword)
    // Update App's state before sending request
    this.props.updateAppState({isFirst:false,isLoading:true})

    // Send request
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response => { 
        console.log('Success: ', response.data)
        // API succeeds: Update App's state before sending request
        this.props.updateAppState({isLoading:false, users:response.data.items, err:''})
      },
      error => {
        console.log('Failure: ', error)
        // API fails: Update App's state before sending request
        this.props.updateAppState({isLoading:false, err: error.message,users:[]})
      }
      
    )
    
  }
  render() {
    return (
      <div className='search-container'>
        <h2 className='search-title'>Search Github Users</h2>
        <input ref={c => this.keywordEl = c} className='search-bar' placeholder='Enter the name...'/>&nbsp;
        <button className='search-button' onClick={this.search}>Search</button>
      </div>
    )
  }
}
