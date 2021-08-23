// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.fetch = () =>{
    throw new Error("You have to mock the fetch");
}

const originalConsoleError = console.error;

console.error = message => {
    if (/(Failed prop type)/.test(message)) {
        throw new Error(`__PROPTYPE_ERROR__${message}`);
    }

    originalConsoleError(message)
}