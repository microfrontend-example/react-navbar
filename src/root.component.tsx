import { navigateToUrl } from 'single-spa';

export default function Root(props) {
  return (
    <nav
      style={{
        height: '80px',
        background: 'var(--dark-grayish-blue)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ul
        style={{
          padding: 0,
          margin: 0,
          listStyle: 'none',
          display: 'flex',
          gap: '2rem',
          fontWeight: 'bold',
          color: 'var(--white)',
        }}
      >
        <li>
          <a
            href="/"
            style={{ cursor: 'pointer', color: 'var(--white)' }}
            onClick={(event) => {
              event.preventDefault();
              navigateToUrl('/');
            }}
          >
            React list
          </a>
        </li>
        <li>
          <a
            href="/form"
            style={{ cursor: 'pointer', color: 'var(--white)' }}
            onClick={(event) => {
              event.preventDefault();
              navigateToUrl('/form');
            }}
          >
            Angular form
          </a>
        </li>
      </ul>
    </nav>
  );
}
