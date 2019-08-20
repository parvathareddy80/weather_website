const request = require('request')




const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/0368664967bbc0c79b83c6560098e281/' + lat + ',' + lon

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(body.error){
            callback('Unable to get forecast', undefined)
        }else{
            callback(undefined, {
                temprature: body.currently.temperature,
                precipProbability: body.currently.precipProbability,
                summary: body.daily.data[0].summary
            })
        }
    })
}




module.exports = forecast