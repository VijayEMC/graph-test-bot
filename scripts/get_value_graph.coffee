# Install Base Data by GDUNS
#
# ib gduns - returns ib data if GDUN exists
#

module.exports = (robot) ->
  robot.respond /value_graph (.*)/i, (msg) ->
    cust_name = escape(msg.match[1])
    api_url = "http://pnwreport_test.bellevuelab.isus.emc.com/api/graph/value/#{cust_name}"
        
    msg.http(api_url)
      .get() (err, res, body) ->
        try
          #json = JSON.parse(body)          
          #msgOutput = json
          console.log(body)
          msg.send "Please follow the link to open your graph."
          msg.send body
                    
        catch error
          msg.send error
          msg.send "Could not find gduns #{cust_name}"
