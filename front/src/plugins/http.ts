const get = async (url: string) => {
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

type DataPostInterface = {
  secret: String,
  title: String,
  content: String
}

type DataRegisterInterface = {
  email: String,
  password: String,
  Password2: String
}

type DataLoginInterface = {
  email: String,
  password: String
}

type PostData = DataPostInterface | DataRegisterInterface | DataLoginInterface;

type objectType = {
  error: string,
  message: string,
  data: {}
}

type PostInterface = (url: string, data: PostData) => Promise<objectType>;

const post: PostInterface = async (url, data) => {
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
