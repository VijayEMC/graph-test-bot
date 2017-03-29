# Get SiteID and GDUNS by customer name
#
# siteid Customer_Name returns customer sites by name
#

module.exports = (robot) ->
  robot.respond /repbycust (.*)/i, (msg) ->
    cust_name = escape(msg.match[1])
    console.log typeof cust_name
    
    #api_url = "http://pnwreport_test.bellevuelab.isus.emc.com/api/repbycust/#{cust_name}"
    api_url = "http://pnwreport_test.bellevuelab.isus.emc.com/api/repbycust"
    postBody = {"coName" : cust_name}
    jString = JSON.stringify(postBody)
   
    
    #request.post
     #   url: api_url, body: postBody (err, response, body)->
      #      try
       #         console.log response.body
        #        msg.send response
    
         #   catch
          #      msg.send error
           #     msg.send "#{cust_name} can not be found."
                
                
    msg.http(api_url)
      .post(jString) (err, res, body) ->
        try
          msg.send body
                    
        catch error
          msg.send error
          msg.send "#{cust_name} can not be found!"
