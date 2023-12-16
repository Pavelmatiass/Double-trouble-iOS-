const createDiscordMessage = (error) => {
  var embeds = []
  let message = {

      {
        "title": error.incident.condition.displayName,
        "title_link":  error.incident.url,
        "fields": [{
        "title": error.incident.state,
// here we getting the results
    "exception_info": {
      "type": "string, type of the exception logged in the event.",
      "message": "string, exception message for the event."
    },
        "value": error.incident.summary
      }]
  }
}
