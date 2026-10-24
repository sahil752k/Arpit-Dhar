import React, { useState, useEffect } from 'react';

interface CommentItem {
  id: string;
  userName: string;
  userComment: string;
  avatar: string;
  timestamp: string;
}

const defaultComments: CommentItem[] = [
  {
    id: '1',
    userName: 'Kavita Joshi',
    userComment: 'Received my box of spices and lentils today! Packaging was airtight and completely eco-conscious. The Red Chilli powder has such a rich natural color.',
    avatar: 'https://ui-avatars.com/api/?name=Kavita+Joshi&background=45af2f&color=fff',
    timestamp: '2 days ago'
  },
  {
    id: '2',
    userName: 'Vikram Gaikwad',
    userComment: 'Akkha Udid from Motherfarm makes the best Dal Makhani. The freshness is noticeable from the very first whistle.',
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Gaikwad&background=222831&color=fff',
    timestamp: '4 days ago'
  },
  {
    id: '3',
    userName: 'Meera Sengupta',
    userComment: 'Ordered the combo pack of seeds (Chia, Pumpkin & Quinoa). Outstanding quality and very reasonable prices.',
    avatar: 'https://ui-avatars.com/api/?name=Meera+Sengupta&background=ffbe33&color=000',
    timestamp: '1 week ago'
  }
];

export const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>(() => {
    try {
      const saved = localStorage.getItem('motherfarm_comments');
      if (saved) return JSON.parse(saved);
    } catch {}
    return defaultComments;
  });

  const [userName, setUserName] = useState('');
  const [userComment, setUserComment] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('motherfarm_comments', JSON.stringify(comments));
    } catch {}
  }, [comments]);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userComment.trim()) return;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      userName: userName.trim(),
      userComment: userComment.trim(),
      avatar: userAvatar.trim() || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=45af2f&color=fff`,
      timestamp: 'Just now'
    };

    setComments([newComment, ...comments]);
    setUserName('');
    setUserComment('');
    setUserAvatar('');
  };

  return (
    <div className="container my-5">
      <main className="app-main">
        {/* Comments List Section */}
        <section className="comments-section">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2 style={{ fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>
              What Says Our Customers
            </h2>
          </div>
          <div className="comments-list" id="commentsList">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-card">
                <img
                  src={comment.avatar}
                  alt={comment.userName}
                  className="comment-avatar"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.userName)}&background=45af2f&color=fff`;
                  }}
                />
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-author">{comment.userName}</span>
                    <span className="comment-date">{comment.timestamp}</span>
                  </div>
                  <p className="comment-text">{comment.userComment}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add Comment Form Section */}
        <section className="add-comment">
          <h2><i className="fas fa-edit"></i> Add Your Comment</h2>
          <form id="commentForm" className="comment-form" onSubmit={handlePostComment}>
            <div className="form-group">
              <label htmlFor="userName"><i className="fas fa-user"></i> Your Name</label>
              <input
                type="text"
                id="userName"
                placeholder="Name Surname"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="userComment"><i className="fas fa-comment"></i> Your Comment</label>
              <textarea
                id="userComment"
                rows={4}
                placeholder="Share your thoughts..."
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="userAvatar"><i className="fas fa-image"></i> Profile Picture URL (optional)</label>
              <input
                type="url"
                id="userAvatar"
                placeholder="https://example.com/your-picture.jpg"
                value={userAvatar}
                onChange={(e) => setUserAvatar(e.target.value)}
              />
              <small>Leave blank for default avatar</small>
            </div>
            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Post Comment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};
