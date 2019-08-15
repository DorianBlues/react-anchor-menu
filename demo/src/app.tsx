import * as React from 'react'
import AnchorMenu from '../../index.js'
const style = require('./style')

const menu:any = [
    
]

export default class App extends React.PureComponent {
    render () {
        return (
            <div className={style.container}>
                <AnchorMenu />
            </div>
        )
    }
}