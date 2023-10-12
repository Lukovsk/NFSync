import NFSyncLogo from "../assets/NFSyncLogo.svg";

const Navbar = () => {
  console.log(NFSyncLogo);
  return (
    <nav class="bg-blue-500 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a class="text-white text-2xl font-semibold" href="#">
          <img src={NFSyncLogo} />
        </a>

        <ul class="flex space-x-4">
          <li>
            <a class="text-white" href="#">
              Início
            </a>
          </li>
          <li>
            <a class="text-white" href="#">
              Sobre
            </a>
          </li>
          <li>
            <a class="text-white" href="#">
              Serviços
            </a>
          </li>
          <li>
            <a class="text-white" href="#">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
