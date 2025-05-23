'use client';

import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '../ui/button';
import Post from './post';

export default function PostFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        
        // Get user data for each post
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();
        
        // Combine post data with user data
        const postsWithUserData = data.map(post => {
          const user = users.find(user => user.id === post.userId);
          return {
            ...post,
            user: user || { name: 'Anonymous User', username: 'anonymous' }
          };
        });
        
        setPosts(postsWithUserData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Latest Posts</h2>
        <p className="text-muted-foreground max-w-[700px]">
          Discover trending content from our community. Join the conversation and share your thoughts.
        </p>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/15 p-4 my-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-destructive">Error loading posts</h3>
              <div className="mt-2 text-sm text-destructive/80">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array(6)
              .fill()
              .map((_, index) => (
                <div key={index} className="border rounded-lg p-4 bg-card">
                  <div className="flex items-center space-x-4 mb-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[150px]" />
                      <Skeleton className="h-4 w-[100px]" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-[200px] w-full rounded-md mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-10 w-20 rounded-md" />
                    <Skeleton className="h-10 w-20 rounded-md" />
                    <Skeleton className="h-10 w-20 rounded-md" />
                  </div>
                </div>
              ))
          : posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
      
      {!loading && posts.length > 0 && (
        <div className="flex justify-center mt-10">
          <Button variant="outline">View More Posts</Button>
        </div>
      )}
    </section>
  );
}
