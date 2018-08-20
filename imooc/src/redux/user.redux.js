const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState={
    isAuth: '',
    msg: '',
    user: '',
    pwd: '',
    type: ''
}
// reducer
export function user(state, action) {
    switch (action, type){
        case REGISTER_SUCCESS:
            return {...state,msg:'', isAuth:true}
        case ERROR_MSG:
            return
        default:
            return state
    }
}
function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}

export function register({user,pwd,repeatpwd,type}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须填写')
    }
    if (pwd !== repeatpwd) {
        return errorMsg('密码和确认密码不同')
    }
    return dispatch=>{
        axios.post('/user/register',{use,pwd, type}).then(res=>{

            if (res.status == 200 && res.data.code ===0) {
                dispatch(REGISTER_SUCCESS({user,pwd,type}))
            } else {
                dispatch(ERROR_MSG(res.data.msg))
            }
        })
    }

}