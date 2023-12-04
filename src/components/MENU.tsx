import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MENU: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "SHOP" to the project
  }, []);

  return (
    <div className="relative w-[1440px] h-[796px] overflow-y-auto max-w-full max-h-full overflow-auto text-center text-xl text-gray-300 font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-black shadow-[4px_0px_10px_rgba(0,_0,_0,_0.25)] w-[380px] h-[796px] overflow-y-auto">
        <div className="absolute top-[0px] left-[calc(50%_-_190px)] bg-black [backdrop-filter:blur(50px)] w-[380px] h-[84px] flex flex-row items-center justify-between py-[15px] px-0 box-border text-[32px] font-belleza">
          <div className="w-[324px] flex flex-row items-center justify-between py-1 px-0 box-border">
            <div className="relative w-[198px] h-8">
              <div className="absolute top-[0%] left-[0%] leading-[32px]">
                Street Genetics
              </div>
            </div>
            <img
              className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
              alt=""
              src="/drop-down-arrow.svg"
            />
          </div>
        </div>
        <div className="absolute bottom-[0px] left-[0px] bg-black overflow-hidden flex flex-col items-center justify-center py-6 px-7 gap-[12px] text-darkcyan border-t-[1px] border-solid border-gray-500">
          <div className="rounded-37xl bg-lightgray w-[324px] h-14 overflow-hidden shrink-0 flex flex-row items-center justify-between py-1.5 px-3 box-border">
            <div className="relative font-medium">LOG IN</div>
          </div>
          <div className="rounded-37xl bg-black box-border w-[324px] h-14 overflow-hidden shrink-0 flex flex-row items-center justify-between py-1.5 px-3 text-lightgray border-[1px] border-solid border-lightgray">
            <div className="relative font-medium">SIGN UP</div>
          </div>
        </div>
        <div className="absolute top-[108px] left-[28px] w-[324px] flex flex-col items-start justify-start gap-[24px] text-left text-darkgray-100">
          <div
            className="flex flex-col items-start justify-start cursor-pointer"
            onClick={onFrameContainer1Click}
          >
            <div className="relative">HOME</div>
          </div>
          <div
            className="flex flex-col items-start justify-start cursor-pointer"
            onClick={onFrameContainer2Click}
          >
            <div className="relative">SHOP</div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative">ACCOUNT</div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative">ORDERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MENU;
