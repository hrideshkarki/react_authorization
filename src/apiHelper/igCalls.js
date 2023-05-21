export const getPosts = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/posts`);
    const data = await res.json();
    return data
};