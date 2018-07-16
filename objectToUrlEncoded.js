export default class ObjectToUrlConverter {
  static convert(object, options) {
    const { arrayAsCsv } = options;
    if(typeof object !== "object") {
      return console.log("\"object\" is not a JSON object");
    }
    let body = "";
    for(let key in object){
      let value = object[key];
      if(value instanceof Array && !arrayAsCsv) {
        for(let item of value) {
          body += encodeURIComponent(key) + "=" + encodeURIComponent(item) + '&';
        }
        body = body.slice(0,-1);
      }
      else {
        body += encodeURIComponent(key) + "=" + encodeURIComponent(value);
      }
      body += "&";
    }
    body[body.length - 1] === '&' && (body = body.slice(0,-1));
    return body;
  }
}
