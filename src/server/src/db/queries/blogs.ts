import { Query } from '../index';

// Get blogs from database
const getBlogs = async () => Query(`SELECT * FROM blogs`);

// Get One blog from db
const getBlog = async (id: number) => Query(`SELECT * FROM blogs WHERE id = ${id}`);

// Add a blog to db
const postBlog = async (columns: any, values: any[]) => Query(`INSERT INTO blogs(${columns}) VALUES(?)`, values);

// Edit Blog 
const editBlog = async (updatedBlog: string, id: number) => Query(`UPDATE blogs SET ${updatedBlog} WHERE id = ${id}`);

// Delete Blog
const deleteBlog = async (id: number) => Query(`DELETE FROM blogs WHERE id = ${id}`);


export default {
    getBlog,
    getBlogs,
    postBlog,
    editBlog,
    deleteBlog
};