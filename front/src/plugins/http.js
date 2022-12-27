const get = async (url) => {
  const options = {
    method: 'GET',
    credential: 'include',
    headers: {
      'content-type': 'application/json',
    },
  };

  const res = await fetch(`http://localhost:4000/${url}`, options);
  const result = await res.json();
  return result;
};

const post = async (url, data) => {
  const options = {
    method: 'POST',
    credential: 'include',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(`http://localhost:4000/${url}`, options);
  console.log(res.status);
  const result = await res.json();
  return result;
};

export { get, post };
