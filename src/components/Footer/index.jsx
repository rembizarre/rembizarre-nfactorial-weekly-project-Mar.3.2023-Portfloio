import './index.scss';

export default function Footer() {
  return (
    <footer className='flex'>
        <div className='flex content'>
          <div className='content__made'>Made with 🖤 at nFactorial in 2022.</div>
          <div className='content__credits'>Photos from<a href="https://unsplash.com/@surface" className='content__link'> Unsplash.com</a>, icons from <a href="https://icons8.com" className='content__link'>Icons8</a>.</div>
        </div>
    </footer>
  );
}

