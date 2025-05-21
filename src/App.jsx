import { useEffect, useState } from 'react';
import LogoImg from './assets/Automa.png';
import GraphImg from './assets/ChatGPT Image Apr 7, 2025, 12_16_55 AM.png';
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

const fruitsItems = ['corn', 'Banana', 'Yam', 'Beans', 'Mango'];
const drynessItems = ['Dry', 'Mildy Dry', 'Very Dry'];
function App() {
  const [isDark, setIsDark] = useState(false);

  // Load theme preference on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

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
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-[60rem] h-[34rem] rounded-[12px] transition-colors duration-300 grid grid-cols-[20%_80%] grid-rows-[15%_85%]">
        <div className="border-b border-r rounded-tl-[10px] flex justify-center items-center">
          <img className="w-[10rem]" src={LogoImg} alt="Logo" />
        </div>

        <div className="border-b rounded-tr-[10px] flex items-center">
          <div className="flex justify-center items-center gap-4 ml-auto mr-5">
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
          <h3 className="font-[Inder] font-normal text-base ml-6">
            Live Data Overview
          </h3>
          <div className="border border-gray-300 p-2 flex flex-col mt-3 rounded-2xl pl-5">
            <p className="font-[Inder] text-[14px] ">Temperature</p>
            <p className="font-[Inconsolata] font-extrabold text-[40px]">
              135°c
            </p>
            <div className="w-fit bg-green-100 rounded-[10px] px-6 py-0.5 flex items-center justify-center gap-3">
              <FaCheckCircle className="text-green-700" />
              <p>Safe</p>
            </div>
          </div>

          <p className=" ml-6 mt-5 font-[Inder] text-[16px]">
            Real-Time Graphs
          </p>

          <div className="mt-2 flex gap-4">
            <div className="w-[30%] flex flex-col justify-center items-center border border-gray-300 rounded-xl p-2 ">
              <p className="font-[Inder] text-[14px]">Temperature & Humidity</p>
              <img className="w-[95%]" src={GraphImg} alt="" />
            </div>

            <div className="w-[30%] flex flex-col justify-center items-center border border-gray-300 rounded-xl p-2 mt ">
              <p className="font-[Inder] text-[14px]">Temperature & Humidity</p>
              <img className="w-[95%]" src={GraphImg} alt="" />
            </div>

            <div className="w-[30%] flex flex-col justify-center items-center border border-gray-300 rounded-xl p-2 mt ">
              <p className="font-[Inder] text-[14px]">Efficiency</p>
              <p className="border-6 border-blue-300 p-3 rounded-[50%]">92%</p>
            </div>
          </div>

          <div className="mt-3 w-[40%]">
            <h3 className="font-[Inder] font-normal text-base ml-6">
              Control Panel
            </h3>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-[80%] outline-none">
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
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
