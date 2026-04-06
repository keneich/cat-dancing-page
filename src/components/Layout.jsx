import '../styles/layout.css';

export default function Layout({ children }) {
  return (
    <main className="layout">
      <h1 className="title">🐱 댄싱 캣</h1>
      <p className="subtitle">고양이가 신나게 춤을 춥니다!</p>
      <div className="content">{children}</div>
    </main>
  );
}
