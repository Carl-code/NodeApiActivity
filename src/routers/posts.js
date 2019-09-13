const express = require('express')
const post = require('../usecases/post')
const router = express.Router()

router.get('/',async (request,response) => {
	const allThatPosts = await post.get()
	response.json({
		success: true,
		message: 'all posts',
		data: {
			posts: allThatPosts
		}
	})
})
//this middleware is to post in DB
router.post('/',async (request,response) => {
	const{title,
				description,
				author,
				date,
				readTime,
				image,
	}= request.body;
	
	const newPost = await post.create({
		title,
		description,
		author,
		date,
		readTime,
		image,
	})
  response.json({
	success: true,
	message: 'Post created',
	data:{
		post: newPost
	}
 })
})
//this middleware is for delete an id
router.delete('/',async (request,response)=>{
	const{id}= request.params

	const deletedPost = await post.deleById(id)

	response.json({
		success: true,
		message: 'Post Deleted',
		data: {
			post: deletedPost
		}
  })
})

router.patch('/',async (request,response)=>{
	const{id}= request.params

	const{
		title,
		description,
		author,
		date,
		readTime,
		image
	} = request.body

	const postUpdated = await post.updateById({
		title,
		description,
		author,
		data,
		readTime,
		image
	})

	response.json({
		success: true,
		message: 'Post Updated',
		data: {
			post: postUpdated
		}
	})
})
module.exports = router
