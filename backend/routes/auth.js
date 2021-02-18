const express = require('express');
const router  = express.Router();
const { isAuth, catchErrs } = require('../middlewares')

const {
    loginProcess,
    signupProcess,
    confirmSignup,
    editProcess,
    uploadProcess,
    logoutProcess,
    loggedinProcess,
    googleProcess,
    googleRedirect
} = require('../controllers/auth')

router.post('/login', loginProcess)
router.post('/signup', signupProcess)
router.get('/confirm/:email/:id', catchErrs(confirmSignup))
router.post('/edit/:id',isAuth, catchErrs(editProcess))
router.post('/upload-photo/:id',isAuth, catchErrs(uploadProcess))
router.get('/logout', logoutProcess)
router.get('/loggedin', loggedinProcess)

router.get('/google', googleProcess)
router.get('/google/callback', googleRedirect)

module.exports = router;