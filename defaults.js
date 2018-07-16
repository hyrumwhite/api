export default class Defaults {
  static set({
    engine,
    method,
    headers,
    responseType,
    url,
    credentials,
    cors,
    redirect
  }) {
    this.engine = engine;
    this.method = method;
    this.headers = headers;
    this.responseType = responseType;
    this.url = url;
    this.credentials = credentials;
    this.cors = cors;
    this.redirect = redirect;
  }
}
