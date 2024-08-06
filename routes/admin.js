const { render } = require('ejs')
const express = require('express')
const router = express.Router()
const adminLayout = '../views/layouts/admin'

// Admin Page
// GET /admin

router.get('/admin', (req, res) => {
    const locals = {
        title: '관리자 페이지',
    }
    render('admin/index', {locals, layout: adminLayout})
})

module.exports = router 