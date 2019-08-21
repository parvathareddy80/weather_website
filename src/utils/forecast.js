const request = require('request')




const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/0368664967bbc0c79b83c6560098e281/' + lat + ',' + lon

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(body.error){
            callback('Unable to get forecast', undefined)
        }else{
            callback(undefined, 
                body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The High today is ' + body.daily.data[0].temperatureHigh + ' with low of ' + body.daily.data[0].temperatureLow + '. There is  a ' + body.currently.precipProbability + ' % of chances of rain.'
            )
        }
    })
}




module.exports = forecast