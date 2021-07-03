import "./body.css";

function Body() {
  return (
    <div class='class="container mx-auto"'>
      <div class="grid grid-cols-2" id="grid-columns">
        <div class="py-4">
          <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
            <div>
              <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                <span class="block text-lg text-gray-800 font-bold tracking-wide">
                  Ruby on Rails
                </span>
                <span class="block text-gray-600 text-sm">
                  Ruby on Rails é um framework livre que promete aumentar
                  velocidade e facilidade no desenvolvimento de sites orientados
                  a banco de dados, uma vez que é possível criar aplicações com
                  base em estruturas pré-definidas.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="py-4">
          <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
            <div>
              <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                <span class="block text-lg text-gray-800 font-bold tracking-wide">
                  Filmes
                </span>
                <span class="block text-gray-600 text-sm">
                  É um produto audiovisual finalizado, com uma certa duração,
                  para ser exibido no cinema, na televisão ou em algum outro
                  veículo. Um filme é formado por uma série finita de imagens
                  fixas, registradas sobre um suporte físico e que, projetadas a
                  uma velocidade maior que a capacidade resolutiva da visão
                  humana, dão ao espectador a sensação de movimento.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
