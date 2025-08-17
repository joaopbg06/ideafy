import React, { useState, useRef, useEffect } from "react";
import Images from "../assets/images";
import "../styles/feed.css";
import Sidebar from "./componentes/sidebar";
import MobileHeader from "./componentes/mobileHeader";

export default function Feed() {
  const [tema, setTema] = useState("escuro");
  const [postText, setPostText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const textareaRef = useRef(null);
  const [activeNavItem, setActiveNavItem] = useState("home");

  const toggleTema = () => {
    setTema((prev) => (prev === "escuro" ? "claro" : "escuro"));
  };

  const handleNavigation = (item) => {
    setActiveNavItem(item);
    // Adicione sua lógica de navegação aqui
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [postText]);

  // Handle file selection
  const handleFileSelect = (type) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = type === 'video' ? 'video/*' : 'image/*';
    
    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      const newFiles = files.map(file => ({
        file,
        type: file.type.startsWith('video/') ? 'video' : 'image',
        url: URL.createObjectURL(file),
        id: Date.now() + Math.random()
      }));
      setSelectedFiles(prev => [...prev, ...newFiles]);
    };
    
    input.click();
  };

  // Remove file preview
  const removeFile = (id) => {
    setSelectedFiles(prev => {
      const fileToRemove = prev.find(f => f.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.url);
      }
      return prev.filter(f => f.id !== id);
    });
  };

  // Clear post
  const clearPost = () => {
    setPostText("");
    selectedFiles.forEach(file => URL.revokeObjectURL(file.url));
    setSelectedFiles([]);
  };

  // Dados mock para os posts
  const posts = [
    {
      id: 1,
      author: {
        name: "Lucas Alves",
        avatar: Images.PhotoCard || "/default-avatar.jpg",
        time: "1h",
        isOnline: true
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      media: [
        {
          type: "image",
          url: Images.DeskCard || "/default-post.jpg",
          alt: "Post image 1"
        },
        {
          type: "image", 
          url: Images.Banner3,
          alt: "Post image 2"
        }
      ],
      status: "Vendido",
      likes: 12,
      comments: 3,
      isLiked: false
    },
    {
      id: 2,
      author: {
        name: "Samanta Neves",
        avatar: Images.Banner1,
        time: "15m",
        isOnline: false
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      media: [
        {
          type: "image",
          url: Images.Banner2,
          alt: "Claude post image"
        }
      ],
      status: "Em Desenvolvimento",
      likes: 8,
      comments: 5,
      isLiked: true
    }
  ];

  const HeartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );

  const VideoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/>
    </svg>
  );

  const PhotoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="9" cy="9" r="2"/>
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
  );

  const CommentIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15,18 9,12 15,6"/>
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  );

