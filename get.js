import ObjectToUrlConverter from './objectToUrlConverter.js';

export default class Get {

  static executeArray(array, subscription) {
    let promises = [];
    for(let params of array) {
      promise.push(this.execute(params)
        .then(response => subscription(response.json()))
        .catch(subscription));
    }
    let allCompleted = Promise.all(promises);
  }

  static execute(params, options) {
    !this.fetch && this.fetch = window.fetch;
    let { url, body } = params;

    typeof params === 'string' && (url = params);

    if(params instanceof Array){
      //fire off chain of arrays
    }
    else if(params instanceof Object) {
      delete params.url;
      options = params;
    }
    if(body) {
      delete options.body;
      let urlEncodedBody = ObjectToUrlConverter.convert(body);
      // url += urlEncodedBody;
    }
    return this.fetch(url, options);
  }

}
