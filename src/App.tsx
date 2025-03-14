import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MockTwitter</h1>
        <p>A React + TypeScript Twitter clone</p>
        
        <div className="features-intro">
          <h2>核心功能</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📝 发布推文</h3>
              <p>支持文字、图片和视频内容发布，实时分享想法</p>
            </div>
            <div className="feature-card">
              <h3>💬 互动交流</h3>
              <p>点赞、转发、评论功能，与其他用户深度互动</p>
            </div>
            <div className="feature-card">
              <h3>👥 关注系统</h3>
              <p>关注感兴趣的用户，构建个人社交网络</p>
            </div>
            <div className="feature-card">
              <h3>🔍 实时搜索</h3>
              <p>快速搜索用户、话题和热门内容</p>
            </div>
            <div className="feature-card">
              <h3>🔥 热门话题</h3>
              <p>发现trending话题，参与热门讨论</p>
            </div>
            <div className="feature-card">
              <h3>📱 响应式设计</h3>
              <p>完美适配手机、平板和桌面设备</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;