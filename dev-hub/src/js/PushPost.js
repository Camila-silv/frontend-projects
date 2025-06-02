const pushPost = async (data) => {
  const reponse = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return reponse;
}

export default pushPost;