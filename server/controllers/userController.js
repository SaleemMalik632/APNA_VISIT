const bcrypt = require('bcrypt');
const User = require("../models/user");

// Signup
async function Signup(req, res)
{
    try
    {
        let { email, password, name } = req.body;
        let hashPass = await bcrypt.hash(password);
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
        let { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(!user);
        if (!user)
        {
            return res.status(404).json({ message: 'not found', data: null, status: 'ok' });
        }
        else
        {
            if (bcrypt.compare(password, user.password))
            {
                console.log(user);
                return res.status(200).json({ message: 'found', data: user, status: 'ok' });
            } else
            {
                return res.status(401).json({ message: 'password not matched', data: null, status: 'ok' });

            }
        }
    } catch (err)
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
