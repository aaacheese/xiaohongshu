type FollowupItemProps = {
  avatar: string;
  name: string;
  meta: string;
  text: string;
  thumb: string;
  fresh?: boolean;
};

function FollowupItem({ avatar, name, meta, text, thumb, fresh = false }: FollowupItemProps) {
  return (
    <button className="followup-message pressable" type="button">
      <img className="followup-avatar" src={avatar} alt="" />
      <span className="followup-copy">
        <span className="followup-name">{name}{fresh && <em>新后续</em>}</span>
        <span className="followup-meta">{meta}</span>
        <span className="followup-quote">{text}</span>
      </span>
      <span className="followup-thumb"><img src={thumb} alt="后续内容图片" /></span>
    </button>
  );
}

export default function SquatMessagesPage() {
  return (
    <main className="stage">
      <section className="phone squat-messages-phone" aria-label="蹲一蹲消息详情">
        <div className="detail-status-crop" aria-hidden="true"><img src="/assets/messages/messages-base-mobile.jpg" alt="" /></div>
        <header className="squat-messages-header">
          <a className="detail-back pressable" href="/messages" aria-label="返回消息页"><img src="/assets/messages/back-left.svg" alt="" /></a>
          <h1>蹲一蹲消息</h1>
          <button className="mark-read pressable" type="button">全部已读</button>
        </header>

        <div className="squat-messages-content">
          <section className="message-group waiting-group" aria-labelledby="waiting-title">
            <h2 id="waiting-title">等你更新</h2>
            <button className="waiting-message pressable" type="button">
              <span className="waiting-thumb"><img src="/assets/messages/waiting-thumb.png" alt="待更新的防晒内容" /></span>
              <span className="waiting-copy">
                <strong>86 人正在蹲你的后续</strong>
                <span className="followup-quote">已下单 D，准备连续试两周，到时候回来和 A/B...</span>
                <span className="waiting-actions"><span>去更新</span><i aria-label="关闭"><img src="/assets/squat-sheet/close.svg" alt="" /></i></span>
              </span>
            </button>
          </section>

          <section className="message-group" aria-labelledby="updated-title">
            <h2 id="updated-title">有新后续</h2>
            <div className="followup-stack">
              <FollowupItem
                avatar="/assets/messages/avatar-update.png"
                name="小鱼"
                meta="6小时前更新 · 80人一起蹲"
                text="已经用了第6天，目前控油确实比 B 好..."
                thumb="/assets/messages/new-thumb-1.png"
                fresh
              />
              <FollowupItem
                avatar="/assets/messages/new-avatar-2.png"
                name="阿泽的幸福生活"
                meta="12小时前更新 · 80人一起蹲"
                text="第 41 天，状态比想象中好，但最近开始..."
                thumb="/assets/messages/new-thumb-2.png"
                fresh
              />
            </div>
          </section>

          <section className="message-group" aria-labelledby="active-title">
            <h2 id="active-title">正在蹲</h2>
            <FollowupItem
              avatar="/assets/messages/new-avatar-3.png"
              name="鱼啊鱼啊"
              meta="86 人一起蹲 · 进行第6天"
              text="准备连续一个月 11 点前睡，看看皮肤和..."
              thumb="/assets/messages/new-thumb-3.png"
            />
          </section>

          <section className="message-group" aria-labelledby="done-title">
            <h2 id="done-title">已蹲到</h2>
            <FollowupItem
              avatar="/assets/messages/new-avatar-4.png"
              name="007"
              meta="09-01回复 173 人一起蹲过"
              text="住了半年，收纳基本够用，但开放衣架真..."
              thumb="/assets/messages/new-thumb-4.png"
            />
          </section>
        </div>
      </section>
    </main>
  );
}
