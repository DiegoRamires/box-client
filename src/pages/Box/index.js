import React, { Component } from 'react';
import api from '../../services/api'
import { distanceInWords } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { MdInsertDriveFile } from 'react-icons/md'
import './styles.css'
import logo from '../../assets/logo.svg'

export default class Box extends Component {
  state = { box: {} }
  async componentDidMount() {
    const box = this.props.match.params.id
    const response = await api.get(`boxes/${box}`)

    this.setState({ box: response.data })
  }
  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} />
          <h1>{this.state.box.title}</h1>
        </header>
        <ul>
          { this.state.box.files && this.state.box.files.map( file => (
            <li>
              <a className="fileInfo" href={file.url} target="_blank">
                <MdInsertDriveFile size={24} color="#A5CFFF" />
                <strong>{file.title}</strong>
              </a>
              <span>há{" "}{distanceInWords(file.createdAt, new Date(), {
                locale: pt
              })}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
