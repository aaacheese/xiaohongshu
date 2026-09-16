export default function MessagesPage() {
  return (
    <main className="stage">
      <section className="phone messages-phone" aria-label="小红书消息页">
        <img className="messages-base" src="/assets/messages/messages-base-mobile.jpg" alt="" width={390} height={844} />
        <a className="squat-conversation pressable" href="/messages/squat" aria-label="打开蹲一蹲消息">
          <img src="/assets/messages/squat-message.svg" alt="" width={58} height={58} />
          <span className="squat-conversation-copy">
            <strong>蹲一蹲消息</strong>
            <span>您蹲的后续已更新，请查收！</span>
          </span>
          <time>16:55</time>
          <i aria-label="未读" />
        </a>
      </section>
    </main>
  );
}
