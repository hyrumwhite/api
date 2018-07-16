import Defaults from './Defaults';

export default class FetchEngine{
  static execute(params) {
    const {
      url,
      responseType,
      method,
      credentials,
      cors,
      redirect,
      includeMeta,
    } = params;

    delete params.url;
    delete params.responseType;
    delete params.includeMeta;

    !url         && (url = Defaults.url);
    !method      && (params.method = Defaults.method);
    !includeMeta && (includeMeta = Defaults.includeMeta);
    !credentials && (params.credentials = Defaults.credentials);
    !cors        && (params.cors = Defaults.cors);
    !redirect    && (params.credentials = Defaults.redirect);

    params.headers = Object.assign(Defaults.headers, params.headers);

    const responseWithMeta = response => response[responseType]()
      .then(
        data => ({data, meta:response})
      );

    const responseFunction = includeMeta ?
          responseWithMeta
        : response => response[responseType]()//just send back the data

    return window.fetch(url, params)
      .then(response => response.ok ?
          responseFunction(response)
        : Promise.reject(responseWithMeta(response))
      )

  }
}
