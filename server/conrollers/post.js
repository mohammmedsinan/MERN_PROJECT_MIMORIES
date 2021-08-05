import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;
  const newPosts = new PostMessage(post);
  try {
    await newPosts.save();
    res.status(201).json(newPosts);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
