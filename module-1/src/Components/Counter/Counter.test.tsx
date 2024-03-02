import { render,screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import Counter from "./Counter";

describe("Counter Component Tests",()=>{
    //Test that component renders initial value provided in props
    test("renders initial value provided in props",()=>{
        const initialValue = 2; 
        render(<Counter initialValue={initialValue} />);
        const valueElement = screen.getByText(`Counter: ${initialValue}`);
        expect(valueElement).toBeInTheDocument();
    });
    
    //Test that a click event on "decrement" button decrements the displayed value
    test("click event on decrement button decrements the displayed value",async ()=>{
        let initialValue = 1; 
        user.setup()
        render(<Counter initialValue={initialValue} />);
        const decrementButton = screen.getByRole('button',{name: "Decrement"});
        await user.click(decrementButton).then(
            ()=>{
                initialValue--;
                const valueElement = screen.getByText(`Counter: ${initialValue}`);
                expect(valueElement).toBeInTheDocument();
                expect(valueElement).toHaveTextContent("Counter: 0");
            }
        );
    });

    //Test that a click event on "increment" button increments the displayed value
    test("click event on decrement button decrements the displayed value",async ()=>{
        let initialValue = 0; 
        user.setup()
        render(<Counter initialValue={initialValue} />);
        const incrementButton = screen.getByRole('button',{name: "Increment"});
        await user.click(incrementButton).then(
            ()=>{
                initialValue++;
                const valueElement = screen.getByText(`Counter: ${initialValue}`);
                expect(valueElement).toBeInTheDocument();
            }
        );
    });
});