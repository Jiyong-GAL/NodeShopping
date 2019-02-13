/* 
    p.314 라우팅 모듈화
*/
module.exports = {
    route_config :[
        {
            file : './user'
            , path : '/process/login'
            , method : '/login'
            , type : 'post'
        },
        {
            file : './user'
            , path : '/process/addUser'
            , method : '/adduser'
            , type : 'post'
        }
    ]

}