import React from 'react';
import {shallow} from 'enzyme';
import BasicView from './BasicView';
import toJson from 'enzyme-to-json';

describe('Shallow tests', ()=>{
    test('test 1', ()=>{
        const wrapper = shallow(<BasicView/>)
        expect(wrapper.find('div').length).toEqual(1);

    });

    test('test 2', ()=>{
        const wrapper = shallow(<BasicView/>)

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('test 3', ()=>{

        const callAPI = jest.fn();
        const wrapper = shallow(<BasicView callAPI={callAPI} b={{a:"betsy"}}/>)
        expect(callAPI).toHaveBeenCalledTimes(0);

        wrapper.find('span').first().simulate('click');
        expect(callAPI).toHaveBeenCalledTimes(1);
        expect(callAPI).toBeCalledWith(1, 2, 3);

    });

    test('test 4', ()=>{
        const wrapper = shallow(<BasicView b={{a:"betsy"}}/>)
        expect(wrapper.instance().state).toEqual({value: 1, disabled: false})

    });
    test('test 5', ()=>{
        const wrapper = shallow(<BasicView disabled={false} b={{a:"betsy"}}/>)
        expect(wrapper.instance().state).toEqual({value: 1, disabled: false})

    });
    test('test 6', ()=>{
        const wrapper = shallow(<BasicView disabled={false} b={{a:"betsy"}}/>)

        const span = wrapper.find('span').at(1);
        expect(span.text()).toEqual('DISABLE'); 
    });
    test('test 7', ()=>{
        const wrapper = shallow(<BasicView disabled={false} b={{a:"betsy"}}/>)

        wrapper.instance().setState({disabled: true})
        const span = wrapper.find('span').at(1);
        expect(span.text()).toEqual('ENABLE'); 
    });
})

