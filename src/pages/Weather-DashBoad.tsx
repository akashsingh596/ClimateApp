import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const WeatherDashBoad = () => {

  

  return (
    <div className="space-y-4">
      {/* {Favroit} */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Locations</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          // onClick={}
          // disabled = {}
        >
          <RefreshCw className="h-4 w-4"></RefreshCw>
        </Button>
      </div>
    </div>
  );
};

export default WeatherDashBoad;
