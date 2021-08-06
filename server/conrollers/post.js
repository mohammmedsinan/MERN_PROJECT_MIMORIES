import mongoose from 'mongoose';
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

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id');
  const updatePost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
  try {
    await PostMessage.findByIdAndRemove(id);
    res.json({ message: 'Post deleted without issue' });
  } catch (err) {
    res.status(409).json({ message: err });
  }
};
