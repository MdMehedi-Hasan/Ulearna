'use client';

import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function PostHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-6 flex items-center justify-between"
    >
      <Link href="/" passHref>
        <Button variant="ghost" size="sm" className="gap-2 group">
          <BsArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Button>
      </Link>
    </motion.div>
  );
}