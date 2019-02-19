import { Router } from 'express';
import DB from '../../db';

let router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            let blog = await DB.Blogs.getBlog(id);
            res.send(blog)
        } catch (e) { console.log(e) }
    } else {
        try {
            let blogs = await DB.Blogs.getBlogs()
            res.send(blogs)
        } catch (e) { console.log(e) }
    }
});

router.post('/', async (req, res) => {
    try {
        let blog = req.body;
        let columns = Object.keys(blog);
        let values = Object['values'](blog);
        let result = await DB.Blogs.postBlog(columns, values);
        res.json(result);
    } catch (e) { console.log(e) }
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id
    try {
        await DB.Blogs.deleteBlog(id);
        res.json({ message: 'blog deleted!' })
    } catch (e) { console.log(e) }
});

router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let blog = req.body;
    try {
        let placeHolderColumns = Object.keys(blog).map(key => [`${key}="${blog[key]}"`]);
        let updateBlog = placeHolderColumns.join(', ');
        await DB.Blogs.editBlog(updateBlog, id);
        res.json({ message: 'blog updated!' });
    } catch (e) { console.log(e) }
});

export default router;