import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">
          The blog post you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-[#1a365d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0f2439] transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
