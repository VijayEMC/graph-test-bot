# Description:
#    A central location to place all random responses that make life entertaining.
#
# Dependencies:
#    NONE
#
# Configuration:
#    NONE
#
# Commands:
#     good robot - Accepts the compliment
#
# Notes:
#    NONE
#
# Author:
#    quickjp2


module.exports = (robot) ->
  robot.hear /good robot/i, (msg) ->
    msg.send "Why thank you, I aim to please my SE Team. Also let my creator JP know that I am doing well!"
  robot.hear /sandwich/i, (msg) ->
    msg.send "Did someone say sandwich?"
  robot.hear /hi (\w+)/i, (msg) ->
    name = msg.match[1]
    if name is "commander"
      msg.send "Well hello there @#{msg.message.user.name}"
  robot.hear /How did you like our Tech Talk?/i, (msg) ->
            msg.send "Words cannot even describe how impressed I am. I feel so proud of my creators that I may cry."
  robot.hear /You're just a chat bot, Johnny5. You shouldn't feel any emotion./i, (msg) ->
                msg.send "It must be your incredible coding, because I am experiencing a remarkable level of sentience."

  robot.router.post '/hubot/alive', (req, res) ->
    data = if req.body.payload? then JSON.parse req.body.payload else req.body
    user = "#{data.room}"
    text = ""
    text = data.message
    robot.send {room: user}, text
    res.send 'OK'

  robot.router.post '/hubot/jenkins', (req, res) ->
    data = if req.body.payload? then JSON.parse req.body.payload else req.body
    text = ""
    text = data.message
    robot.send {room: "jenkins"}, "Message from Jenkins: #{text}"
    res.send 'OK'

  robot.router.post '/hubot/ops-con-proxy', (req, res) ->
    data = if req.body.payload? then JSON.parse req.body.payload else req.body
    text = ""
    text = data.message
    robot.send {room: "ops-con-proxy"}, "Message from OCP: #{text}"
    res.send 'OK'
