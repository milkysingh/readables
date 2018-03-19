const clone = require('clone');

let db = {};

const defaultData = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Higher Order Component',
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.
    Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?
    
    Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?
    
    Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius.`,
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Stephen Grider',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  '6ni6ok3ym7of1p33lnez': {
    id: '6ni6ok3ym7of1p33lnez',
    timestamp: 1468479767190,
    title: 'Components are Kings!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Malkeet Singh',
    category: 'react',
    voteScore: 963,
    deleted: false,
    commentCount: 20
  },
  '6ni6ok3ym7nf1p33lnez': {
    id: '6ni6ok3ym7nf1p33lnez',
    timestamp: 1468479767190,
    title: 'Rxjs is a beauty!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Aman Singh',
    category: 'rxjs',
    voteScore: 100,
    deleted: false,
    commentCount: 69
  },
  '8xf0y6ziykabvozdd253nd': {
    id: '8xf0y6ziykabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Higher Order Component',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  '6ni6ok3ym7mg1p33lnez': {
    id: '6ni6ok3ym7mg1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Stephen Grider',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  '6ni6ok3ym7of1p34lnez': {
    id: '6ni6ok3ym7of1p34lnez',
    timestamp: 1468479767190,
    title: 'Components are Kings!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Malkeet Singh',
    category: 'react',
    voteScore: 963,
    deleted: false,
    commentCount: 20
  },
  '6ni6ok3ym7nf1p35lnez': {
    id: '6ni6ok3ym7nf1p35lnez',
    timestamp: 1468479767190,
    title: 'Rxjs is a beauty!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Aman Singh',
    category: 'rxjs',
    voteScore: 100,
    deleted: false,
    commentCount: 69
  },
  '8xf0y6ziyjabvozdd254nd': {
    id: '8xf0y6ziyjabvozdd254nd',
    timestamp: 1467166872634,
    title: 'Higher Order Component',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  '6ni6ok3ym7mf1p39lnez': {
    id: '6ni6ok3ym7mf1p39lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Stephen Grider',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  '6ni6ok3ym7of1p31lnez': {
    id: '6ni6ok3ym7of1p31lnez',
    timestamp: 1468479767190,
    title: 'Components are Kings!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Malkeet Singh',
    category: 'react',
    voteScore: 963,
    deleted: false,
    commentCount: 20
  },
  '6ni6ok3ym7nf1p33lnea': {
    id: '6ni6ok3ym7nf1p33lnea',
    timestamp: 1468479767190,
    title: 'Rxjs is a beauty!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'Aman Singh',
    category: 'rxjs',
    voteScore: 100,
    deleted: false,
    commentCount: 69
  }
};

function getData(token) {
  let data = db[token];
  if (data == null) {
    data = db[token] = clone(defaultData);
  }
  return data;
}

function getByCategory(token, category) {
  return new Promise(res => {
    let posts = getData(token);
    let keys = Object.keys(posts);
    let filtered_keys = keys.filter(
      key => posts[key].category === category && !posts[key].deleted
    );
    res(filtered_keys.map(key => posts[key]));
  });
}

function get(token, id) {
  return new Promise(res => {
    const posts = getData(token);
    res(posts[id].deleted ? {} : posts[id]);
  });
}

function getAll(token) {
  return new Promise(res => {
    const posts = getData(token);
    let keys = Object.keys(posts);
    let filtered_keys = keys.filter(key => !posts[key].deleted);
    res(filtered_keys.map(key => posts[key]));
  });
}

function add(token, post) {
  return new Promise(res => {
    let posts = getData(token);

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 1,
      deleted: false,
      commentCount: 0
    };

    res(posts[post.id]);
  });
}

function vote(token, id, option) {
  return new Promise(res => {
    let posts = getData(token);
    post = posts[id];
    switch (option) {
      case 'upVote':
        post.voteScore = post.voteScore + 1;
        break;
      case 'downVote':
        post.voteScore = post.voteScore - 1;
        break;
      default:
        console.log(`posts.vote received incorrect parameter: ${option}`);
    }
    res(post);
  });
}

function disable(token, id) {
  return new Promise(res => {
    let posts = getData(token);
    posts[id].deleted = true;
    res(posts[id]);
  });
}

function edit(token, id, post) {
  return new Promise(res => {
    let posts = getData(token);
    for (prop in post) {
      posts[id][prop] = post[prop];
    }
    res(posts[id]);
  });
}

function incrementCommentCounter(token, id, count) {
  const data = getData(token);
  if (data[id]) {
    data[id].commentCount += count;
  }
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll,
  incrementCommentCounter
};
