import Defaults from './defaults.js';
import Get from './get.js';
import Post from './post.js';
import Put from './put.js';
import Patch from './patch.js';
import Delete from './delete.js';

import FetchEngine from './engines/fetch-engine.js';

Defaults.set({
  url:'',
  Engine: FetchEngine,
  method: 'GET',
  headers: {
    "Content-Type":"application/json"
  },
  responseType: 'json',
  includeMeta: false
});

function Api(...params) {
  Defaults.Engine.execute(...params);
}

Api.defaults = Defaults.set;
Api.get = Get.execute;
Api.post = Post.execute;
Api.put = Put.execute;
Api.patch = Patch.execute;
Api.delete = Patch.execute;

export default Api;
