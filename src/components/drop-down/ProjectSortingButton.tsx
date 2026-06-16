import { useState } from "react";
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
const options = ["A - Z", "Z - A"];

const ProjectSortingButton = () => { 
    const [selectedOption, setSelectedOption] = useState("A - Z");
return (
    <div className="py-[0.3rem]">
        <DropdownMenu>
                <DropdownMenuTrigger asChild  className="border-none 
                focus:bg-transparent !bg-transparent">
                    <Button variant="outline">{selectedOption}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                    <DropdownMenuLabel>Sort</DropdownMenuLabel>
                        {options.map((option, index) => (
                            <DropdownMenuItem 
                                key={index}
                                onClick={() => setSelectedOption(option)}
                                className="hover:cursor-pointer "
                            >
                            {option}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                    
                </DropdownMenuContent>
            </DropdownMenu>
    </div>
    
    )
}

export default ProjectSortingButton