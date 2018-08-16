import React from 'react'
import {Button, List} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
class App extends React.Component{
    render(){
        const boss = '李云龙'
        return (
            <div>
                <h2>独立团，团长{boss}</h2>
                <一营 boss="张大喵"></一营>
                <骑兵连 boss="孙德胜"></骑兵连>
            </div>
            )
    }
}
function 骑兵连(props){
    return (
        <h3>骑兵连连长{props.boss},冲啊</h3>
    )
}
class 一营 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            solders: ['虎子','柱子','王根生']
        }
        // this.addSolider = this.addSolider.bind(this)
    }
    componentWillMount(){
        console.log('组件马上就要加载了')
    }
    componentDidMount(){
        console.log('组件加载完毕')
    }
    addSolider(){
        // alert('新兵入伍')
        this.setState({
            solders: [...this.state.solders,'新兵蛋子'+Math.random()]
        })
    }
    render(){
        console.log('组件正在加载')
        return (
            <div>
                <h3>一营营长，{this.props.boss}</h3>
                <Button type='primary' onClick={()=>this.addSolider()}>新兵入伍</Button>

                <List
                    renderHeader={()=>'士兵列表'}
                >
                    {this.state.solders.map(v=>{
                        return (
                            <List.Item key={v}>{v}</List.Item>
                        )
                    })}
                </List>
            </div>
        )
    }
}
export default App