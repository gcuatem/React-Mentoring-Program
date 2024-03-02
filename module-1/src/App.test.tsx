
import { render, screen } from '@testing-library/react'
import {describe,expect,it} from "vitest";
import App from './App'

describe("Test App",()=>{
    it("testing main APP",()=>{
        render(<App />);
        const title=screen.getByText("ReactJS Mentor Program");
        expect(title).toBeInTheDocument();
    });
});