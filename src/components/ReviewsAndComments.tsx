import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Send, CheckCircle2, User, Sparkles } from 'lucide-react';
import { initialTestimonials, initialComments } from '../data/testimonialsData';
import { UserComment } from '../types';

export const ReviewsAndComments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'comments'>('testimonials');
  const [comments, setComments] = useState<UserComment[]>(() => {
    try {
      const saved = localStorage.getItem('motherfarm_user_comments');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return initialComments;
  });

  const [userName, setUserName] = useState('');
  const [userComment, setUserComment] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Persist comments to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('motherfarm_user_comments', JSON.stringify(comments));
    } catch {
      // ignore storage error
    }
  }, [comments]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userComment.trim()) return;

    setIsSubmitting(true);

    const avatar =
      userAvatar.trim() ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=047857&color=fff&bold=true`;

    const newComment: UserComment = {
      id: `comment-${Date.now()}`,
      userName: userName.trim(),
      userComment: userComment.trim(),
      userAvatar: avatar,
      rating: userRating,
      timestamp: Date.now()
    };

    setTimeout(() => {
      setComments([newComment, ...comments]);
      setUserName('');
      setUserComment('');
      setUserAvatar('');
      setUserRating(5);
      setIsSubmitting(false);
      setSuccessMessage('Thank you! Your comment has been posted.');
      setTimeout(() => setSuccessMessage(''), 4000);
      setActiveTab('comments');
    }, 400);
  };

  const formatDate = (timestamp: number) => {
    const diffDays = Math.floor((Date.now() - timestamp) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 30) return `${diffDays} days ago`;
    return new Date(timestamp).toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
            Verified Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            What Says Our Customers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Real experiences from home cooks, retail partners, and health-conscious families who choose Mother Farm.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl mt-6">
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'testimonials'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Featured Testimonials
            </button>
            <button
              onClick={() => setActiveTab('comments')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center ${
                activeTab === 'comments'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              Recent Comments ({comments.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Featured Testimonials Grid */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {initialTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-4 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-emerald-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center">
                      {t.name}
                      {t.verified && (
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 ml-1" />
                      )}
                    </h4>
                    <p className="text-[11px] text-slate-500">{t.role}</p>
                    <p className="text-[10px] text-slate-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Recent Comments Board */}
        {activeTab === 'comments' && (
          <div className="max-w-4xl mx-auto mb-16 space-y-4">
            {comments.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-start space-x-4"
              >
                <img
                  src={c.userAvatar}
                  alt={c.userName}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-slate-900">{c.userName}</h4>
                    <span className="text-[11px] text-slate-400">
                      {formatDate(c.timestamp)}
                    </span>
                  </div>
                  {c.rating && (
                    <div className="flex items-center space-x-0.5 text-amber-400 mb-2">
                      {[...Array(c.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {c.userComment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Your Comment Form (Faithful to index.html comment section) */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
          <div className="flex items-center space-x-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif">
              Add Your Comment
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-6">
            Have you tasted our pulses or spices? Share your feedback with the Mother Farm community!
          </p>

          {successMessage && (
            <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" />
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Rating
                </label>
                <div className="flex items-center space-x-1.5 py-1.5 px-3 bg-slate-50 rounded-xl border border-slate-200">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setUserRating(star)}
                      className="p-0.5 text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          star <= userRating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-slate-500 ml-2 font-medium">
                    {userRating} / 5 Stars
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Comment *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Share your thoughts about product freshness, aroma, or delivery..."
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Profile Picture URL (optional)
              </label>
              <input
                type="url"
                placeholder="https://example.com/avatar.jpg"
                value={userAvatar}
                onChange={(e) => setUserAvatar(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              <p className="text-[10px] text-slate-400 mt-1">
                Leave blank to automatically use your name initials.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center shadow-sm hover:shadow transition-all disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5 mr-2" />
              {isSubmitting ? 'Posting Comment...' : 'Post Comment'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
