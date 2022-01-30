import axios from 'axios'
import {instance, postsAPI} from "./api";

jest.mock('axios', () => {
    return {
        create: () => {
            return {
                get: jest.fn(),
                post: jest.fn(),
                delete: jest.fn()
            }
        }
    };
});

test('should fetch posts', () => {
    const resp = {
        userId: 1,
        id: 1,
        title: 'test title',
        body: 'text'
    }
    // @ts-ignore
    instance.get.mockResolvedValue(resp)

    return postsAPI.getPosts().then(posts => expect(posts).toEqual(resp))

});

test('should add new post', () => {
    const newPost = {
        userId: 101,
        id: 101,
        title: 'new title',
        body: 'new text'
    }
    // @ts-ignore
    instance.post.mockResolvedValue(newPost)

    return postsAPI.addPosts(JSON.stringify(newPost)).then(posts => expect(posts).toEqual(newPost))

});

test('should delete post', () => {
    const postId = 2
    // @ts-ignore
    instance.delete.mockResolvedValue({})

    return postsAPI.deletePost(postId).then(posts => expect(posts).toEqual({}))

});