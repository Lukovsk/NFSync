const Card = () => {
  return (
    <div>
      <div className="bg-zinc-200 flex flex-wrap bg-opacity-40 rounded-[15px] p-4 m-2 border font-['Roboto'] border-neutral-500">
        <div className="w-1/2 justify-start flex-col flex">
          <h2 className="text-[15px] font-light">Nome da empresa</h2>
          <p className="text-[13px] font-thin">xxxx.xxx-xxxx/xx</p>
        </div>
        <div className="w-1/2 justify-end flex font-semibold text-base">
          04/10/2023
        </div>
        <div className="w-1/2 justify-start flex font-semibold text-base mt-2">
          R$127,00
        </div>
        <div className="w-1/2 justify-end flex">
          <button className="rounded-[50%] w-8 h-8 pb-0.5 flex justify-center items-center font-bold text-[1.5rem] bg-blue-400">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
