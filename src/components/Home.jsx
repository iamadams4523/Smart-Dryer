import { useEffect, useState } from 'react';
import LogoImg from '../assets/Automa.png';
import GraphImg from '../assets/ChatGPT Image Apr 7, 2025, 12_16_55 AM.png';
import BarImg from '../assets/ChatGPT Image Apr 7, 2025, 12_16_55 AM 1.png';
import { Switch } from '@/components/ui/switch';
import { FaLaptopCode } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const fruitsItems = ['corn', 'Banana', 'Yam', 'Beans', 'Mango'];
const drynessItems = ['Dry', 'Mildy Dry', 'Very Dry'];

function Home() {
  const [isDark, setIsDark] = useState(false);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // Load theme preference on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, '0')}:
    ${String(minutes).padStart(2, '0')}:
    ${String(seconds).padStart(2, '0')}`;
  };

  // Toggle HTML class and save preference
  const handleToggle = (checked) => {
    setIsDark(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="bg-green-800 flex justify-center items-center w-screen h-screen">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-[60rem] h-[37rem] rounded-[12px] transition-colors duration-300 grid grid-cols-[20%_80%] grid-rows-[15%_85%]">
        <div className="border-b border-r rounded-tl-[10px] flex justify-center items-center">
          <img className="w-[10rem]" src={LogoImg} alt="Logo" />
        </div>

        <div className="border-b rounded-tr-[10px] flex items-center">
          <div className="flex justify-center items-center gap-4 ml-auto mr-5">
            <h2 className="font-[inder] font-bold text-2xl">
              {formatTime(time)}
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-[12px] h-[12px] bg-green-800 rounded-full"></div>
              <p className="font-[Inder] font-normal text-base">Running</p>
            </div>
            <Switch checked={isDark} onCheckedChange={handleToggle} />
          </div>
        </div>

        <div className="border-r rounded-bl-[10px]">
          <div className="flex justify-center items-center gap-2 mt-6">
            <FaLaptopCode />
            <p className="font-[Inder] font-normal text-base">Dashboard</p>
          </div>
        </div>

        <div className="p-4 rounded-br-[10px]">
          <h3 className="font-[Inder] font-extrabold text-[20px] ml-6">
            Live Data Overview
          </h3>
          <div className="flex w-[90%] gap-4">
            <div className="border border-gray-300 p-2 flex flex-col mt-3 rounded-2xl pl-5 w-[45%]">
              <p className="font-[Inder] text-[14px] font-semibold">
                Temperature
              </p>
              <p className="font-[Inconsolata] font-extrabold text-[40px]">
                135°c
              </p>
              <div className="w-fit bg-green-100 rounded-[10px] px-6 py-0.5 flex items-center justify-center gap-3">
                <FaCheckCircle className="text-green-700" />
                <p>Safe</p>
              </div>
            </div>
            <div className="border border-gray-300 p-2 flex flex-col mt-3 rounded-2xl pl-5 w-[45%]">
              <p className="font-[Inder] text-[14px] font-semibold ">
                Humidity
              </p>
              <p className="font-[Inconsolata] font-extrabold text-[40px]">
                22%
              </p>
              <div className="w-fit bg-green-100 rounded-[10px] px-6 py-0.5 flex items-center justify-center gap-3">
                <FaCheckCircle className="text-green-700" />
                <p>Safe</p>
              </div>
            </div>
          </div>

          <p className=" ml-6 mt-5 font-[Inder] text-[16px] font-bold">
            Real-Time Graphs
          </p>

          <div className="mt-2 flex gap-4">
            <div className="w-[30%] flex flex-col justify-center items-center border border-gray-300 rounded-xl p-2 gap-3">
              <p className="font-[Inder] text-[14px]">Temperature & Humidity</p>
              <img className="w-[95%]" src={GraphImg} alt="" />
            </div>

            <div className="w-[30%] flex flex-col justify-center items-center border border-gray-300 rounded-xl p-2 gap-1">
              <p className="font-[Inder] text-[14px]">Drying Process</p>
              <img className="w-[95%]" src={BarImg} alt="" />
            </div>

            <div className="w-[30%] flex flex-col justify-center items-center border border-gray-300 rounded-xl p-2 gap-3">
              <p className="font-[Inder] text-[14px]">System Efficiency</p>
              <p className="border-6 border-blue-300 p-3 rounded-[50%]">92%</p>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-3">
            <div className="w-[60%]">
              <h3 className="font-[Inder] font-semibold text-base text-center">
                Control Panel
              </h3>

              <div className="flex w-full gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-[50%] outline-none">
                    <p className="w-full font-[Inder] text-[16px] text-center mt-3 border border-gray-300 py-2 rounded-[12px]">
                      Start Drying
                    </p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className="text-xl">
                      Start Drying
                    </DropdownMenuLabel>
                    <div className="mt-3 flex flex-col gap-3 items-center">
                      <h2 className="text-[13px] font-semibold ml-3 self-start">
                        Drying Mode
                      </h2>
                      <Select>
                        <SelectTrigger className="w-[160px]">
                          <SelectValue placeholder="Fruits" />
                        </SelectTrigger>
                        <SelectContent>
                          {fruitsItems.map((fruit, index) => (
                            <SelectItem key={index} value={fruit}>
                              {fruit}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="mt-3 flex flex-col gap-3 items-center">
                      <h2 className="text-[13px] font-semibold ml-3 self-start">
                        Dryness Level
                      </h2>
                      <Select>
                        <SelectTrigger className="w-[160px]">
                          <SelectValue placeholder="dryness level" />
                        </SelectTrigger>
                        <SelectContent>
                          {drynessItems.map((fruit, index) => (
                            <SelectItem key={index} value={fruit}>
                              {fruit}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div
                      onClick={() => {
                        setRunning(true);
                      }}
                      className="font-[inconsolata] font-bold text-sm text-white text-center px-1 py-1 bg-green-400 mt-7 rounded-[10px] cursor-pointer"
                    >
                      Submit
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="w-[50%] outline-none">
                    <p className="w-full font-[Inder] text-[16px] text-center mt-3 border border-gray-300 py-2 rounded-[12px]">
                      Custom Mode
                    </p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex flex-col">
                        <label
                          className="font-[inconsolata] font-bold text-sm"
                          htmlFor="temperature"
                        >
                          Temperature
                        </label>
                        <input
                          id="temperature"
                          className="outline w-[7rem] h-[1.5rem] pl-3 bg-white rounded-[7px]"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <div className="flex flex-col mt-5">
                        <label
                          className="font-[inconsolata] font-bold text-sm"
                          htmlFor="humidity"
                        >
                          Humidity
                        </label>
                        <input
                          id="humidity"
                          className="outline w-[7rem] h-[1.5rem] pl-3 bg-white rounded-[7px]"
                          type="text"
                        />
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setRunning(true);
                      }}
                      className="font-[inconsolata] font-bold text-sm text-white text-center px-1 py-1 bg-green-400 mt-7 rounded-[10px] cursor-pointer"
                    >
                      Submit
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="mt-3 w-[40%]">
              <h3 className="font-[Inder] font-semibold text-base ml-[4rem]">
                Extra Status
              </h3>

              <DropdownMenu>
                <DropdownMenuTrigger className="w-[80%] outline-none">
                  <p className="w-full font-[Inder] text-[16px] text-center mt-3 border border-gray-300 py-2 rounded-[12px]">
                    Fan and Heater status
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="h-[10rem] flex flex-col gap-5">
                  <div className="mt-3 flex flex-col gap-3 items-center">
                    <h2 className="text-[13px] font-semibold  self-start">
                      Fan status
                    </h2>
                    <Slider defaultValue={[33]} max={100} step={1} />
                  </div>
                  <div className="mt-5  flex flex-col gap-3 items-center">
                    <h2 className="text-[13px] font-semibold self-start">
                      Heater status
                    </h2>
                    <Slider defaultValue={[33]} max={100} step={2} />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
