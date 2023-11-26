const bcrypt = require('bcrypt');
const User = require("../models/user");

// Signup
async function Signup(req, res)
{
    try
    {
        let { email, password, name } = req.body;
        let hashPass = await bcrypt.hash(password,8);
        console.log(req.body);
        console.log(hashPass);
        let data = {
            email: email,
            name: name,
            password: hashPass,
        };
        const user = await User.create(data);
        res.status(201).json({ message: 'created', data: user, status: 'ok' });
    } catch (err)
    {
        res.status(500).json({ message: err.message, data: null, status: 'error' });
    }
}
// Login
async function Login(req, res)
{
    try
    {
        console.log(req.body);
        console.log(req.body.email)
        if (req.body.email === "muhammadmoazam711@gmail.com" && req.body.password===1234)
        {
            console.log("User found")
            return res.status(200).json({ message: 'user found', status: 'ok' });
        }
    }
    catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}
async function getUser(req, res)
{
    try
    {
        const users = await User.find();
        res.status(200).json({ user: users, message: "Successfully finded" });
    } catch (err)
    {
        res.status(500).json({ error: err.message, message: "Internal server error" });
    }
}
// update user by id
async function updateUser(req, res)
{
    try
    {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedUser);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}
// delete a user by id

async function deleteUser(req, res)
{
    try
    {
        const { id } = req.params;
        console.log(id);
            await User.findByIdAndDelete(id);
        res.sendStatus(200);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}
module.exports = {
    Login,
    Signup,
    deleteUser,
    updateUser,
    getUser,
};