// Componente para navegação de mídia com suporte ao swipe
const MediaGallery = ({ media, postId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };
  
  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };
  
  // Funções para controle do swipe
  const minSwipeDistance = 50;
  
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && media.length > 1) {
      nextMedia();
    }
    if (isRightSwipe && media.length > 1) {
      prevMedia();
    }
  };
  
  const currentMedia = media[currentIndex];
  
  return (
    <div 
      className="postImageContainer"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mediaWrapper" onClick={() => setLightboxImage({media, currentIndex})}>
        {currentMedia.type === 'image' ? (
          <img 
            src={currentMedia.url} 
            alt={currentMedia.alt} 
            className="postImage"
            draggable={false}
          />
        ) : (
          <video 
            src={currentMedia.url} 
            className="postVideo" 
            controls 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          />
        )}
      </div>
      
      {media.length > 1 && (
        <>
          <button className="mediaPrev" onClick={prevMedia}>
            <ChevronLeftIcon />
          </button>
          <button className="mediaNext" onClick={nextMedia}>
            <ChevronRightIcon />
          </button>
          <div className="mediaIndicators">
            {media.map((_, index) => (
              <div 
                key={index} 
                className={`mediaIndicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
      
      <div className="postStatus">
        <span className={`statusBadge ${posts.find(p => p.id === postId)?.status === "Vendido" ? "sold" : "development"}`}>
          {posts.find(p => p.id === postId)?.status}
        </span>
      </div>
    </div>
  );
};

  // Componente Lightbox 
  const Lightbox = () => {
  // Sempre chame os hooks antes de qualquer return condicional
  const [currentIndex, setCurrentIndex] = useState(lightboxImage?.currentIndex || 0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Agora você pode fazer o return condicional
  if (!lightboxImage) return null;
  
  const { media } = lightboxImage;
  
  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };
  
  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };
  
  // Funções para controle do swipe
  const minSwipeDistance = 50;
  
  const handleTouchStart = (e) => {
    setTouchEnd(null); // reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && media.length > 1) {
      nextMedia();
    }
    if (isRightSwipe && media.length > 1) {
      prevMedia();
    }
  };
  
  const currentMedia = media[currentIndex];
  
  return (
    <div className="lightbox" onClick={() => setLightboxImage(null)}>
      <div 
        className="lightboxContent" 
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="lightboxClose" onClick={() => setLightboxImage(null)}>
          <CloseIcon />
        </button>
        
        {currentMedia.type === 'image' ? (
          <img 
            src={currentMedia.url} 
            alt={currentMedia.alt} 
            className="lightboxImage"
            draggable={false}
          />
        ) : (
          <video 
            src={currentMedia.url} 
            className="lightboxVideo" 
            controls 
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          />
        )}
        
        {media.length > 1 && (
          <>
            <button className="lightboxPrev" onClick={prevMedia}>
              <ChevronLeftIcon />
            </button>
            <button className="lightboxNext" onClick={nextMedia}>
              <ChevronRightIcon />
            </button>
            <div className="lightboxIndicators">
              {media.map((_, index) => (
                <div 
                  key={index} 
                  className={`lightboxIndicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

  return (
    <div id="Feed" className={tema === "escuro" ? "escuro-fundo-cinza" : "claro-fundo-bege"}>
      {/* Header Mobile */}
      <MobileHeader tema={tema} toggleTema={toggleTema} title="Ideafy" />

      {/* Sidebar */}
      <Sidebar 
        tema={tema}
        toggleTema={toggleTema}
        activeItem={activeNavItem}
        onNavigate={handleNavigation}
      />

      {/* Sidebar Content - Para preencher o espaço vazio */}
      <div className="sidebarContent">
        <div className="sidebarContentInner">
          <h3>Trending Topics</h3>
          <div className="trendingItem">
            <span className="trendingTag">#ReactJS</span>
            <span className="trendingCount">1.2k posts</span>
          </div>
          <div className="trendingItem">
            <span className="trendingTag">#Design</span>
            <span className="trendingCount">856 posts</span>
          </div>
          <div className="trendingItem">
            <span className="trendingTag">#Innovation</span>
            <span className="trendingCount">432 posts</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="mainContent">
        {/* Área de criar post */}
        <div className="createPost">
          <div className="createPostHeader">
            <div className="userAvatar">
              <img src={Images.PhotoCard || "/default-avatar.jpg"} alt="Seu avatar" />
              <div className="onlineStatus"></div>
            </div>
            <div className="userInfo">
              <h3 className="userName">Lucas Alves</h3>
              <button className="postButton">Post</button>
            </div>
          </div>

          <div className="createPostContent">
            <textarea
              ref={textareaRef}
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Compartilhe sua ideia..."
              className="postTextarea"
              rows="1"
            />
            
            {/* Preview dos arquivos selecionados */}
            {selectedFiles.length > 0 && (
              <div className="mediaPreview">
                {selectedFiles.map((file) => (
                  <div key={file.id} className="previewItem">
                    {file.type === 'image' ? (
                      <img src={file.url} alt="Preview" className="previewImage" />
                    ) : (
                      <video src={file.url} className="previewVideo" controls />
                    )}
                    <button 
                      className="removePreview" 
                      onClick={() => removeFile(file.id)}
                      title="Remover arquivo"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="postActions">
              <button 
                className="mediaButton video"
                onClick={() => handleFileSelect('video')}
              >
                <VideoIcon />
                Vídeo
              </button>
              <button 
                className="mediaButton photo"
                onClick={() => handleFileSelect('photo')}
              >
                <PhotoIcon />
                Foto
              </button>
              {(postText || selectedFiles.length > 0) && (
                <button className="clearButton" onClick={clearPost}>
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Feed de posts */}
        <div className="feedContent">
          {posts.map((post) => (
            <article key={post.id} className="postCard">
              <div className="postHeader">
                <div className="postUserAvatar">
                  <img src={post.author.avatar} alt={post.author.name} />
                  {post.author.isOnline && <div className="onlineStatus"></div>}
                </div>
                <div className="postUserInfo">
                  <h4 className="postUserName">{post.author.name}</h4>
                  <span className="postTime">{post.author.time}</span>
                </div>
              </div>

              <p className="postText">{post.content}</p>

              <MediaGallery media={post.media} postId={post.id} />

              <div className="postActions">
                <button className="actionBtn like">
                  <HeartIcon />
                </button>
                <button className="actionBtn comment">
                  <CommentIcon />
                </button>
                <button className="actionBtn primary">
                  {post.status === "Vendido" ? "Comprar Agora" : "Contribuir"}
                </button>
                {post.status !== "Vendido" && (
                  <button className="actionBtn secondary">Contribuir</button>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Right Sidebar - Para preencher o lado direito */}
      <div className="rightSidebar">
        <div className="rightSidebarContent">
          <h3>Sugestões</h3>
          <div className="suggestionItem">
            <div className="suggestionAvatar">
              <img src={Images.DeskCard} alt="Maria Silva" />
            </div>
            <div className="suggestionInfo">
              <h4>Maria Silva</h4>
              <span>Designer UX/UI</span>
            </div>
            <button className="followBtn">Seguir</button>
          </div>
          <div className="suggestionItem">
            <div className="suggestionAvatar">
              <img src={Images.MobiCard} alt="João Santos" />
            </div>
            <div className="suggestionInfo">
              <h4>João Santos</h4>
              <span>Desenvolvedor</span>
            </div>
            <button className="followBtn">Seguir</button>
          </div>
        </div>
      </div>

      <Lightbox />
    </div>
  );
}