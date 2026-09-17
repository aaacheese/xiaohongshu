import Link from "next/link";

export default function MessagesPage() {
  return (
    <main className="stage">
      <section className="phone messages-phone" aria-label="小红书消息页">
        <img className="messages-base" src="/assets/messages/messages-figma-3x.png" alt="" width={774} height={1677} />
        <Link className="squat-conversation pressable" href="/messages/squat" aria-label="打开蹲一蹲消息" />
      </section>
    </main>
  );
}
