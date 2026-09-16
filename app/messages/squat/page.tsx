type MessageItemProps = {
  avatar: string;
  title?: string;
  meta?: string;
  text: string;
  large?: boolean;
  thumb?: string;
  quote?: boolean;
};

function MessageItem({ avatar, title = "小鱼的评论", meta, text, large = true, thumb, quote = false }: MessageItemProps) {
  return (
    <button className={`squat-message-item pressable ${large ? "large" : "compact"}`} type="button">
      <img className="squat-message-avatar" src={avatar} alt="" />
      <span className="squat-message-copy">
        <span className="squat-message-top"><strong>{title}</strong>{meta && <small>{meta}</small>}</span>
        <span className={quote ? "message-quote" : "message-preview"}>{text}</span>
      </span>
      {thumb && <span className="message-thumb"><img src={thumb} alt="防晒产品后续图片" /></span>}
    </button>
  );
}

export default function SquatMessagesPage() {
  return (
    <main className="stage">
      <section className="phone squat-messages-phone" aria-label="蹲一蹲消息详情">
        <header className="squat-messages-header">
          <a className="detail-back pressable" href="/messages" aria-label="返回消息页"><img src="/assets/messages/back-left.svg" alt="" /></a>
          <h1>蹲一蹲消息</h1>
          <button className="mark-read pressable" type="button">全部已读</button>
        </header>

        <div className="squat-messages-content">
          <section className="message-group" aria-labelledby="waiting-title">
            <h2 id="waiting-title">等你更新</h2>
            <MessageItem
              avatar="/assets/messages/avatar-fish.png"
              meta="86 人正在等你回复 · 进行第6天"
              text="已经用了第6天，目前控油确实比 B 好，但开..."
            />
          </section>

          <section className="message-group" aria-labelledby="updated-title">
            <h2 id="updated-title">已更新</h2>
            <div className="message-stack">
              <MessageItem
                avatar="/assets/messages/avatar-update.png"
                text="已经用了第6天，目前控油确实比 B ..."
                meta="86 人正在等你回复 · 进行第6天"
                thumb="/assets/messages/update-thumb.png"
                quote
              />
              <MessageItem
                avatar="/assets/messages/avatar-update-2.png"
                meta="刚刚"
                text="已经用了第6天，目前控油确实比 B 好，但开..."
              />
            </div>
          </section>

          <section className="message-group" aria-labelledby="active-title">
            <h2 id="active-title">正在蹲</h2>
            <MessageItem
              avatar="/assets/messages/avatar-fish.png"
              meta="86 人一起蹲 · 进行第6天"
              text="已经用了第6天，目前控油确实比 B 好，但开..."
            />
          </section>

          <section className="message-group" aria-labelledby="done-title">
            <h2 id="done-title">已蹲到</h2>
            <div className="message-stack">
              <MessageItem avatar="/assets/messages/avatar-done-1.png" meta="6-21" text="已经用了第6天，目前控油确实比 B 好，但开..." />
              <MessageItem avatar="/assets/messages/avatar-done-2.png" meta="8-21" text="已经用了第6天，目前控油确实比 B 好，但开..." />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
