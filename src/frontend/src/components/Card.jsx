const Card = () => {
  return (
    <div>
      <div className="bg-zinc-200 bg-opacity-40 rounded-[15px] border border-neutral-500">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500">
          <h2>Nome empresa</h2>
          <p>xxxx.xxx-xxxx/xx</p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-500">
          <h2>04/10/2023</h2>
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-500">
          <h2>R$127,00</h2>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-500">
          an
        </div>
      </div>

      <div className="w-[345px] h-[94px] relative">
        <div className="w-[345px] h-[94px] left-0 top-0 absolute opacity-40 bg-zinc-200 rounded-[15px] border border-black" />
        <div className="w-[26px] h-[26px] left-[304px] top-[62px] absolute bg-blue-400 bg-opacity-60 rounded-full border-2 border-blue-400 border-opacity-20" />
        <div className="w-[121px] left-[18px] top-[31px] absolute text-black text-[13px] font-thin font-['Roboto']">
          xxxx.xxx-xxxx/xx
        </div>
        <div className="left-[17px] top-[66px] absolute text-center text-black text-base font-semibold font-['Roboto']">
          R$127,00
        </div>
        <div className="left-[238px] top-[16px] absolute text-center text-black text-base font-semibold font-['Roboto']">
          04/10/2023
        </div>
        <div className="w-[155px] h-[33px] left-[17px] top-[15px] absolute text-black text-[15px] font-light font-['Roboto']">
          Americanas LTDa
        </div>
      </div>
    </div>
  );
};

export default Card;
