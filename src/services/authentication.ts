import APIBuilder from '@app/api/APIBuilder';

function postAutoAuthentication() {
  const url = 'auth/token';
  const credntials = JSON.stringify({
    username: 'stas.testuser1@dietdoctor.com',
    password: 'C5(Pg5qwrwP^(WJ!eS%d38FI',
  });
  return APIBuilder.AUTH.post(url, credntials);
}

function postAuthenticate(username: string, password: string) {
  // to be timplemented
  return {username, password};
}

export {postAutoAuthentication, postAuthenticate};
