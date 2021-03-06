
const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    nickname: state => state.user.name,
    roles: state => state.user.roles,
    userInfo: state => state.user.info,
    addRouters: state => state['async-router'].addRouters,
    accessMap: ({ accesses }) => accesses.reduce((map, access) => ({ // 当前用户权限映射
                ...map,
                [access['access']]: access
    }), {})
}

export default getters
