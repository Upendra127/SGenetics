import { FunctionComponent, useState, useCallback } from "react";
import MENU from "../components/MENU";
import PortalPopup from "../components/PortalPopup";
import CART from "../components/CART";

const HOME: FunctionComponent = () => {
  const [isMENUOpen, setMENUOpen] = useState(false);
  const [isCARTOpen, setCARTOpen] = useState(false);

  const onPrintedTShirtTextClick = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText1Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText2Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText3Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText4Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText5Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText6Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText7Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText8Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText9Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText10Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText11Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText12Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const onPrintedTShirtText13Click = useCallback(() => {
    // Please sync "PRODUCT" to the project
  }, []);

  const openMENU = useCallback(() => {
    setMENUOpen(true);
  }, []);

  const closeMENU = useCallback(() => {
    setMENUOpen(false);
  }, []);

  const openCART = useCallback(() => {
    setCARTOpen(true);
  }, []);

  const closeCART = useCallback(() => {
    setCARTOpen(false);
  }, []);

  return (
    <>
      <div className="relative w-full h-[796px] overflow-y-auto bg-[url('/public/home@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-xl text-darkgray-100 font-poppins">
        <div className="absolute top-[1681px] left-[249px] w-[937px] h-[113px]">
          <div className="absolute top-[0px] left-[0px] w-[937px] h-[113px]" />
        </div>
        <div className="absolute top-[84px] left-[0px] w-[1440px] flex flex-col items-center justify-start gap-[100px]">
          <div className="relative w-[1440px] h-[709px] overflow-hidden shrink-0 text-lightgray">
            <img
              className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[709px] object-cover"
              alt=""
              src="/pedestalsurroundedbywhitecurtainsdarkwallsansspotlights@2x.png"
            />
            <div className="absolute top-[28px] left-[434px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.63),_rgba(129,_129,_129,_0)_92.08%)] [filter:blur(4px)] w-[547px] h-[547px]" />
            <div className="absolute top-[0px] left-[calc(50%_-_720px)] [background:linear-gradient(106.68deg,_#000_6.01%,_#fff)] w-[1440px] h-[709px] mix-blend-soft-light" />
            <div className="absolute top-[0px] left-[calc(50%_+_720px)] [background:linear-gradient(106.68deg,_#000_6.01%,_#fff)] w-[1440px] h-[709px] [transform:_rotate(180deg)] [transform-origin:0_0] mix-blend-soft-light" />
            <div className="absolute top-[0px] left-[calc(50%_+_720px)] [background:linear-gradient(177.64deg,_#000_6.01%,_#fff)] w-[1440px] h-[709px] [transform:_rotate(180deg)] [transform-origin:0_0] mix-blend-soft-light" />
            <div className="absolute top-[598px] left-[calc(50%_-_132px)] rounded-37xl [backdrop-filter:blur(50px)] box-border w-[264px] h-14 overflow-hidden flex flex-row items-center justify-between py-1.5 px-3 border-[1px] border-solid border-white">
              <div className="relative font-medium">SHOP NOW</div>
            </div>
            <div className="absolute top-[543px] left-[630px] rounded-[50%] bg-black [filter:blur(10px)] w-[183px] h-3.5" />
            <img
              className="absolute top-[calc(50%_-_146.5px)] left-[calc(50%_-_183px)] w-[367px] h-[342px] object-cover"
              alt=""
              src="/merged2unscreen-1@2x.png"
            />
          </div>
          <div className="relative w-[1039px] h-[222px] text-45xl text-darkslategray font-belleza">
            <div className="absolute w-full top-[0%] left-[0%] flex items-center">
              <span className="[line-break:anywhere] w-full">
                <span>{`LOREM `}</span>
                <span className="text-gray-200">IPSUM</span>
                <span>{` SOMETHING ABOUT THE CAROUSEL `}</span>
                <span className="text-gray-200">BELOW</span>
                <span>{` `}</span>OR
                <span> ANYTHING ELSE</span>
              </span>
            </div>
          </div>
          <img
            className="relative w-[1440px] h-[600px] object-cover"
            alt=""
            src="/group-21@2x.png"
          />
          <img
            className="relative w-[706px] h-[136px] object-cover"
            alt=""
            src="/component-698@2x.png"
          />
          <div className="relative w-[1440px] h-[904px] text-left text-61xl text-gray-100 font-baskervville">
            <div className="absolute bottom-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[764px] overflow-y-auto bg-[url('/public/frame-39@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute top-[-62px] left-[calc(50%_-_524px)] w-[1053px] h-[826px] hidden"
                alt=""
                src="/group-17.svg"
              />
              <div className="absolute top-[939px] left-[calc(50%_-_564px)] inline-block w-[422px]">
                <p className="m-0">Something</p>
                <p className="m-0">about Prints</p>
              </div>
              <div className="absolute top-[1741px] left-[calc(50%_+_158px)] text-right inline-block w-[422px]">
                Fabric and Finish
              </div>
              <div className="absolute top-[1268px] left-[calc(50%_-_564px)] text-6xl font-light font-work-sans inline-block w-[347px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.
              </div>
              <div className="absolute top-[2070px] left-[calc(50%_+_164px)] text-6xl font-light font-work-sans text-right inline-block w-[416px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </div>
              <div className="absolute top-[915px] left-[1074px] rounded-3xl bg-gainsboro [backdrop-filter:blur(20px)] w-[226px] h-[658px] hidden" />
              <div className="absolute top-[1741px] left-[156px] rounded-3xl bg-gainsboro [backdrop-filter:blur(20px)] w-[212px] h-[619px] hidden" />
              <img
                className="absolute top-[1371px] left-[1098px] rounded-xl w-[178px] h-[178px] object-cover"
                alt=""
                src="/rectangle-18986@2x.png"
              />
              <img
                className="absolute top-[1155px] left-[1098px] rounded-xl w-[178px] h-[178px] object-cover"
                alt=""
                src="/rectangle-18986@2x.png"
              />
              <img
                className="absolute top-[939px] left-[1098px] rounded-xl w-[178px] h-[178px] object-cover"
                alt=""
                src="/rectangle-18986@2x.png"
              />
              <div className="absolute top-[1787px] left-[178px] w-[168px] h-[573px]">
                <img
                  className="absolute top-[406px] left-[0px] rounded-xl w-[168px] h-[167px] object-cover"
                  alt=""
                  src="/rectangle-18988@2x.png"
                />
                <img
                  className="absolute top-[203px] left-[0px] rounded-xl w-[168px] h-[167px] object-cover"
                  alt=""
                  src="/rectangle-18988@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[168px] h-[167px] object-cover"
                  alt=""
                  src="/rectangle-18988@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_204px)] w-[403px] h-[231px]">
              <img
                className="absolute top-[27px] left-[calc(50%_-_158.5px)] w-[313px] h-[189px] object-cover"
                alt=""
                src="/mannequin-2@2x.png"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[403px] h-[231px] object-cover"
                alt=""
                src="/nenono-1@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[60px] text-left text-45xl font-belleza">
            <div className="relative w-[1128px] h-[74px] overflow-hidden shrink-0">
              <div className="absolute w-[66.61%] top-[0%] left-[0%] flex items-center">
                T-SHIRTS FOR
              </div>
              <div className="absolute top-[0px] left-[417px] w-[93px] h-[74px] overflow-hidden text-peru">
                <div className="absolute top-[0px] left-[0px] uppercase">
                  ME
                </div>
              </div>
            </div>
            <div className="relative w-[1440px] h-[520px] overflow-x-auto shrink-0 text-center text-5xl text-darkgray-200 font-poppins">
              <div className="absolute top-[calc(50%_-_260px)] left-[-100px] flex flex-row items-start justify-start gap-[24px]">
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_199px)] left-[calc(50%_-_80px)] rounded-31xl w-[310.09px] h-[325.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-12@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtTextClick}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_199px)] left-[calc(50%_-_156px)] rounded-31xl w-[320.09px] h-[325.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-6@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText1Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_199px)] left-[calc(50%_-_156px)] rounded-31xl w-[320.09px] h-[325.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-61@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText2Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_199px)] left-[calc(50%_-_156px)] rounded-31xl w-[320.09px] h-[325.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-62@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText3Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_+_1381px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText4Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_155px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText5Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_155px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText6Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_155px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText7Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_155px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText8Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_155px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText9Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_155px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText10Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_155px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText11Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_155px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText12Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
                <div className="relative w-[360px] h-[520px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_180px)] rounded-31xl [background:linear-gradient(181.25deg,_rgba(0,_0,_0,_0.1),_rgba(255,_255,_255,_0.1)_22.81%,_rgba(0,_0,_0,_0.1))] w-[360px] h-[520px]" />
                  <img
                    className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_155px)] rounded-31xl w-[310.09px] h-[315.82px] object-cover"
                    alt=""
                    src="/basic-women-oversized-tshirt-121@2x.png"
                  />
                  <div className="absolute top-[408px] left-[25px] flex flex-col items-start justify-center gap-[8px]">
                    <div
                      className="relative cursor-pointer"
                      onClick={onPrintedTShirtText13Click}
                    >
                      Printed T-Shirt
                    </div>
                    <b className="relative text-xl text-left">₹799</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shadow-[0px_0px_10px_rgba(0,_0,_0,_0.3)] w-[338px] h-[30px] text-21xl text-darkgray-300 font-abhaya-libre">
            <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_124px)] leading-[30px]">
              Street Genetics
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="relative w-[1440px] h-32 overflow-hidden shrink-0">
              <img
                className="absolute h-[28.91%] w-[3.13%] top-[35.16%] right-[17.64%] bottom-[35.94%] left-[79.24%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/twitter.svg"
              />
              <img
                className="absolute h-[28.91%] w-[2.57%] top-[35.16%] right-[14.24%] bottom-[35.94%] left-[83.19%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/linkedin.svg"
              />
              <img
                className="absolute h-[28.92%] w-[2.57%] top-[35.16%] right-[10.83%] bottom-[35.93%] left-[86.6%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/instagram.svg"
              />
              <div className="absolute top-[27px] left-[454px] font-medium">
                TM
              </div>
              <img
                className="absolute h-[28.91%] w-[3.64%] top-[35.16%] right-[21.57%] bottom-[35.94%] left-[74.79%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/layer-1.svg"
              />
              <img
                className="absolute h-[28.63%] w-[2.54%] top-[35.16%] right-[26.07%] bottom-[36.22%] left-[71.39%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/layer-11.svg"
              />
              <div className="absolute top-[calc(50%_-_15px)] left-[156px] text-[48px] leading-[30px] font-abhaya-libre">
                Street Genetics
              </div>
            </div>
            <div className="relative bg-black w-[1440px] h-20 overflow-hidden shrink-0 text-dimgray">
              <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_241px)] font-medium">
                Crescenza © Copyright 2023 All Rights Reserved
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_+_2891px)] left-[calc(50%_-_936px)] [background:linear-gradient(90deg,_#000,_rgba(0,_0,_0,_0)_23.94%,_rgba(0,_0,_0,_0)_72.74%,_#000)] w-[1871px] h-[520px]" />
        <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-black [backdrop-filter:blur(50px)] w-[1440px] h-[84px] flex flex-row items-center justify-between py-[15px] px-[156px] box-border text-21xl font-abhaya-libre">
          <img
            className="relative w-[57px] h-[60px] cursor-pointer"
            alt=""
            src="/leading-icon.svg"
            onClick={openMENU}
          />
          <div className="relative leading-[30px]">Street Genetics</div>
          <img
            className="relative w-[60px] h-[60px] cursor-pointer"
            alt=""
            src="/frame-47.svg"
            onClick={openCART}
          />
        </div>
      </div>
      {isMENUOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMENU}
        >
          <MENU onClose={closeMENU} />
        </PortalPopup>
      )}
      {isCARTOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCART}
        >
          <CART onClose={closeCART} />
        </PortalPopup>
      )}
    </>
  );
};

export default HOME;
