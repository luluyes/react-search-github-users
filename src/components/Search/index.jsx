import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import './search.scss'

export default class Search extends Component {
  search = async()=> {
    // const {value} = this.keywordEl;
    // 连续结构赋值并重命名的写法,但keywordEl没有被定义，不能使用.
    const {keywordEl:{value:keyword}} = this
    console.log(keyword)
    // Update App's state before sending request
    // this.props.updateAppState({isFirst:false,isLoading:true})
    PubSub.publish('searchUserByName', {isFirst:false,isLoading:true})

    // Send request (with Axios)
    /* axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response => { 
        console.log('Success: ', response.data)
        // API succeeds: Update App's state before sending request
        // this.props.updateAppState({isLoading:false, users:response.data.items, err:''})
        PubSub.publish('searchUserByName', {isLoading:false, users:response.data.items, err:''})
      },
      error => {
        console.log('Failure: ', error)
        // API fails: Update App's state before sending request
        // this.props.updateAppState({isLoading:false, err: error.message,users:[]})
        PubSub.publish('searchUserByName', {isLoading:false, err: error.message,users:[]})
      }
    ) */
    
    // Send request (with Fetch)
    // 第一个.then: Return promise的实例对象
    /* fetch(`https://api.github.com/search/users?q=${keyword}`).then(
      response => {
        console.log('Connect to Server');
        // 若返回的是非promise的值，外侧的.then的实例就是成功的，值为返回的非promise的值
        // 若返回的是promise的值，把这个值当作外侧.then的返回的promise的值
        return response.json();
      },
      // error => {
      //   console.log('Cannot connect to Server', error)
      //   return new Promise(() => {}) // 中断： 返回一个初始化状态的实力
      // }
    ).then(
      response => {
        console.log('Get data:', response)
      },
      // error => {
      //   console.log('Cannot get data: ', error)
      // }
    ).catch(
      (error) => {
        console.log('API fails: ', error)
      }
    ) */

    // Send request (with async await)
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyword}`)
      const data = await response.json() // response.json() 是一个promise实例
      console.log(data)
      PubSub.publish('searchUserByName', {isLoading:false, users:data.items, err:''})
    } catch (error) {
      console.log('Request fails: ', error)
      PubSub.publish('searchUserByName', {isLoading:false, err: error.message,users:[]})
    }

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
