import React from 'react'
import * as EventName from "./redux";

class App extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const store = this.props.store
        const EventName = this.props.eventName
        const num = store.getState()
        return(
            <div>
                <h1>机关枪展示{num}把</h1>
                <button onClick={()=>store.dispatch(EventName.addGun())}>申请武器</button>
                <button onClick={()=>store.dispatch(EventName.removeGun())}>报废武器</button>
                <button onClick={()=>store.dispatch(EventName.addGunAsync())}>2秒后</button>
            </div>
        )
    }

}
export default App