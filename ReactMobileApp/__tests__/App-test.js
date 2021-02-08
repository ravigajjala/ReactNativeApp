/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


const response = [
  {
    "sha": "ae202b3bf655fd7fc666a654c19af5d1b1cb4aa5",
    "node_id": "MDY6Q29tbWl0MjY0NDI3MDI0OmFlMjAyYjNiZjY1NWZkN2ZjNjY2YTY1NGMxOWFmNWQxYjFjYjRhYTU=",
    "commit": {
      "author": {
        "name": "deepika1217-web",
        "email": "deepika1217@gmail.com",
        "date": "2020-05-17T02:01:07Z"
      },
      "committer": {
        "name": "deepika1217-web",
        "email": "deepika1217@gmail.com",
        "date": "2020-05-17T02:01:07Z"
      },
      "message": "Retrieved commit info from API.",
      "tree": {
        "sha": "140c48a262ddff2d25858eaba0cc6ddf0c531801",
        "url": "https://api.github.com/repos/deepika1217-web/MobileApp/git/trees/140c48a262ddff2d25858eaba0cc6ddf0c531801"
      },
      "url": "https://api.github.com/repos/deepika1217-web/MobileApp/git/commits/ae202b3bf655fd7fc666a654c19af5d1b1cb4aa5",
      "comment_count": 0,
      "verification": {
        "verified": false,
        "reason": "unsigned",
        "signature": null,
        "payload": null
      }
    },
    "url": "https://api.github.com/repos/deepika1217-web/MobileApp/commits/ae202b3bf655fd7fc666a654c19af5d1b1cb4aa5",
    "html_url": "https://github.com/deepika1217-web/MobileApp/commit/ae202b3bf655fd7fc666a654c19af5d1b1cb4aa5",
    "comments_url": "https://api.github.com/repos/deepika1217-web/MobileApp/commits/ae202b3bf655fd7fc666a654c19af5d1b1cb4aa5/comments",
    "author": {
      "login": "deepika1217-web",
      "id": 65450026,
      "node_id": "MDQ6VXNlcjY1NDUwMDI2",
      "avatar_url": "https://avatars.githubusercontent.com/u/65450026?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/deepika1217-web",
      "html_url": "https://github.com/deepika1217-web",
      "followers_url": "https://api.github.com/users/deepika1217-web/followers",
      "following_url": "https://api.github.com/users/deepika1217-web/following{/other_user}",
      "gists_url": "https://api.github.com/users/deepika1217-web/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/deepika1217-web/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/deepika1217-web/subscriptions",
      "organizations_url": "https://api.github.com/users/deepika1217-web/orgs",
      "repos_url": "https://api.github.com/users/deepika1217-web/repos",
      "events_url": "https://api.github.com/users/deepika1217-web/events{/privacy}",
      "received_events_url": "https://api.github.com/users/deepika1217-web/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "deepika1217-web",
      "id": 65450026,
      "node_id": "MDQ6VXNlcjY1NDUwMDI2",
      "avatar_url": "https://avatars.githubusercontent.com/u/65450026?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/deepika1217-web",
      "html_url": "https://github.com/deepika1217-web",
      "followers_url": "https://api.github.com/users/deepika1217-web/followers",
      "following_url": "https://api.github.com/users/deepika1217-web/following{/other_user}",
      "gists_url": "https://api.github.com/users/deepika1217-web/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/deepika1217-web/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/deepika1217-web/subscriptions",
      "organizations_url": "https://api.github.com/users/deepika1217-web/orgs",
      "repos_url": "https://api.github.com/users/deepika1217-web/repos",
      "events_url": "https://api.github.com/users/deepika1217-web/events{/privacy}",
      "received_events_url": "https://api.github.com/users/deepika1217-web/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "4c960e376410e519d58c9a966b9f9d1009efca2b",
        "url": "https://api.github.com/repos/deepika1217-web/MobileApp/commits/4c960e376410e519d58c9a966b9f9d1009efca2b",
        "html_url": "https://github.com/deepika1217-web/MobileApp/commit/4c960e376410e519d58c9a966b9f9d1009efca2b"
      }
    ]
  }
];
const mockJsonResponse = Promise.resolve(response);
const mockFetch = Promise.resolve({ json: () => mockJsonResponse });
global.fetch = jest.fn().mockImplementation(() => mockFetch);


// fetch = jest.fn(() => Promise.resolve(JSON.stringify(response)));

it('renders correctly', () => {
  renderer.create(<App />);
});
