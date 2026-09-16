"use client";

import { useEffect, useRef, useState } from "react";

type IconProps = { size?: number; className?: string; filled?: boolean };

function BackIcon({ size = 26 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 5-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ShareIcon({ size = 24 }: IconProps) {
  return <span className="share-icon" style={{ width: size, height: size }} aria-hidden="true"><img src="/assets/share-new.svg" alt="" width={size} height={size} /></span>;
}

function HeartIcon({ size = 22, filled = false }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} aria-hidden="true"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function StarIcon({ size = 25, filled = false }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} aria-hidden="true"><path d="m12 2.3 3 6.1 6.7 1-4.9 4.7 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.7 6.7-1 3-6.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>;
}

function CommentIcon({ size = 25 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.6 9.6 0 0 1-3.6-.8L3 21l1.6-4.5A8.2 8.2 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 9 8.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="8.5" cy="11.5" r=".9" fill="currentColor" /><circle cx="12" cy="11.5" r=".9" fill="currentColor" /><circle cx="15.5" cy="11.5" r=".9" fill="currentColor" /></svg>;
}

function MicIcon({ size = 21 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="3" width="8" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" /><path d="M5.5 11.5v.7A6.5 6.5 0 0 0 12 18.7a6.5 6.5 0 0 0 6.5-6.5v-.7M12 18.7V22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}

function PictureIcon({ size = 21 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" /><circle cx="8.2" cy="9" r="1.4" fill="currentColor" /><path d="m5.5 18 4.2-4.5 3.2 3 2.6-2.7 3 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PenIcon({ size = 20 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 17-.8 3.8L7 20 19.7 7.3a2 2 0 0 0 0-2.8l-.2-.2a2 2 0 0 0-2.8 0L4 17Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="m15.5 5.5 3 3M3.2 21h17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}

function PinIcon({ size = 18 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 10c0 5.7-8 11-8 11s-8-5.3-8-11a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" /></svg>;
}

function FaceIcon({ size = 15 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /><path d="M8.5 10h.01M15.5 10h.01M8.5 16c1-1.3 2.1-2 3.5-2s2.5.7 3.5 2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" /></svg>;
}

function DislikeIcon({ size = 24 }: IconProps) {
  return <span className="dislike-icon" style={{ width: size, height: size }} aria-hidden="true"><img src="/assets/dislike-new.svg" alt="" width={size} height={size} /></span>;
}

function CommentActions({ count, initial = false }: { count: number; initial?: boolean }) {
  const [liked, setLiked] = useState(initial);
  return (
    <div className="comment-actions">
      <button className={`comment-like ${liked ? "active" : ""}`} onClick={() => setLiked(!liked)} aria-label={liked ? "取消点赞" : "点赞"}>
        <HeartIcon size={19} filled={liked} /><span>{count + (liked && !initial ? 1 : 0)}</span>
      </button>
      <button className="comment-dislike pressable" aria-label="表态"><DislikeIcon /></button>
    </div>
  );
}

type SquatTarget = {
  id: string;
  name: string;
  text: string;
};

function SquatAction({ joined, onJoin, onOpen }: { joined: boolean; onJoin: () => void; onOpen: () => void }) {
  return (
    <button className={`squat-action ${joined ? "joined" : ""}`} onClick={joined ? onOpen : onJoin}>
      {joined ? "86 人一起蹲 ›" : "蹲一下"}
    </button>
  );
}

const followupDiscussions = [
  { name: "嘿嘿", text: "我也是混油皮，D 前一周确实很好用，但第二周开始有一点拔干。", meta: "刚刚 上海", likes: 32, avatar: "/assets/squat-sheet/avatar-1.png" },
  { name: "一起加油吧", text: "我还是更看好 B，如果是敏感肌感觉会稳定一点。", meta: "3分钟前 江苏", likes: 23, avatar: "/assets/squat-sheet/avatar-2.png" },
  { name: "上海见～", text: "我已经用过 D，我反而没有明显拔干，可能和肤质有关。", meta: "5分钟前 浙江", likes: 10, avatar: "/assets/squat-sheet/avatar-3.png" },
];

function FollowupComment({ item }: { item: (typeof followupDiscussions)[number] }) {
  return (
    <article className="sheet-comment">
      <img className="comment-avatar" src={item.avatar} alt={`${item.name}头像`} width={36} height={36} />
      <div className="comment-body">
        <div className="comment-name">{item.name}</div>
        <p>{item.text}</p>
        <div className="comment-meta-row">
          <div className="comment-meta">{item.meta} <button>回复</button></div>
          <CommentActions count={item.likes} />
        </div>
      </div>
    </article>
  );
}

function FollowupSheet({ target, onClose, onCancel }: { target: SquatTarget; onClose: () => void; onCancel: () => void }) {
  const [statusOpen, setStatusOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [newItems, setNewItems] = useState<string[]>([]);
  const [dragY, setDragY] = useState(0);
  const dragStart = useRef<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const submit = () => {
    const value = draft.trim();
    if (!value) return;
    setNewItems((items) => [value, ...items]);
    setDraft("");
  };

  return (
    <div className="sheet-layer" role="presentation">
      <button className="sheet-backdrop" aria-label="关闭蹲后续" onClick={onClose} />
      <section
        className={`followup-sheet ${dragY > 0 ? "dragging" : ""}`}
        style={{ transform: `translateY(${dragY}px)` }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
      >
        <div
          className="sheet-drag-zone"
          onPointerDown={(event) => { dragStart.current = event.clientY; event.currentTarget.setPointerCapture(event.pointerId); }}
          onPointerMove={(event) => { if (dragStart.current !== null) setDragY(Math.max(0, event.clientY - dragStart.current)); }}
          onPointerUp={() => { if (dragY > 105) onClose(); else setDragY(0); dragStart.current = null; }}
          onPointerCancel={() => { setDragY(0); dragStart.current = null; }}
        >
          <span className="drag-handle" />
        </div>

        <header className="sheet-header">
          <h2 id="sheet-title">蹲一蹲</h2>
          <div className="sheet-status-wrap">
            <button className="sheet-status" onClick={() => setStatusOpen((open) => !open)} aria-expanded={statusOpen}>已蹲</button>
            {statusOpen && <button className="cancel-squat" onClick={onCancel}>取消蹲后续</button>}
          </div>
          <button className="sheet-close pressable" onClick={onClose} aria-label="关闭"><img src="/assets/squat-sheet/close.svg" alt="" /></button>
        </header>

        <div className="sheet-scroll">
          <button className="quoted-comment" onClick={onClose}>
            <div className="quoted-top">
              <span>@{target.name}的评论</span>
              <span className="quoted-progress">
                <span>进行第6天</span>
                <span className="participant-avatars">
                  <img src="/assets/squat-sheet/avatar-1.png" alt="" /><img src="/assets/squat-sheet/avatar-2.png" alt="" /><img src="/assets/squat-sheet/avatar-3.png" alt="" />
                </span>
                <span>88人在蹲</span>
              </span>
            </div>
            <p>{target.text}</p>
          </button>

          <section className="latest-followup" aria-labelledby="latest-title">
            <h3 id="latest-title">最新后续</h3>
            <article className="sheet-comment featured">
              <div className="avatar-fallback fish">鱼</div>
              <div className="comment-body">
                <div className="comment-name">小鱼 <span className="update-time">· 2 小时前</span></div>
                <p>D 已经用了第 6 天，目前控油确实比 B 好，但开始有一点拔干，再继续观察几天。</p>
                <div className="comment-meta-row">
                  <div className="comment-meta">09-20 上海 <button>回复</button></div>
                  <CommentActions count={99} />
                </div>
              </div>
            </article>
          </section>

          <div className="sheet-divider" />
          <section className="followup-discussions" aria-labelledby="discussion-title">
            <h3 id="discussion-title">共 68 条后续讨论 <span className="sort-lines" aria-hidden="true" /></h3>
            {newItems.map((text, index) => (
              <FollowupComment key={`${text}-${index}`} item={{ name: "我", text, meta: "刚刚 上海", likes: 0, avatar: "/assets/viewer-avatar.png" }} />
            ))}
            {followupDiscussions.map((item) => <FollowupComment key={item.name} item={item} />)}
          </section>
          <div className="sheet-input-spacer" />
        </div>

        <form className="sheet-composer" onSubmit={(event) => { event.preventDefault(); submit(); }}>
          <img src="/assets/viewer-avatar.png" alt="当前用户头像" width={36} height={36} />
          <div className="sheet-input-wrap">
            <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="说点什么…" aria-label="后续讨论内容" />
            <button type="submit" disabled={!draft.trim()}>发布</button>
          </div>
        </form>
      </section>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="status-bar" aria-label="iOS 状态栏">
      <span className="status-time">10:13</span>
      <div className="status-right">
        <svg className="signal" viewBox="0 0 20 13" aria-hidden="true"><rect x="0" y="8" width="3" height="5" rx="1" /><rect x="5" y="6" width="3" height="7" rx="1" /><rect x="10" y="3" width="3" height="10" rx="1" /><rect x="15" y="0" width="3" height="13" rx="1" /></svg>
        <b>5G</b>
        <span className="battery"><span>55</span></span>
      </div>
    </div>
  );
}

export default function Home() {
  const [following, setFollowing] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [joinedComments, setJoinedComments] = useState<Record<string, boolean>>({});
  const [sheetTarget, setSheetTarget] = useState<SquatTarget | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const savedScrollTop = useRef(0);

  const joinComment = (id: string) => setJoinedComments((items) => ({ ...items, [id]: true }));
  const openSheet = (target: SquatTarget) => {
    savedScrollTop.current = scrollRef.current?.scrollTop ?? 0;
    setSheetTarget(target);
  };
  const closeSheet = () => {
    setSheetTarget(null);
    requestAnimationFrame(() => { if (scrollRef.current) scrollRef.current.scrollTop = savedScrollTop.current; });
  };
  const cancelSquat = () => {
    if (sheetTarget) setJoinedComments((items) => ({ ...items, [sheetTarget.id]: false }));
    closeSheet();
  };

  return (
    <main className="stage">
      <section className="phone" aria-label="小红书笔记详情页演示">
        <div className={`scroll-view ${sheetTarget ? "sheet-open" : ""}`} ref={scrollRef}>
          <header className="sticky-header">
            <StatusBar />
            <nav className="nav-bar" aria-label="笔记导航">
              <button className="icon-button pressable" aria-label="返回"><BackIcon /></button>
              <img className="nav-avatar" src="/assets/author-avatar.png" alt="你霉柿吧头像" width={44} height={44} />
              <span className="author-name">你霉柿吧</span>
              <button className={`follow-button ${following ? "following" : ""}`} onClick={() => setFollowing(!following)}>{following ? "已关注" : "关注"}</button>
              <button className="icon-button share-button pressable" aria-label="分享"><ShareIcon /></button>
            </nav>
          </header>

          <article>
            <div className="hero-wrap">
              <img className="hero-image" src="/assets/sunscreen-main.png" alt="桌面上摆放的多款防晒产品" width={1179} height={886} />
            </div>
            <div className="carousel-dots" aria-label="第 1 张，共 2 张"><span className="dot active" /><span className="dot" /></div>

            <section className="note-copy">
              <h1>从 21 年到现在用过的防晒</h1>
              <p>最近又把手边几款防晒重新用了遍，简单说一下自己的使用感受。</p>
              <p>A 比较轻薄，上脸没什么负担；<br />B 对敏感肌更友好，肤感也比较稳定；<br />C 防水能力最好，更适合户外。</p>
              <p>D 最近讨论度也很高，不过我自己还没有认真测过。每个人肤质和使用场景不一样，下面只是我的个人感受。</p>
              <p>平时通勤我更在意轻薄和不搓泥，户外则会优先选防水力好的。最近天气热，油皮用量足的时候还是要记得少量多次涂。</p>
              <p className="topics"><a href="#防晒霜">#防晒霜</a> <a href="#防晒分享">#防晒分享</a> <a href="#夏日防晒">#夏日防晒</a></p>
              <div className="location"><PinIcon /><span><b>地点</b> 乐城生活广场（合肥绩溪路商业步行街店）</span></div>
              <div className="note-meta"><span>07-26 安徽</span><button className="dislike pressable" aria-label="不喜欢"><FaceIcon />不喜欢</button></div>
            </section>
          </article>

          <section className="comments" aria-labelledby="comment-title">
            <h2 id="comment-title">共 68 条评论 <span className="sort-lines" aria-hidden="true" /></h2>
            <div className="comment-composer">
              <img className="composer-avatar" src="/assets/viewer-avatar.png" alt="当前用户头像" width={36} height={36} />
              <button className="composer-input pressable"><span>有话要说，快来评论</span><MicIcon /><PictureIcon /></button>
            </div>

            <div className="comment-list">
              <article className="comment primary-comment">
                <img className="comment-avatar" src="/assets/author-avatar.png" alt="你霉柿吧头像" width={36} height={36} />
                <div className="comment-body">
                  <div className="comment-name">你霉柿吧 <span className="author-badge">作者</span></div>
                  <p>我最近还买了羽西的防晒，等我用段时间再来反馈</p>
                  <img className="author-sticker" src="/assets/author-sticker.png" alt="可爱表情" width={22} height={22} />
                  <div className="comment-meta-row">
                    <div className="comment-meta">09-01 安徽 <button>回复</button> <SquatAction joined={!!joinedComments.author} onJoin={() => joinComment("author")} onOpen={() => openSheet({ id: "author", name: "你霉柿吧", text: "我最近还买了羽西的防晒，等我用段时间再来反馈" })} /></div>
                    <CommentActions count={10} />
                  </div>
                  <span className="pinned-comment">置顶评论</span>
                  <div className="nested-reply">
                    <img className="reply-avatar" src="/assets/reply-avatar.png" alt="我吃吃吃头像" width={28} height={28} />
                    <div className="nested-content">
                      <div className="comment-name">我吃吃吃</div>
                      <p>蹲蹲</p>
                      <div className="comment-meta-row">
                        <div className="comment-meta">09-01 重庆 <button>回复</button></div>
                        <CommentActions count={2} />
                      </div>
                    </div>
                  </div>
                  <button className="expand-replies"><span />展开 4 条回复</button>
                </div>
              </article>

              <article className="comment">
                <div className="avatar-fallback fish">鱼</div>
                <div className="comment-body">
                  <div className="comment-name">小鱼</div>
                  <p>D 我已经下单了，准备连续试两周，到时候回来和 A/B/C 一起比一下。</p>
                  <div className="comment-meta-row">
                    <div className="comment-meta">09-15 上海 <button>回复</button> <SquatAction joined={!!joinedComments.fish} onJoin={() => joinComment("fish")} onOpen={() => openSheet({ id: "fish", name: "小鱼", text: "D 我已经下单了，准备连续试两周，到时候回来和 A/B/C 一起比一下。" })} /></div>
                    <CommentActions count={12} />
                  </div>
                </div>
              </article>

              <article className="comment image-comment">
                <img className="comment-avatar" src="/assets/orange-avatar.png" alt="甜橙头像" width={36} height={36} />
                <div className="comment-body">
                  <div className="comment-name">甜橙.</div>
                  <p>这个我有话语权！！！去年用到今年，蜜思婷水润哑光轻盈防晒霜空瓶记！</p>
                  <img className="comment-photo" src="/assets/comment-sunscreen.png" alt="评论中展示的蜜思婷防晒产品" width={120} height={160} />
                  <div className="comment-meta-row">
                    <div className="comment-meta">09-08 江苏 <button>回复</button> <SquatAction joined={!!joinedComments.orange} onJoin={() => joinComment("orange")} onOpen={() => openSheet({ id: "orange", name: "甜橙.", text: "这个我有话语权！！！去年用到今年，蜜思婷水润哑光轻盈防晒霜空瓶记！" })} /></div>
                    <CommentActions count={1} />
                  </div>
                </div>
              </article>

              <article className="comment">
                <div className="avatar-fallback cloud">云</div>
                <div className="comment-body">
                  <div className="comment-name">小岛天气晴</div>
                  <p>敏感肌想问一下 B 会不会熏眼睛呀？最近真的挑防晒挑花眼了。</p>
                  <div className="comment-meta-row">
                    <div className="comment-meta">09-12 浙江 <button>回复</button> <SquatAction joined={!!joinedComments.cloud} onJoin={() => joinComment("cloud")} onOpen={() => openSheet({ id: "cloud", name: "小岛天气晴", text: "敏感肌想问一下 B 会不会熏眼睛呀？最近真的挑防晒挑花眼了。" })} /></div>
                    <CommentActions count={5} />
                  </div>
                </div>
              </article>
            </div>
          </section>
          <div className="scroll-spacer" />
        </div>

        <footer className="bottom-bar">
          <button className="bottom-input pressable"><PenIcon /><span>说点什么…</span></button>
          <button className={`bottom-action ${liked ? "active" : ""}`} onClick={() => setLiked(!liked)} aria-label="点赞"><HeartIcon size={27} filled={liked} /><span>{liked ? 487 : 486}</span></button>
          <button className={`bottom-action ${saved ? "active" : ""}`} onClick={() => setSaved(!saved)} aria-label="收藏"><StarIcon size={28} filled={saved} /><span>{saved ? 162 : 161}</span></button>
          <button className="bottom-action" aria-label="评论"><CommentIcon size={28} /><span>68</span></button>
        </footer>
        {sheetTarget && <FollowupSheet target={sheetTarget} onClose={closeSheet} onCancel={cancelSquat} />}
      </section>
    </main>
  );
}
