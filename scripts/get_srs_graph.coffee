# List all SRS for a GDUNS
#
# srs gduns - returns all srs for this customer
#


module.exports = (robot) ->
  robot.respond /srs_graph (.*)/i, (msg) ->
    cust_name = escape(msg.match[1])
    api_url = "http://pnwreport_test.bellevuelab.isus.emc.com/api/srs_graph/#{cust_name}"

            

    msg.http(api_url)
      .get() (err, res, body) ->
        try            
          msg.send body                   
        catch error
          msg.send error
          msg.send "Could not find gduns #{cust_name}"
