/* 
    p.129 로그 예제
    npm install winston --save
    npm install winston-daily-rotate-file --save
    npm install moment --save
*/

var winston = require('winston'); // 로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file'); // 로그 일별처리 모듈
var moment = require('moment'); // 시간 처리 모듈
var fs = require('fs');

var logDir  = fs.existsSync('../logs') ? '/logs/' : __dirname + '/../logs/';

function timeStampFormat(){
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

var logger = winston.createLogger({
    transports:[
        new(winstonDaily)({
            name:'info-file'
            ,filename : logDir+'server'
            ,datePattern:'YYYY-MM-DD'
            ,colorize:false
            ,maxsize:50000000
            ,maxFiles:1000
            ,level:'info'
            ,showLevel:true
            ,json:false
            ,timetamp:timeStampFormat
        }),
        new(winston.transports.Console)({
            name:'debug-console'
            ,colorize:true
            ,level:'debug'
            ,showLevel:true
            ,json:false
            ,timetamp:timeStampFormat
        })
    ],
    exceptionHandlers:[
        new(winstonDaily)({
            name:'exception-file'
            ,filename : logDir+'exception'
            ,datePattern:'YYYY-MM-DD'
            ,colorize:false
            ,maxsize:50000000
            ,maxFiles:1000
            ,level:'error'
            ,showLevel:true
            ,json:false
            ,timetamp:timeStampFormat
        }),
        new(winston.transports.Console)({
            name:'exception-console'
            ,colorize:true
            ,level:'debug'
            ,showLevel:true
            ,json:false
            ,timetamp:timeStampFormat
        })
    ]
});

// logger.debug('debug 테스트');
// logger.info('info 테스트');
// logger.error('error 테스트');

module.exports = logger;