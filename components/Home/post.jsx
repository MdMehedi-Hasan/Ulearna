'use client';

import { useState } from 'react';
import { FaHeart, FaComment, FaShare, FaEllipsisH } from 'react-icons/fa';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 5);
  const [commentCount] = useState(Math.floor(Math.random() * 20));
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  // Generate avatar color based on user id
  const avatarColors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500', 'bg-pink-500'];
  const colorIndex = post.userId % avatarColors.length;
  const avatarColor = avatarColors[colorIndex];
  
  // Get initials from user name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={`https://i.pravatar.cc/150?u=${post.userId}`} />
              <AvatarFallback className={avatarColor}>
                {getInitials(post.user.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{post.user.name}</div>
              <div className="text-sm text-muted-foreground">@{post.user.username}</div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <FaEllipsisH className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Save Post</DropdownMenuItem>
              <DropdownMenuItem>Hide Post</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.body}</p>
        <div className="relative rounded-md overflow-hidden bg-muted h-[200px] flex items-center justify-center">
          <img 
            src={`https://picsum.photos/seed/${post.id}/600/400`} 
            alt="Post image"
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`gap-2 ${liked ? 'text-red-500' : ''}`}
          onClick={handleLike}
        >
          <FaHeart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
          {likeCount}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <FaComment className="h-4 w-4" />
          {commentCount}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <FaShare className="h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}