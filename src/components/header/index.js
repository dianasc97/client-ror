import { Link } from 'react-router-dom';
import "./header.css";

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <img
          id="imageHeaderRuby"
          src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"
          alt="ruby"
        />
        <span id="spanTailwind" className="text-red-900">
          Tailwind Header for API-ROR
        </span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-red-900 mr-4"
          >
            <Link to='/'>Início</Link>
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-red-900 mr-4"
          >
            <Link to='/movies'>Filmes</Link>
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-red-900 mr-4"
          >
            <Link to='/newmovie'>Adicionar filme</Link>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
