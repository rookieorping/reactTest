import React from 'react'
import Logo from '../../conpoment/logo/logo'
import { List, InputItem, WingBlank,WhiteSpace,Button,Radio} from 'antd-mobile'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd: '',
            repeatpwd:'',
            type: 'genius'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]: val
        })
    }
    handleRegister(key,val){
        console.log(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={(v)=>{this.handleChange('user', v)}}
                        >用户</InputItem>
                        <InputItem
                            type='password'
                            onChange={(v)=>{this.handleChange('pwd', v)}}
                        >密码</InputItem>
                        <InputItem
                            type='password'
                            onChange={(v)=>{this.handleChange('repeatpwd', v)}}
                        >确认密码</InputItem>
                        <WhiteSpace/>

                        <RadioItem
                            checked={this.state.type='genius'}
                            onChange={()=>this.handleChange('type', 'genius')}
                        >牛人</RadioItem>
                        <RadioItem
                            checked={this.state.type='boss'}
                            onChange={()=>this.handleChange('type', 'boss')}
                        >Boss</RadioItem>
                    </List>
                </WingBlank>
                <WhiteSpace></WhiteSpace>
                <Button type='primary' onClick={this.handleRegister}>注册</Button>
            </div>
        )
    }
}
export default Register