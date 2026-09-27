'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/rss-types';
import { mediaAlt, mediaSrc } from '@/lib/media';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(post.publishedAt);

  const fallbackSrc = mediaSrc('covered-patio');
  const fallbackAlt = mediaAlt('covered-patio');

  return (
    <article className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden bg-gray-100">
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = fallbackSrc;
              target.alt = `${post.title} — ${fallbackAlt}`;
            }}
          />
        ) : (
          <Image
            src={fallbackSrc}
            alt={`${post.title} — ${fallbackAlt}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </Link>
      
      <div className="p-6">
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <span 
                key={category}
                className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <time dateTime={post.publishedAt.toISOString()}>
            {formattedDate}
          </time>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
