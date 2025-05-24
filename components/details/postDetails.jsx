'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { BsCalendar, BsClock, BsEye, BsChatSquare, BsShare, BsHandThumbsUp } from 'react-icons/bs';
import { motion } from 'framer-motion';

export function PostDetailSkeleton({ isLoading }) {
  if (!isLoading) return null;

  return (
    <Card className="w-full mb-8">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-3 w-[100px]" />
            </div>
          </div>
          <div className="space-y-3">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[70px]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PostDetail({ post, user }) {
   return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full mb-8 overflow-hidden pt-0">
        <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary/10 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-center px-4">{post?.title?.charAt(0).toUpperCase()}</h1>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${user?.id}`} alt={user?.name} />
                  <AvatarFallback>{user?.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <BsCalendar className="h-3 w-3" />
              </Badge>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-4">{post?.title?.charAt(0).toUpperCase() + post?.title?.slice(1)}</h1>
              <div className="flex gap-4 mb-6">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <BsClock className="h-3 w-3" />
                  32 min read
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <BsEye className="h-3 w-3" />
                  {Math.floor(Math.random() * 1000) + 100} views
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <BsChatSquare className="h-3 w-3" />
                  {Math.floor(Math.random() * 20) + 1} comments
                </span>
              </div>
              <div className="prose prose-sm max-w-none">
                {post?.body?.split('\n')?.map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph.charAt(0).toUpperCase() + paragraph.slice(1)}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between pt-4 border-t">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm hover:text-primary transition-colors">
                  <BsHandThumbsUp className="h-4 w-4" />
                  <span>{Math.floor(Math.random() * 50) + 5}</span>
                </button>
                <button className="flex items-center gap-1 text-sm hover:text-primary transition-colors">
                  <BsShare className="h-4 w-4" />
                  Share
                </button>
              </div>
              <div>
                <Badge>#{post?.id}</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}