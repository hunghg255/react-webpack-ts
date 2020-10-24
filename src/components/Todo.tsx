import * as React from 'react'

import { funcAlerts } from '../utils/helper'
import { log } from '../utils/utils'

import styles from './Todo.scss'
import IMG from '../assets/test.jpg'

interface ITodoItem {
  title: string;
}

type TProps = {
  title: string;
  todos: ITodoItem;
}

export default class Todo extends React.Component<TProps, {}> {
  render() {
    return (
      <div>
        <h3 className={`${styles.h3}`}>Todo</h3>
        <h3>Props: {this.props.title}</h3>
        <button onClick={funcAlerts}>alert</button>
        <button onClick={() => log('Test ts')}>TS</button>
        <img src={IMG} alt=""/>
      </div>
    )
  }
}
