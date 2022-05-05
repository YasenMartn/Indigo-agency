import React from 'react';
import styled from "styled-components";
import Post from '../Components/Post';
import { blogPosts } from '../data';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const Header = styled.h1`
    color: var(--gray);
    margin-bottom: 50px;
`
const PostsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
    


const Blog = () => {
  return (
    <Container id="blog" >
        <Header>Our Blog</Header>
        <PostsContainer>
            {blogPosts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </PostsContainer>
    </Container>
  )
}

export default Blog